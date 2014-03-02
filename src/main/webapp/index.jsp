<html>
<head>
    <script data-main="/scripts/app/main" src="/scripts/lib/require.js"></script>
    <script type="text/javascript">
        console.log("S");
        (function () {
            console.log("sss");
            require(['application'], function (application) {
                window.app = application;
                application.start();
            });
        })();
    </script>
</head>
<body>
</body>
</html>
