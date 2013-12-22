define(['backbone', 'common/frames/BaseFrameView',
    'text!adminka/templ/adminkaFrame.dust',
    'css!adminka/css/styles', 'css!/css/bootstrap', 'bootstrap'],
    function (Backbone, BaseFrameView, templateSource) {
        var AdminkaFrameView = BaseFrameView.extend({
            className: '_adminka-frame',
            template: {
                name: 'content.template',
                source: templateSource
            }
        });
        return AdminkaFrameView;
    });