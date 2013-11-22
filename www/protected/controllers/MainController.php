<?php


class MainController extends CController
{
    public $layout = 'mainLayout';

    public function actionHome()
    {
        $articles = Article::model()->findAll();

        $this->render('home', array(
            'var' => 'asasdasdad',
            'articles' => $articles
        ));
    }

    public function actionArticlesOfCategory($categoryId)
    {
        $articles = Article::model()->findAllByAttributes(array(
            "category_id" => $categoryId
        ));

        $this->render('articlesOfCategory', array(
            'articles' => $articles
        ));
    }

    public function actionArticle($articleId)
    {

        $article = Article::model()->findByAttributes(
            array("id" => $articleId)
        );

        $this->render("article", array(
            "article" => $article
        ));
    }

    public function actionCreate()
    {
        $article = new Article();

        if(isset($_POST['Article'])){
            //$article->attributes = $_POST['Article'];
            //$article->save();
            Yii::log("save !!");
            $ar = new Article();
            $ar->title = "title";
            $ar->description = "descr";
            $ar->category_id = 4;
            $ar->save();
            Yii::log("saved");
        }

        $this->render("create", array(
            "article"=>$article
        ));
    }

    public function actionTest()
    {
        $newArt = new Article();
        $newArt->title = "titleOfNew";
        $newArt->category_id = 4;
        $newArt->description = "descr";
        $newArt->save(false);

        $art = Article::model()->findByAttributes(array("title"=>"titleOfNew"));
        echo "id = ".$art->id;
        echo "title = ".$art->title;

        $art->title = "tnnnnnn";
        $art->update();
    }
}