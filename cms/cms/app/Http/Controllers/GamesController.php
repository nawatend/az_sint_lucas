<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use Google\Cloud\Storage\StorageClient;
use Illuminate\Support\Facades\Storage;

class GamesController extends Controller
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
        ->getReference('games');
        
        $posts = $references->getValue();
        
        foreach($posts as $post){
            $all_post[] = $post;
        }
        return view('games.dashboard',compact('all_post'));
    }

    public function edit($id){


        $found_post;
        $factory = (new Factory)
        ->withServiceAccount(__DIR__.'/firebasekey.json');  
        $database = $factory->createDatabase();

        // get all posts
        $references = $database
        ->getReference('games');
        $posts = $references->getValue();

        foreach($posts as $post){
           if($post['id'] == $id){
                $found_post = $post;
           }
        }

        return view('games.edit')->with('post', $found_post);
    }

    public function update(Request $request, $id){

        $factory = (new Factory)
        ->withServiceAccount(__DIR__.'/firebasekey.json');

        $database = $factory->createDatabase();

        $database->getReference('games/'.  $id )->update([
            'title' => $request->get('title'),
        ]); 

        notify()->success('Game updated successfully');
        return redirect()->route('games.index');
    }
}
