@extends('adminlte::page')

@section('title', 'Who is who Dashboard')

@section('content_header')
<div class="container-fluid">
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1>Who is who Dashboard</h1>
        </div>
        <div class="col-sm-6">
           <ol class="breadcrumb float-sm-right">
           <li class="breadcrumb-item">
           <a href="/home">Home</a>
           </li>
           <li class="breadcrumb-item active">
           Who is who
           </li>
           </ol>
        </div>
    </div>
</div>
@stop
@section('content')
    <div class="box">
        <div class="box-header">
            <h3 class="box-title"></h3>
        </div>
        <div class="box-body">
        <table id="example1" class="table table-bordered table-striped">
        <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            @foreach($all_post as $post)
            <tr>
                <td>{{$post['title']}}</td>
                <td>{{$post['description']}}</td>
                <td><img height="100px" src="{{url('/uploads/'.$post['image'])}}" alt="{{$post['image']}}"></td>
                <td>
                <a class="btn btn-primary" href="/whoiswho/{{$post['id']}}/edit" role="button">Edit</a>
                </td>
            </tr>
            @endforeach
            </tbody>
            </table>
    </div>
    @include('notify::messages')
        @notifyJs
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
    
@stop

@section('js')
@stop