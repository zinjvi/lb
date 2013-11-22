<h3>Изображение заголовка</h3>

<div class="header-image-list">

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

<!--    --><?php //echo CHtml::beginForm('chooseHeaderImage', 'post'); ?>
        <?php foreach ($headerImages as $headerImage) { ?>
            <div class="row">
<!--                --><?php //echo CHtml::radioButton('headerImage', $headerImage->active); ?>
                <img src="<?php echo '/'.Constan::$HEADER_IMAGE_PATH.$headerImage->path; ?>">
                <span><?php echo $headerImage->name; ?></span>
                <?php echo CHtml::link('удалить', array('removeHeaderImage',
                    'id'=>$headerImage->id)); ?>
                <?php echo CHtml::link('Назначить', array('chooseHeaderImage',
                    'id'=>$headerImage->id));?>
                <?php if($headerImage->active){?>
                    active
                <?php }?>
            </div>
        <?php } ?>
<!--    --><?php //echo CHtml::submitButton('Submit');?>
<!--    --><?php //echo CHtml::endForm(); ?>
</div>
