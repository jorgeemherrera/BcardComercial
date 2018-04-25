$('.dir, .tel ').hide();
$(document).ready(function(){
    "use strict"; //reconozca todo lo de JS
    $("select[name=dirSelect]").change(function(){
        var eleccion = ($('select[name=dirSelect]').val());
        if(eleccion == "si"){
            $(".dir").show("slide");
        }else if(eleccion == "no"){
            $(".dir").hide("slide");
        }
    });

    //Telefono 
    $("select[name=telSelect]").change(function(){
        var eleccion = ($('select[name=telSelect]').val());
        if(eleccion == "si"){
            $(".tel").show("slide");
        }else if(eleccion == "no"){
            $(".tel").hide("slide");
        }
    });
});
 