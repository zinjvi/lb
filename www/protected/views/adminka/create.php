<script type="text/javascript" src="../../../js/ckeditor/ckeditor.js"></script>

<script type="text/javascript">
    $(function () {
        CKEDITOR.replace('ck', {
            filebrowserImageUploadUrl: '/adminka/saveImage',
            filebrowserWindowWidth: 800,
            filebrowserWindowHeight: 500
        });
    });
</script>

<h3>Create article</h3>

<div class="form">
    <?php echo CHtml::beginForm('','post',array('enctype'=>'multipart/form-data'));?>
    <div class="input-line">
        <div class="title">Title :</div>
        <div class="input"><?php echo CHtml::activeTextField($article, "title");?></div>
    </div>
    <div class="input-line">
        <div class="title">Image :</div>
        <div class="input"><?php echo CHtml::activeFileField($article, 'image');?></div>
    </div>
    <div class="input-line">
        <div class="title">Category :</div>
        <div class="input"><?php echo CHtml::dropDownList("Article[category_id]", "0",
                CHtml::listData($categories, "id", "name"), array('empty'=>''));?></div>
    </div>
    <div class="input-block">
        <div class="title">Content :</div>
        <div class="input"><?php echo CHtml::activeTextArea($article, "description", array(
                "id" => "ck"));?>
        </div>
    </div>
    <div class="input-line">
        <?php echo CHtml::submitButton('Submit');?>
    </div>
    <?php echo CHtml::endForm(); ?>
</div>
