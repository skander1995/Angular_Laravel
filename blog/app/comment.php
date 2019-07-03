<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


// ClassName
class comment extends Model
{
    protected $with = ['user'];

    public function commentable()
    {
        return $this->morphTo();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    protected $fillable = ['body','user'];
    //
}
