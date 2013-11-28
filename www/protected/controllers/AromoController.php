<?php

class AromoController extends Controller
{
    private $format = 'json';

    public function actionList(){
        Yii::log('list~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        $rows = array();
        $rows[] = array('id'=>1, 'name'=>'ttttttt1');
        $rows[] = array('id'=>2, 'name'=>'ttttttt2');
        $rows[] = array('id'=>3, 'name'=>'ttttttt3');

        header('content-type:text/x-json');
        header('cache-control:no-store,no-cache,max-age=0,must-revalidate');
        echo json_encode($rows);
    }

}