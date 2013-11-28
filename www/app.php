<script type="text/javascript" da src="/scripts/lib/require.js"></script>
<script type="text/javascript">
    require.config({
        baseUrl: "/scripts/app/",
        paths: {
            text: '/scripts/lib/text',
            backbone: '/scripts/lib/backbone',
            jquery: '/scripts/lib/jquery',
            underscore: '/scripts/lib/underscore',
            use: '/scripts/lib/use',
            dust: '/scripts/lib/dust',
            css: '/scripts/lib/css'
        },
        use: {
            backbone: {
                deps: ["use!underscore", "jquery"],
                attach: "Backbone"
            },
            underscore: {
                attach: "_"
            },
            dust: {
                attach: "dust"
            }
        }
    });

    require(['application', 'css!/css/style'], function(application){
        window.app = application;
        application.start();
    });
</script>