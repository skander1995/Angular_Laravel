<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PassportAuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //--------------------------------------------http://localhost:8000/api/register
    public function register(Request $request)
    {
        $validatedData= $request->validate([
            'name'=>'required|max:55',
            'email'=>'email|required|unique:users',
            'password'=>'required|confirmed',
            'image'=>'required'
        ]);
        $user=new User();
        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->password=bcrypt($request->input('password'));
        $user->image=$request->file('image')->store('user','public');

       // $validatedData['password']= bcrypt($request->password);
        $user->save();
        //$user= User::create($validatedData);
        $accessToken = $user->createToken('authToken')->accessToken;
        return  response(['user'=>$user,'access_token'=>$accessToken]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

     //--------------------------------------------http://localhost:8000/api/login
    public function login(Request $request)
    {
        
        $logindata= $request->validate([
            'email'=>'email|required',
            'password'=>'required'
        ]);
        if (!auth()->attempt($logindata)) {
            return response(['message'=>'invalid credentials']);
        }
       $accessToken=auth()->user()->createToken('authtken')->accessToken;
        return  response(['access_token'=>$accessToken]);
    }
    public function index(Request $request)
    { return User::all();
    }
    
    public function activate(Request $request, $id)
    {
        $post = User::find($id);
        $post->status = "1";
        $post->save();    
        return response()->json($post, 200);
    }

    public function userinfo(Request $request, $id)
    {
        $post = User::find($id);
        $post->status = "1";
        $post->save();    
        return response()->json($post, 200);
    }
	
    public function logout(Request $request) {
        $value = $request->bearerToken();
        if ($value) {
     
            $id = (new Parser())->parse($value)->getHeader('jti');
            $revoked = DB::table('oauth_access_tokens')->where('id', '=', $id)->update(['revoked' => 1]);
            $this->guard()->logout();
        }
        Auth::logout();
        return Response(['code' => 200, 'message' => 'You are successfully logged out'], 200);
    }
}
