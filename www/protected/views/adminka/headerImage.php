<h3>Изображение заголовка</h3>

<?php echo CHtml::beginForm('','post',array('enctype'=>'multipart/form-data'));?>
<div class="input-line">
    <div class="title">Name :</div>
    <div class="input"><?php echo CHtml::activeTextField($headerImage, "name");?></div>
</div>
<div class="input-line">
    <div class="title">File :</div>
    <div class="input"><?php echo CHtml::activeFileField($headerImage, "path");?></div>
</div>
<div class="input-line">
    <div class="title"></div>
    <div class="input"><?php echo CHtml::submitButton('Submit');?></div>
</div>
<?php echo CHtml::endForm();?>

<h3>Доступные изображеня</h3>

<div class="header-image-list">
        <?php foreach ($headerImages as $headerImage) { ?>
            <div class="row">
                <div class="left">
                    <span class="name"><?php echo $headerImage->name; ?></span>
                    <?php echo CHtml::link('удалить', array('removeHeaderImage',
                        'id'=>$headerImage->id), array('class'=>'remove')); ?>
                    <?php echo CHtml::link('назначить', array('chooseHeaderImage',
                        'id'=>$headerImage->id), array('class'=>'assign'));?>
                    <?php if($headerImage->active){?>
                        <span class="active">active</span>
                    <?php }?>
                </div>
                <div class="image">
                    <img src="<?php echo '/'.Constan::$HEADER_IMAGE_PATH.$headerImage->path; ?>">
                </div

            </div>
        <?php } ?>
</div>
