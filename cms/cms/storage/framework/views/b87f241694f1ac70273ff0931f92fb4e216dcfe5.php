<?php $__env->startSection('title', 'Dashboard'); ?>

<?php $__env->startSection('content_header'); ?>
    <h1>Dashboard</h1>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="row">
  <div class="col-12">
  <div class="card mb-3">
  <div class="card-header border">
  <h3 class="card-title">User info</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">email: <?php echo e($user['email']); ?></li>
    <li class="list-group-item">name: <?php echo e($user['name']); ?></li>
    <li class="list-group-item">    <a class="btn btn-primary" href="<?php echo e(route('password.request')); ?>">
                                        <?php echo e(__('Change Password')); ?>

    </a></li>
  </ul>
</div>

  </div>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('css'); ?>
    <link rel="stylesheet" href="/css/admin_custom.css">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('js'); ?>
    <script> console.log(); </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('adminlte::page', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/quintenleysen/Documents/SINT_LUCAS/az_sint_lucas/cms/cms/resources/views/admin/settings.blade.php ENDPATH**/ ?>