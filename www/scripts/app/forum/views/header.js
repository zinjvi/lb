define(['/scripts/app/common/views/base',
    'use!dust', 'text!templates/header.dust',
    'scripts/app/forum/models/HeaderModel'],
    function (BaseView, dust, templateSources, HeaderModel) {

        var PostView = BaseView.extend({
            class: 'post-view',
            template: {
                name: 'header.template',
                source: templateSources
            },
            model: new HeaderModel(),
            initialize: function() {
                this.model.set('headerValue', 'headerValue!');
            },
            render: function () {
                this.$el.html(this.renderTemplate());
                return this;
            }
        });
        return PostView;
    });
