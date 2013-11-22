<?php
/* @var $this BeanController */
/* @var $model Bean */

$this->breadcrumbs=array(
	'Beans'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List Bean', 'url'=>array('index')),
	array('label'=>'Manage Bean', 'url'=>array('admin')),
);
?>

<h1>Create Bean</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>