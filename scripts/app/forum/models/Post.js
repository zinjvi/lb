define(['jquery', 'use!backbone', 'underscore'], function ($, Backbone, _) {
    var Post = Backbone.Model.extend({
        'defaults': {
            'id': '',
            'title': '',
            'text': ''
        }
    });
    return Post;
});