<?php

namespace App\Http\Controllers;

namespace App\Models;


use Illuminate\Support\Facades\Gate;
use App\Http\Controllers\Controller;
use App\Models\Post;

class PostController extends Controller
{
    public function edit(Post $post)
    {
        // Check if the user is authorized to edit the post
        if (Gate::allows('edit-post', $post)) {
            // User is authorized to edit the post
            // Your code for editing the post goes here

            return view('posts.edit', ['post' => $post]);
        } else {
            // User is not authorized to edit the post
            // You can handle unauthorized access here, such as showing an error message or redirecting
            return redirect()->route('home')->with('error', 'You are not authorized to edit this post.');
        }
    }
}
