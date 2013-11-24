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

        $headerImage = HeaderImage::model()->findByAttributes(array(
            'active'=>true
        ));

        $this->render('menu',
            array(
                'headerImage'=>$headerImage,
                'groups'=> $groups,
            )
        );
    }
}