<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>Laravel Post View Count Tutorial </title>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
    />
</head>
<body>
<div class="container mt-5" style="max-width: 750px">
    <h1>Laravel Post View Count Tutorial </h1>
    <div id="data-wrapper">
        @foreach ($posts as $post)
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">{{ $post->title }}</h5>
                    {!! Str::limit($post->body, 100) !!}
                    <br />
                    <a href="{{ route('posts.show', $post->id) }}">View</a>
                </div>
            </div>
        @endforeach
    </div>
</div>
</body>
</html>
