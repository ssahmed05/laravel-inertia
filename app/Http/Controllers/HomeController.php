<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index() {

        $data['users'] = User::all('id', 'name', 'email');
        return Inertia::render('Home', $data)->withViewData(['title' => 'User List']);

    }
    public function aboutUs()
    {
        return Inertia::render('AboutUs')->withViewData(['title' => 'About Us']);
    }
    public function contact()
    {
        return Inertia::render('ContactUs')->withViewData(['title' => 'Contact Us']);
    }
}
