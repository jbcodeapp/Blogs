<?php
// app/Models/Contact.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class Contact extends Model
{
    protected $fillable = ['name', 'email', 'message'];

    protected static function boot()
    {
        parent::boot();

        static::created(function ($contact) {
            $adminEmail = "your_admin_email@gmail.com";
            Mail::to($adminEmail)->send(new ContactMail($contact));
        });
    }
}
