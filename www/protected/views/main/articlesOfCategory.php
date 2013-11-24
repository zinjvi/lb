<section class="articles-mini">
    <?php foreach($articles as $article){?>
        <div class="article-mini">
<!--            <div class="image">-->
                <?php echo CHtml::image($article->image);?>
<!--            </div>-->
<!--            <div class="content">-->
                    <?php echo CHtml::link($article->title,
                        array("main/article", "articleId"=>$article->id),
                        array("class"=>"title"));?>
                <span class="text">
                    <?php echo substr($article->description, 0, 700);?>
                    ...
                    <?php echo CHtml::link('читать дальше...',
                        array("main/article", "articleId"=>$article->id));?>
                </span>
<!--            </div>-->

        </div>
    <?php }?>
</section>
