<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $posts = Post::paginate(20);
        return view('posts', compact('posts'));
    }

    public function show($id)
    {
        $post = Post::find($id);
        $post->increment('viewer');
        return view('postShow', compact('post'));
    }
}
