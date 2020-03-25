<?php $__env->startSection('title', 'Rooms Edit'); ?>

<?php $__env->startSection('content_header'); ?>
<div class="container-fluid">
    <div class="row mb-2">
        <div class="col-sm-6">
        <h1>Edit <?php echo e($post['room']); ?> <?php echo e($post['id']); ?></h1>
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
           Edit  <?php echo e($post['room']); ?> <?php echo e($post['id']); ?>

           </li>
           </ol>
        </div>
    </div>
</div>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<form action="<?php echo e(route('rooms.update', $post['room'])); ?> " method="POST" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>
        <?php echo method_field('PUT'); ?>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" name="description" id="exampleFormControlTextarea1" ><?php echo e($post['description']); ?></textarea>
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <a href="/rooms" class="btn btn-danger">Cancel </a>
</form>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('css'); ?>
    <link rel="stylesheet" href="/css/admin_custom.css">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('js'); ?>
    <script> console.log(); </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('adminlte::page', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/quintenleysen/Documents/SINT_LUCAS/az_sint_lucas/cms/cms/resources/views/rooms/edit.blade.php ENDPATH**/ ?>