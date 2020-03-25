<?php $__env->startSection('title', 'Who is who Dashboard'); ?>

<?php $__env->startSection('content_header'); ?>
<div class="container-fluid">
    <div class="row mb-2">
        <div class="col-sm-6">
        <h1>Edit <?php echo e($post['title']); ?></h1>
        </div>
        <div class="col-sm-6">
           <ol class="breadcrumb float-sm-right">
           <li class="breadcrumb-item">
           <a href="/home">Home</a>
           </li>
           <li class="breadcrumb-item">
           <a href="/hometext">Home Text</a>
           </li>
           <li class="breadcrumb-item active">
           Edit <?php echo e($post['title']); ?>

           </li>
           </ol>
        </div>
    </div>
</div>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<form action="<?php echo e(route('hometext.update',$post['id'])); ?>" method="POST" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>
        <?php echo method_field('PUT'); ?>
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" name="title" class="form-control" value="<?php echo e($post['title']); ?>">
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  <button class="btn btn-danger">Cancel</button>
</form>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('css'); ?>
    <link rel="stylesheet" href="/css/admin_custom.css">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('js'); ?>
    <script> console.log(); </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('adminlte::page', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/quintenleysen/Documents/SINT_LUCAS/az_sint_lucas/cms/cms/resources/views/hometext/edit.blade.php ENDPATH**/ ?>