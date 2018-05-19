$(function(){
    $('.container img').click(function(){
        $('#modal').fadeIn('slow');
    });
    $('#modal').click(function(){
        $('#modal').fadeOut('slow');
    });
});
