<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use Google\Cloud\Storage\StorageClient;
use Illuminate\Support\Facades\Storage;
use Validator;

class GeneralController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){

        $factory = (new Factory)
        ->withServiceAccount(__DIR__.'/firebasekey.json');  
        $database = $factory->createDatabase();

        // get all posts
        $references = $database
        ->getReference('general');
        
        $posts = $references->getValue();
        
        foreach($posts as $post){
            $all_post[] = $post;
        }

        return view('general.dashboard',compact('all_post'));
    }

    public function edit($id){

        $found_post;
        $factory = (new Factory)
        ->withServiceAccount(__DIR__.'/firebasekey.json');  
        $database = $factory->createDatabase();

        // get all posts
        $references = $database
        ->getReference('general');
        $posts = $references->getValue();

        foreach($posts as $post){
           if($post['id'] == $id){
                $found_post = $post;
           }
        }

        return view('general.edit')->with('post', $found_post);
    }

    public function update(Request $request, $id){

        $factory = (new Factory)
        ->withServiceAccount(__DIR__.'/firebasekey.json');

        $database = $factory->createDatabase();

        $storage = (new Factory())
        ->withServiceAccount(__DIR__.'/firebasekey.json')
        ->createStorage();

        $validator = Validator::make($request->all(), [
            'audio' => 'required|mimes:mpga',
        ]);

            if($validator->fails()){
                notify()->error('Audio not updated successfully');
                return redirect()->back();
                //return redirect()->back()->withErrors($validator)->withInput();
            }else {
                if ( $request->hasFile('audio')){

                if($id =="geluidaan"){
                    $name = 'sound_on';
                }if($id =="geluiduit"){
                    $name = 'sound_off';
                }if($id =="normal_site"){
                    $name = 'normal_site';
                }if($id =="return"){
                    $name = 'return';
                }

                $file = $request->file('audio');
                $extension = $file->getClientOriginalExtension();
                $fullname = $name .'.'. $extension;
                $fullpathname = 'audios/' . $fullname;
                $path = Storage::disk('public')->putFileAs('', $file, $fullname);
                $content = Storage::disk('public')->get($path);
                
                $defaultBucket = $storage->getBucket();

                $defaultBucket->upload(
                    $content,
                    [
                        'name' => $fullpathname
                    ]);
                    $database->getReference('general/'.$id)->update([
                        'audio' => $fullname
                    ]);
                

                notify()->success('Audio updated successfully');
                return redirect()->route('general.index');
                }
                
            }
        }

}
