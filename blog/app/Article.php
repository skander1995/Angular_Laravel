<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['title', 'description'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function comments()
    {
        return $this->morphMany('App\Comment', 'commentable');
    }
}
