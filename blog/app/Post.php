<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $with = ['comments', 'user'];

    protected $fillable = ['title', 'body','file','id_user'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->morphMany('App\Comment', 'commentable');
    }
}
