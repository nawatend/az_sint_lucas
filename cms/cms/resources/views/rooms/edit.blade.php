@extends('adminlte::page')

@section('title', 'Rooms Edit')

@section('content_header')
<div class="container-fluid">
    <div class="row mb-2">
        <div class="col-sm-6">
        <h1>Edit {{$post['title']}}</h1>
        </div>
        <div class="col-sm-6">
           <ol class="breadcrumb float-sm-right">
           <li class="breadcrumb-item">
           <a href="/home">Home</a>
           </li>
           <li class="breadcrumb-item">
           <a href="/rooms">Rooms</a>
           </li>
           <li class="breadcrumb-item active">
           Edit {{$post['title']}}
           </li>
           </ol>
        </div>
    </div>
</div>

@stop

@section('content')
<form action="{{ route('rooms.update',  $post['id']) ,}}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" name="title" class="form-control" value="{{$post['title']}}">
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" name="description" id="exampleFormControlTextarea1" >{{$post['description']}}</textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">File input</label>
    <input type="file" name="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  <button class="btn btn-danger">Cancel</button>
</form>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script> console.log(); </script>
@stop