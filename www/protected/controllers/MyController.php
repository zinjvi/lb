<?php


class MyController extends Controller{

    protected function actionOne(){
        //echo $param;
        echo '<br>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br>';
        $connection = Yii::app()->db;
        $command = $connection->createCommand("SELECT * FROM {{page}}");
        $results = $command->query();
        foreach($results as $result){
            echo $result['title'], "<br/>";
        }

        echo 111;
    }


}