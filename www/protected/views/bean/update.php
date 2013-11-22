<?php
/* @var $this BeanController */
/* @var $model Bean */

$this->breadcrumbs=array(
	'Beans'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'List Bean', 'url'=>array('index')),
	array('label'=>'Create Bean', 'url'=>array('create')),
	array('label'=>'View Bean', 'url'=>array('view', 'id'=>$model->id)),
	array('label'=>'Manage Bean', 'url'=>array('admin')),
);
?>

<h1>Update Bean <?php echo $model->id; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>