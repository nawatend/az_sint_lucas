<?php $__env->startSection('title', 'Rooms Dashboard'); ?>

<?php $__env->startSection('content_header'); ?>
<div class="container-fluid">
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1><?php echo e($kamer ?? 'Rooms'); ?>  Dashboard</h1>
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
           <?php echo e($kamer); ?>

           </li>
           </ol>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="box">
        <div class="box-header">
        </div>
        <div class="box-body">
        <table id="example1" class="table table-bordered table-striped">
        <thead>
        <tr>
            <th>spot</th>
            <th>description</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <?php $__currentLoopData = $all_post; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $post): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
            <td><?php echo e($post['spot']); ?></td>
                <td><?php echo e($post['description']); ?></td>
                <td>
                <a class="btn btn-primary" href="/rooms/<?php echo e($post['id']); ?>/edit" role="button">Edit</a>
                </td>
            </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
            </table>
    </div>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('css'); ?>
    <link rel="stylesheet" href="/css/admin_custom.css">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('js'); ?>
    <script> console.log(); </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('adminlte::page', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/quintenleysen/Documents/SINT_LUCAS/az_sint_lucas/cms/cms/resources/views/rooms/dashboard.blade.php ENDPATH**/ ?>