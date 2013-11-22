<h3>Create category</h3>

<div class="form">
    <?php echo CHtml::beginForm();?>
    <div class="input-line">
        <div class="title">Group :</div>
        <div class="input">
<!--            --><?php //echo CHtml::activeTextField($category, "group_id");?>
            <?php echo CHtml::dropDownList("Category[group_id]",
                "0", CHtml::listData($groups, "id", "name"),
                array('empty'=>''));?>
        </div>
    </div>
    <div class="input-line">
        <div class="title">New category :</div>
        <div class="input">
            <?php echo CHtml::activeTextField($category, "name");?>
        </div>
    </div>
    <div class="input-line">
        <?php echo CHtml::submitButton('Submit');?>
    </div>
    <?php echo CHtml::endForm(); ?>
</div>
