<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public  function index(){
        $title="welcome to Laravel home page ";
        //return view('pages.index',compact('title'));
        return view('pages.index')->with('title',$title);
    }
    public  function about(){
        $title="welcome to Laravel about page";
        //return view('pages.index',compact('title'));
        return view('pages.about')->with('title',$title);
    }
    public  function services(){
        $title="welcome to Laravel services page";
        //return view('pages.index',compact('title'));
        return view('pages.services')->with('title',$title);
    }
}
