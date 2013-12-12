<?php

class ArticleController extends AbstractController
{
    private $format = 'json';

    public function actionGroups()
    {
        $groups = Group::model()->with('categories')->findAll();
        $this->returnJson($groups);
    }

    public function actionCategoriesByGroupId($id)
    {
        Yii::log("groupId = $id");
        $categories = Category::model()->with('articles')->
            findAllByAttributes(array('group_id' => $id));
        $this->returnJson($categories);
    }

    public function actionArticleById($id)
    {
        Yii::log("Article Id = $id");
        $article = Article::model()->findByPk($id);
        $this->returnJson($article);
    }

    public function actionArticlesByCategoryId($id)
    {
        Yii::log("Category Id = $id");
        $article = Article::model()->findAllByAttributes(array(
            'category_id' => $id
        ));
        $this->returnJson($article);
    }

    public function actionApi()
    {
        Yii::log('article api');
        if ($_SERVER['REQUEST_METHOD'] == 'PUT'){
            Yii::log('PUT');
            $json = file_get_contents('php://input');
//            Yii::log($json);

            $o = CJSON::decode($json);
//            Yii::log($o['id']);
//            Yii::log($o['title']);
//            Yii::log($o['description']);

            $article = Article::model()->findByPk($o['id']);
            $article->attributes = $o;
//            Yii::log($article->id);
//            Yii::log($article->title);
//            Yii::log($article->description);
            $article->save(false);
        }

        if ($_SERVER['REQUEST_METHOD'] == 'DELETE'){
            Yii::log('DELETE');
            Yii::log('id='.$id);
//            Article::model()->deleteByPk($id);
        }

        if ($_SERVER['REQUEST_METHOD'] == 'POST'){
            Yii::log('POST');
//            Article::model()->deleteByPk($id);
        }
    }
        public function loadArticle($id)
        {
            $model=Article::model()->findByPk($id);
            if($model===null)
                throw new CHttpException(404,'The requested article does not exist.');
            return $model;
        }
}