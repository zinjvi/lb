$(function(){
    $('.menu a.category-link').click(function(event){
        var $openSubcategory = $('ul.subcategories[style*="display: block"]');
        $openSubcategory.slideToggle();

        var $subcategories = $(event.target).parents('.category')
            .find('.subcategories');
        if($openSubcategory[0] != $subcategories[0]){
            $subcategories.slideToggle();
        }
    });
});