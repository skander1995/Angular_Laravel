@extends('layout.app')

@section('content')
    <h1>Create Post</h1>
    
<form action="{{route('posts.store')}}" method="POST">
    
    {{ csrf_field() }}
    <div class="container">
        <div class="form-group">
            <label for="">Title</label>
            <input type="text" class="form-conrol" placeholder="Title" name="title">
        </div>
        <div class="form-group">
            <label for="">Description</label>
            <input type="text" class="form-conrol" placeholder="Description" name="body">
        </div>
        <div class="form-group">
            <button class="btn btn-success" type="submit">create</button>
        </div>
        
    
    
    </div>
    </form>
    
@endsection