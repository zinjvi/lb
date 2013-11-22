<head>
    <meta charset="UTF-8">
    <title>Admin</title>
    <link type="text/css" rel="stylesheet"
          href="/css/adminka/styles.css">

    <script type="text/javascript" src="/js/jquery-1.7.min.js"></script>
</head>
<body>
<div class="main">
    <div class="left-panel">
        <ul class="menu">
            <li class="item">
                <?php echo CHtml::link("Админка",
                    "/adminka");?>
            </li>
            <li class="item">
                <?php echo CHtml::link("Изображение заголовка",
                    "/adminka/headerImage");?>
            </li>
            <li class="item">
                <?php echo CHtml::link("Создать категорию",
                    "/adminka/createCategory");?>
            </li>
            <li class="item">
                <?php echo CHtml::link("Редактировать/удалить категорию",
                    "/adminka/chooseCategoryForUpdate");?>
            </li>
            <li class="item">
                <?php echo CHtml::link("Создать статью",
                    "/adminka/create");?>
            </li>
            <li class="item">
                <?php echo CHtml::link("Редактировать/удалить статью",
                    "/adminka/chooseArticleForUpdate");?>
            </li>
        </ul>
    </div>
    <div class="content">
        <?php echo $content;?>
    </div>
</div>



</body>
</html>
