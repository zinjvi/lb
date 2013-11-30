<?php


class AbstractController extends Controller {
    /**
     * @param $var
     */
    public function returnJson($var)
    {
        header('content-type:text/x-json');
        header('cache-control:no-store,no-cache,max-age=0,must-revalidate');
        echo JSON::encode($var);
    }
}