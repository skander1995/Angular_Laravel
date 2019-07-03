<?php

namespace App\Http\Controllers;

use DB;
use App\Post;
//to use SQL querys
use App\User;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //fetch all posts
       $posts= Post::get(); 
       //$posts= Post::OrderBy('title','desc')->get();
       //$posts= Post::OrderBy('title','desc')->take(1)->get(); 
      // $posts= Post::OrderBy('title','desc')->paginate(1); 
       // $posts= Post::where('title','post two')->get(); 
        //$posts=DB::select('SELECT * FROM posts');
       //return Post::all();
       // return view('posts.index')->with('posts',$posts);
        return response()->json($posts, 200);
    }


//***----------------------localhost:8000/api/posts/store---------------------------------- */
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'title'=>'required',
            'body'=>'required' 
        ]);
        $post= new Post();
        $post->title= $request->input('title');
        $post->body= $request->input('body');
            if ($request->file('file'));
        $post->file=$request->file('file')->store('file','public');
        $user= $request->user();
        
        $user->posts()->save($post);

    
       // $post->save();
             //return redirect('/posts');
    return response()->json($post, 200);
            }


//***--------------------------------------------------------------------------------- */
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {    
        $post=Post::find($id);
        //$post=Post::with('comments.user')->with('user')->find($id);

        //return view('posts.show')->with('post',$post);
        return response()->json($post,200);
    }


//***--------------------------------------------------------------------------------- */
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }


//***--------------------------------------------------------------------------------- */
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function approve(Request $request, $id)
    {
        $post = Post::find($id);
        $post->is_approved = "1";
        $post->save();    
        return response()->json($post, 200);
    }

    public function disapprove(Request $request, $id)
    {
        $post = Post::find($id);
        $post->is_approved = "0";
        $post->save();    
        return response()->json($post, 200);
    }



//***------------------------------localhost:8000/api/posts/delete/1 ------------------------------ */
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post=Post::find($id);
        $post->delete();
        //return  redirect('/posts');
        return response()->json(['message'=>'post was deleted',$post], 200);
    }
}
