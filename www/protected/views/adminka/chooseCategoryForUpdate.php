<h3>
    Choose category
</h3>
<div class="choose-category">
    <ul class="groups">
        <?php foreach ($groups as $group) {?>
            <li class="group">
                <label><?php echo $group->name;?></label>
                <ul>
                    <?php foreach ($group->categories as $category) {?>
                        <li class="category">
                            <?php echo CHtml::link($category->name,
                                array("/adminka/updateCategory",
                                "id"=>$category->id))?>
                            <?php echo CHtml::link('удалить',
                                array("/adminka/removeCategory",
                                "id"=>$category->id),
                                array('class'=>'remove'))?>
                        </li>
                    <?php }?>
                </ul>
            </li>
        <?php }?>
    </ul>
</div>
