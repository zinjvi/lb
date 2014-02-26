define(['backbone.deepModel'],
    function (Backbone) {
        var BaseModel = Backbone.DeepModel.extend({
            'defaults': {
                '_id': ''
            },
            url: function(){
                if(this.get('_id')) return this.baseUrl + '/' + this.get('_id');
                return this.baseUrl;
            },
            isNew: function() {
                //TODO | need refactoring
                if(this.get('_id').length == 0){
                    return true;
                }else{
                    return false;
                }
            }
        });
        return BaseModel;
    });