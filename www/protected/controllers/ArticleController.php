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
            findAllByAttributes(array('group_id'=>$id));
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
            'category_id'=>$id
        ));
        $this->returnJson($article);
    }
}