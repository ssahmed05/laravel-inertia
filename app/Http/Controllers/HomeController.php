<?php

namespace App\Http\Controllers;

use App\Models\Contact;
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

        $data['contact']   = Contact::all('id', 'name', 'email', 'phone_no', 'message');
        return Inertia::render('Home', $data);

    }
    public function aboutUs()
    {
        return Inertia::render('AboutUs');
    }
    public function services()
    {
        return Inertia::render('Services');
    }
    public function contactUs() //for new Template website
    {
        return Inertia::render('Contact');
    }

    public function contact()
    {
        return Inertia::render('ContactUs');
    }

    public function postContact(Request $request)
    {
        $request->validate([
            'name'     => ['required'],
            'email'    => ['required'],
            'subject'  => ['required'],
            'phone_no' => ['required'],
            'message'  => ['required']
        ]);
        $contact = new Contact;
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->subject = $request->subject;
        $contact->phone_no = $request->phone_no;
        $contact->message = $request->message;

        $contact->save();
        return redirect()->route('home');
    }

    public function deleteContact($id){

        $contact = Contact::find($id);
        $contact->delete();
        return redirect()->route('home');
    }
    public function editContact($id){

        $data['contact'] = Contact::find($id);
        return Inertia::render('ContactEdit', $data);

    }
    public function updateContact($id, Request $request){

        $request->validate([

            'name'     => ['required'],
            'email'    => ['required'],
            'phone_no' => ['required'],
            'message'  => ['required']

        ]);

        $contact           = Contact::find($id);
        $contact->name     = $request->name;
        $contact->email    = $request->email;
        $contact->phone_no = $request->phone_no;
        $contact->message  = $request->message;
        $contact->save();
        return redirect()->route('home');

    }
}
