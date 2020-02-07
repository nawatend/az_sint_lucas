@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Dashboard</h1>
@stop

@section('content')
<div class="row">
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Go to Rooms</h5>
    </div>
      <div class="card-body">
        <p class="card-text">Edit Rooms attributes</p>
        <a href="/rooms" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Go to 'Who is Who'</h5>
    </div>
      <div class="card-body">
        <p class="card-text">Edit characters of who is whot</p>
        <a href="/whoiswho" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Change Home Text</h5>
    </div>
      <div class="card-body">
        <a href="/rooms" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Change Exit Text</h5>
    </div>
      <div class="card-body">
        <a href="#" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
</div>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script> console.log(); </script>
@stop