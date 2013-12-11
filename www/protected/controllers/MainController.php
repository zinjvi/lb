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

    public function actionForum(){
        $this->render("forum");
    }

    public function actionTest()
    {
        $cars=array("Saab","Volvo","BMW","Toyota");

        echo '<pre>';
        echo "Car:<br/>";
        print_r($cars);
        echo '</pre>';

        $encode=CJSON::encode($cars);

        echo $encode;

        $decode=CJSON::decode($encode);
        echo '<pre>';
        print_r($decode);
        echo '</pre>';

        echo '~~~~~~~~~~~~~~~~~<br/>';
/*        $json = "{"id'='10'}";
        echo $json;
//        $d=CJSON::decode($json, true);
        $d = json_decode($json);
        echo '<pre>';
        print_r($d);
        echo '</pre>';*/

        echo '~~~~~~~~~~~~~~~~~<br/>';
        $j = '{"id": "10"}';
        $json = '{"inbox":[{"from":"55512351","date":"29\/03\/2010","time":"21:24:10","utcOffsetSeconds":3600,"recipients":[{"address":"55512351","name":"55512351","deliveryStatus":"notRequested"}],"body":"This is message text."},{"from":"55512351","date":"29\/03\/2010","time":"21:24:12","utcOffsetSeconds":3600,"recipients":[{"address":"55512351","name":"55512351","deliveryStatus":"notRequested"}],"body":"This is message text."},{"from":"55512351","date":"29\/03\/2010","time":"21:24:13","utcOffsetSeconds":3600,"recipients":[{"address":"55512351","name":"55512351","deliveryStatus":"notRequested"}],"body":"This is message text."},{"from":"55512351","date":"29\/03\/2010","time":"21:24:13","utcOffsetSeconds":3600,"recipients":[{"address":"55512351","name":"55512351","deliveryStatus":"notRequested"}],"body":"This is message text."}]}';
        $data = json_decode($j);
        print_r($data);
        echo '<br/>~~~~~<br/>';
        Yii::log($j);
        $d = CJSON::decode($j);
        print_r($d);
        Yii::log($d['id']);
//        var_dump($data);
    }

    public function actionAromo(){


        $this->render('aromo');
    }

    public function actionApp()
    {
        $this->render('app');
    }
}