<?php


class Menu extends CWidget
{
    public function init()
    {
        parent::init();
    }

    public function run()
    {
        $groups = Group::model()->findAll();

//        $trend = Category::model()->findAllByAttributes(array(
//            'type' => Constants::$TREND_CATEGORY
//        ));
//        $beauty = Category::model()->findAllByAttributes(array(
//            'type' => Constants::$BEAUTY_CATEGORY
//        ));
//        $women = Category::model()->findAllByAttributes(array(
//            'type' => Constants::$WOMEN_CATEGORY
//        ));

        $headerImage = HeaderImage::model()->findByAttributes(array(
            'active'=>true
        ));

        $this->render('menu',
            array(
                'headerImage'=>$headerImage,
                'groups'=> $groups,
//                'trendCategories' => $trend,
//                'beautyCategories' => $beauty,
//                'womenCategories' => $women
            )
        );
    }
}