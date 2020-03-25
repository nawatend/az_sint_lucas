<?php $__env->startSection('title', 'Rooms Dashboard'); ?>

<?php $__env->startSection('content_header'); ?>
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
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Lab</h5>
    </div>
      <div class="card-body">
        <p class="card-text">Edit Lab attributes</p>
        <a href="/rooms/lab" class="btn btn-primary">Take me there</a>
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
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Dagziekenhuis</h5>
    </div>
      <div class="card-body">
        <p class="card-text">Edit Dagziekenhuis attributes</p>
        <a href="/rooms/dagziekenhuis" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Intensievezorg</h5>
    </div>
      <div class="card-body">
        <p class="card-text">Edit Intensievezorg attributes</p>
        <a href="/rooms/intensievezorg" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Kinderafdeling</h5>
    </div>
      <div class="card-body">
        <p class="card-text">Edit Kinderafdeling attributes</p>
        <a href="/rooms/kinderafdeling" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Operatiekamer</h5>
    </div>
      <div class="card-body">
        <p class="card-text">Edit Operatiekamer attributes</p>
        <a href="/rooms/operatiekamer" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">Radiologie</h5>
    </div>
      <div class="card-body">
        <p class="card-text">Edit Radiologie attributes</p>
        <a href="/rooms/radiologie" class="btn btn-primary">Take me there</a>
      </div>
    </div>
  </div>
</div>
</div>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('css'); ?>
    <link rel="stylesheet" href="/css/admin_custom.css">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('js'); ?>
    <script> console.log(); </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('adminlte::page', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/quintenleysen/Documents/SINT_LUCAS/az_sint_lucas/cms/cms/resources/views/rooms/allrooms.blade.php ENDPATH**/ ?>