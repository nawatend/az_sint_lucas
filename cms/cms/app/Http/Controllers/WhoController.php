<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use Google\Cloud\Storage\StorageClient;
use Illuminate\Support\Facades\Storage;

class WhoController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(){
        $factory = (new Factory)
        ->withServiceAccount(__DIR__.'/firebasekey.json');  
    $database = $factory->createDatabase();

    // get all posts
    $references = $database
    ->getReference('who_is_who');
    
    $posts = $references->getValue();
    
    foreach($posts as $post){
        if($post != null)
        $all_post[] = $post;
    }
    return view('who.dashboard', compact('all_post'));
    }
    public function create(){

        $newPost = $database
        ->getReference('who_is_who')
        ->push([
            'title' => 'Post title',
            'body' => 'This should probably be longer.'
        ]);
        return view('who.dashboard');
    }

    public function edit($id){
        $found_post;
        $factory = (new Factory)
        ->withServiceAccount(__DIR__.'/firebasekey.json');  
        $database = $factory->createDatabase();

        // get all posts
        $references = $database
        ->getReference('who_is_who');
        $posts = $references->getValue();

        foreach($posts as $post){
            if($post != null)
           if($post['id'] == $id){
                $found_post = $post;
           }
        }

        return view('who.edit')->with('post', $found_post);
    }
    
    public function update(Request $request, $id){

        
        $factory = (new Factory)
        ->withServiceAccount(__DIR__.'/firebasekey.json');

        $database = $factory->createDatabase();

        $storage = (new Factory())
        ->withServiceAccount(__DIR__.'/firebasekey.json')
        ->createStorage();

        $storageClient = $storage->getStorageClient([
            'projectId' => 'az-sint-lucas-gent'
        ]);
        $file = $request->file('file');
        if ($request->hasFile('file')) {
            if ( $file->isValid()) {
        
                $name = $file->getClientOriginalName();
                $extension = $file->getClientOriginalExtension();
                //$path = $request->file('file')->store('upload');
        
                $path = Storage::disk('public')->putFileAs('', $file, $name);
                $content = Storage::disk('public')->get($path);
                
                $defaultBucket = $storage->getBucket();
                // Upload a file to the bucket.
                $defaultBucket->upload(
                    $content,
                    [
                        'name' => $name
                    ]);
                    $database->getReference('who_is_who/'.$id)->update([
                        'title' => $request->get('title'),
                        'description' => $request->get('description'),
                        'image' => $name
                    ]);
                }
        }

        $database->getReference('who_is_who/'.$id)->update([
            'title' => $request->get('title'),
            'description' => $request->get('description'),
        ]); 

        notify()->success('Character updated successfully');
        return redirect()->route('whoiswho.index');
    }

    public function show(){
        return view('who.edit');
    }
    
}