@extends('layouts.app')

@section('content')
    @guest
        <div class="container">
            <div class="row justify-content-center">
                <div id="example" data="{{ 'guest' }}"></div>
                <script src="/js/app.js"></script>
            </div>
        </div>
    @else
        <div class="container">
            <div class="row justify-content-center">
                <div id="example" data='{{ Auth::user()->role }}'></div>
                <script src="/js/app.js"></script>
            </div>
        </div>
    @endguest
@endsection
