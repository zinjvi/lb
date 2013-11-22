<?php

class AdminkaController extends Controller
{
    public $layout = "adminka";

    public function actionHeaderImage(){
        $headerImage = new HeaderImage();

        if(isset($_POST['HeaderImage'])){
            $headerImage->attributes = $_POST['HeaderImage'];

            $image = CUploadedFile::getInstance($headerImage, 'path');
            $image->saveAs(Constan::$HEADER_IMAGE_PATH.$image->getName());
            $headerImage->path = $image->getName();

            $headerImage->save(false);
            $this->redirect('headerImage');
        }

        $headerImages = HeaderImage::model()->findAll();

        $this->render('headerImage', array(
            'headerImages' => $headerImages,
            'headerImage' => $headerImage
        ));
    }

    public function actionChooseHeaderImage($id){
        Yii::log('id='.$id);
        $currentHeaderImage = HeaderImage::model()->findByAttributes(array(
            'active'=>true
        ));
        if($currentHeaderImage){
            $currentHeaderImage->active = false;
            $currentHeaderImage->save(false);
        }
        $newHeaderImage = HeaderImage::model()->findByPk($id);
        $newHeaderImage->active = true;
        $newHeaderImage->save(false);

        $this->redirect('/adminka/headerImage');
    }

    public function actionRemoveHeaderImage($id){
        $headerImage = HeaderImage::model()->findByPk($id);
        if($headerImage->active){
            $this->redirect('/adminka/headerImage');
        }
        unlink(Constan::$HEADER_IMAGE_PATH.$headerImage->path);
        $headerImage->delete();
        $this->redirect('/adminka/headerImage');
    }

    public function actionCreateCategory()
    {
        $category = new Category();

        $groups = Group::model()->findAll();

        if(isset($_POST['Category'])){
            $category->attributes = ($_POST['Category']);

            Yii::log("new cat: id=".$category->id.", name=".$category->name.", group_id=".$category->group_id);

            $category->save(false);
            $this->redirect('/adminka');
        }


        $this->render('createCategory', array(
            'groups'=>$groups,
            'category'=>$category
        ));
    }

    public function actionChooseCategoryForUpdate(){
        $groups = Group::model()->findAll();
        $this->render('chooseCategoryForUpdate', array(
            'groups'=>$groups
        ));
    }

    public function actionUpdateCategory($id){
        $category = $this->loadCategory($id);

        if(isset($_POST['Category'])){
            $category->attributes = ($_POST['Category']);

            Yii::log("new cat: id=".$category->id.", name=".$category->name.", group_id=".$category->group_id);

            $category->save(false);
            $this->redirect('/adminka');
        }

        $groups = Group::model()->findAll();

        $this->render('updateCategory', array(
            'groups'=>$groups,
            'category'=>$category
        ));
    }

    public function actionRemoveCategory($id){
        Category::model()->deleteByPk($id);
        $this->redirect('/adminka/chooseCategoryForUpdate');
    }

	public function actionCreate()
	{
        $article = new Article();

        $categories = Category::model()->findAll();

        if (isset($_POST['Article'])) {
            $article->attributes = $_POST['Article'];

            $image = CUploadedFile::getInstance($article, 'image');
            $image->saveAs(Constan::$ARTICLE_IMAGE_PATH.$image->getName());
            $article->image = '/'.Constan::$ARTICLE_IMAGE_PATH.$image->getName();

            $article->save(false);

            $this->redirect("/adminka");
        }

        $this->render("create", array(
            "article"=>$article,
            "categories"=>$categories
        ));
	}

    public function actionSaveImage()
    {
        Yii::log('test', CLogger::LEVEL_TRACE);
        if (isset($_FILES['upload'])) {
            Yii::log("uploaded temp file: " . $_FILES['upload']["tmp_name"]);

            $newFilePath = Yii::app()->getBasePath() . "/../images/storage/articles/" . $_FILES['upload']["name"];
            Yii::log("uploaded file: " . $newFilePath);

            rename($_FILES['upload']["tmp_name"], $newFilePath);

            $fileName = $_FILES['upload']["name"];

            $script =
                "<script type='text/javascript'>
                    window.parent.CKEDITOR.tools.callFunction(1, '/images/storage/articles/$fileName', '');
            </script>";
            echo $script;
        }
    }

	public function actionIndex()
	{
        Yii::log("index");
		$this->render('index');
	}

	public function actionChooseArticleForUpdate()
	{
        $groups = Group::model()->findAll();
		$this->render('chooseArticleForUpdate', array(
            "groups"=>$groups
        ));
	}

    public function actionUpdateArticle($id){
        Yii::log("update article with id = ".$id);

        $article = $this->loadArticle($id);

        if(isset($_POST['Article'])){
            $article->setAttributes($_POST['Article']);


            $image = CUploadedFile::getInstance($article, 'image');
            if($image){
                $image->saveAs(Constan::$ARTICLE_IMAGE_PATH.$image->getName());
                $article->image = '/'.Constan::$ARTICLE_IMAGE_PATH.$image->getName();
            }

            $article->update(false);

            Yii::log("updated");
            $this->redirect("/adminka");
        }

        $article = Article::model()->findByAttributes(array("id"=>$id));
        $categories = Category::model()->findAll();

        $this->render("updateArticle", array(
            "article"=>$article,
            "categories"=>$categories
        ));
    }

    public function actionRemoveArticle($id){
        Article::model()->deleteByPk($id);
        $this->redirect('/adminka/chooseArticleForUpdate');
    }

    public function loadArticle($id)
    {
        $model=Article::model()->findByPk($id);
        if($model===null)
            throw new CHttpException(404,'The requested article does not exist.');
        return $model;
    }

    public function loadCategory($id)
    {
        $model=Category::model()->findByPk($id);
        if($model===null)
            throw new CHttpException(404,'The requested article does not exist.');
        return $model;
    }



	// Uncomment the following methods and override them if needed
	/*
	public function filters()
	{
		// return the filter configuration for this controller, e.g.:
		return array(
			'inlineFilterName',
			array(
				'class'=>'path.to.FilterClass',
				'propertyName'=>'propertyValue',
			),
		);
	}

	public function actions()
	{
		// return external action classes, e.g.:
		return array(
			'action1'=>'path.to.ActionClass',
			'action2'=>array(
				'class'=>'path.to.AnotherActionClass',
				'propertyName'=>'propertyValue',
			),
		);
	}
	*/
}