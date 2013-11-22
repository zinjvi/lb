<h3>
    Choose article
</h3>
<div class="choose-article">
    <ul class="groups">
        <?php foreach ($groups as $group) {?>
        <li class="group">
            <label><?php echo $group->name;?></label>
            <ul>
                <?php foreach ($group->categories as $category) {?>
                <li class="category">
                    <label><?php echo $category->name;?></label>
                    <ul>
                        <?php foreach ($category->articles as $article) {?>
                            <li>
                                <?php echo CHtml::link($article->title,
                                    array("/adminka/updateArticle",
                                    "id"=>$article->id))?>
                                <?php echo CHtml::link('удалить',
                                    array("/adminka/removeArticle",
                                        "id"=>$article->id),
                                    array('class'=>'remove'))?>
                            </li>
                        <?php } ?>
                    </ul>
                </li>
                <?php }?>
            </ul>
        </li>
        <?php }?>
    </ul>
</div>