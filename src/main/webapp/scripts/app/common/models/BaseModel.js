define(['backbone.deepModel'],
    function (Backbone) {
        var BaseModel = Backbone.DeepModel.extend({
            'defaults': {
                'id': ''
            },
            url: function(){
                if(this.get('id')) return this.baseUrl + '/' + this.get('id');
                return this.baseUrl;
            },
            isNew: function() {
                //TODO | need refactoring
                if(this.get('id').length == 0){
                    return true;
                }else{
                    return false;
                }
            },
            save: function(options){
                options = options || {};
                options.url = options.url || this.baseUrl
                return Backbone.Model.prototype.save.call(this, null, options, null);
            }
        });
        return BaseModel;
    });