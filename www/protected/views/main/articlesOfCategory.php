<section class="articles-mini">
    <?php foreach($articles as $article){?>
        <div class="article-mini">
            <div class="image">
                <?php echo CHtml::image($article->image);?>
            </div>
            <div class="content">
                    <?php echo CHtml::link($article->title,
                        array("main/article", "articleId"=>$article->id),
                        array("class"=>"title"));?>
                <div class="text">
                    <?php echo $article->description;?>
                </div>
            </div>

        </div>
    <?php }?>
</section>
