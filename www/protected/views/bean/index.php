<?php
/* @var $this BeanController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Beans',
);

$this->menu=array(
	array('label'=>'Create Bean', 'url'=>array('create')),
	array('label'=>'Manage Bean', 'url'=>array('admin')),
);
?>

<h1>Beans</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
