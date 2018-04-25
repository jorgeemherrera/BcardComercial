$(document).ready(function(){
    var show = 1;
    //cuando le demos click a nuestro icono de menu con clase .mostrar nos muestre el menu
    $('.mostrar').on('click', function(){
        //Condición
        if(show == 1){
            $('.content-menu').addClass("content-menu__2");
            show = 0;
        }else{
            $('.content-menu').removeClass("content-menu__2");
            show = 1;
        }        
    })
});