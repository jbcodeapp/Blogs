<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Post;
use Illuminate\Support\Str;

class PostFactory extends Factory
{
    protected $model = Post::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->text(),
            'slug' => Str::slug($this->faker->text()),
            'body' => $this->faker->paragraph(),
        ];
    }
}
