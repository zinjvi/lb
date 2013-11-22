<!--    --><?php
/*
    $model = new Category();
    $model->name = "name";

    $this->widget('application.extensions.ckeditor.ECKEditor',array(
        'model'=>$model,                # Data-Model (form model)
        'attribute'=>'name',         # Attribute in the Data-Model
        'height'=>'400px',
        'width'=>'100%'
    ) ); */?>

<script type="text/javascript" src="../../../js/ckeditor/ckeditor.js"></script>

<!--    <textarea id="t" name="tex" class="ckeditor"></textarea>-->

<script type="text/javascript">
    $(function(){
        CKEDITOR.replace('ck',  {
            filebrowserBrowseUrl : '/main/test',
            filebrowserUploadUrl : '/main/test',
            filebrowserImageBrowseUrl : '/main/test',
            filebrowserImageUploadUrl : '/main/test',
            filebrowserWindowWidth  : 800,
            filebrowserWindowHeight : 500
        });
    });
</script>

<div class="form">
    <?php echo CHtml::beginForm();?>

    <?php echo CHtml::activeTextArea($article, "description", array(
        "id"=>"ck"
    ));?>

    <?php echo CHtml::submitButton('Submit'); ?>

    <?php echo CHtml::endForm();?>
</div>

<br>
<br>
<br>

<?php //echo CHtml::beginForm('','post',array('enctype'=>'multipart/form-data')); ?>
<?php //echo CHtml::activeFileField($article, 'image'); ?>
<?php //echo CHtml::submitButton('Submit'); ?>
<?php //echo CHtml::endForm(); ?>