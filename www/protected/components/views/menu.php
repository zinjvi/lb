<div class="nav">

    <nav>
        <ul class="menu">
            <?php foreach ($groups as $group) { ?>

            <li class="category category-left">
                <a class="category-link" href="#"><?php echo $group->name;?></a>
                <ul class="subcategories display-none">
                    <?php if($group->id == 2){?>
                        <li class="subcategory">
                            <a class="category-link" href="aromo">Аромотерапия</a>
                        </li>
                    <?php }?>
                    <?php foreach ($group->categories as $category) {?>
                        <li class="subcategory">
                            <?php echo CHtml::link($category->name,
                                array('main/articlesOfCategory', 'categoryId'=>$category->id));?>
                        </li>
                    <?php }?>
                </ul>
            </li>
            <?php }?>
            <li class="category category-left">
                <a class="category-link" href="#">Форум</a>
            </li>
        </ul>
    </nav>
</div>

<img class="header-image" src="<?php echo '/'.Constan::$HEADER_IMAGE_PATH.$headerImage->path;?>">
