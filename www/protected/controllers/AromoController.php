<?php

class AromoController extends Controller
{
    private $format = 'json';

    public function actionList(){
        Yii::log('list~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        $rows = array();
        $rows[] = array('id'=>1, 'title'=>'ttttttt1');
        $rows[] = array('id'=>2, 'title'=>'ttttttt2');
        $rows[] = array('id'=>3, 'title'=>'ttttttt3');
        Yii::log(CJSON::encode($rows));
        header('Content-Type: application/json');
        echo CJSON::encode($rows);
    }

}