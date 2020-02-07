@extends('adminlte::page')

@section('title', 'Rooms Dashboard')

@section('content_header')
<div class="container-fluid">
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1>Rooms Dashboard</h1>
        </div>
        <div class="col-sm-6">
           <ol class="breadcrumb float-sm-right">
           <li class="breadcrumb-item">
           <a href="/home">Home</a>
           </li>
           <li class="breadcrumb-item active">
           Rooms
           </li>
           </ol>
        </div>
    </div>
</div>
@stop

@section('content')
<div class="row">
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Labo</h5>
    </div>
      <div class="card-body">
        <p class="card-text">Edit Labo attributes</p>
        <a href="/rooms/labo" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Spoed</h5>
    </div>
      <div class="card-body">
        <p class="card-text">Edit Spoed attributes</p>
        <a href="/rooms/spoed" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
</div>
</div>

@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">r
@stop

@section('js')
    <script> console.log(); </script>
@stop