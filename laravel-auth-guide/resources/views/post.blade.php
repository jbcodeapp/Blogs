@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>{{ $post->title }}</h1>
        <p>{{ $post->content }}</p>

        @can('edit-post', $post)
            <!-- Content for authorized users -->
            <a href="{{ route('posts.edit', ['post' => $post]) }}" class="btn btn-primary">Edit Post</a>
        @else
            <!-- Content for unauthorized users -->
            <p>You do not have permission to edit this post.</p>
        @endcan
    </div>
@endsection
