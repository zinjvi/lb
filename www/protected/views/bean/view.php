<?php
/* @var $this BeanController */
/* @var $model Bean */

$this->breadcrumbs=array(
	'Beans'=>array('index'),
	$model->name,
);

$this->menu=array(
	array('label'=>'List Bean', 'url'=>array('index')),
	array('label'=>'Create Bean', 'url'=>array('create')),
	array('label'=>'Update Bean', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete Bean', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Bean', 'url'=>array('admin')),
);
?>

<h1>View Bean #<?php echo $model->id; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'id',
		'name',
	),
)); ?>
