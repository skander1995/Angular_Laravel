@extends('layout.app')


@section('content')
<a href="/posts" class="btn btn-default">Go Back</a>
        

            <h1>{{$post->title}}</h1>
<p>{{$post->body}}</p>
            <small>Written on {{$post->created_at}}</small>
<a href="{{route('posts.delete',['id'=>$post->id] ) }}" class="btn btn-default" >Delete<i class="far fa-trash-alt" ></i></a>
            {{--
                
<form action="{{ url('/posts', ['id' => $post->id]) }}" method="post">
                <input class="btn btn-default" type="submit" value="Delete" />
                {!! method_field('delete') !!}
                {!! csrf_field() !!}
            </form>
                --}}
 

@endsection