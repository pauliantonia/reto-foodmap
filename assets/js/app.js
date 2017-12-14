$(document).ready(function(){
    
    });

$(function(){
    setTimeout(function() {
       $('#splash').fadeOut(500);
    }, 2000);
 });

/*
 while (fadeOut = true) {  
     $('.inputSearch').hide(); 
     break $('.inputSearch').show();    
 }

 */
//$('.filters').hide();

//section filters 
    var nameFilters = ['peruana', 'mexicana', 'italiana', 'chilena', 'vegetariana', 'frituras'];   
  
    /*var busqueda = $('.form-control'),
    titulo = $('ul li h3');
    $(titulo).each(function(){
        var li = $(this);
        //si presionamos la tecla
        $(busqueda).keyup(function(){
            //cambiamos a minusculas
            this.value = this.value.toLowerCase();
            //
            var clase = $('.input-group-btn');
            if($(busqueda).val() === ''){
                $(clase).click('disabled');
            }else{
                $(clase).attr('class', 'fa fa-search');
            }
            if($(clase).hasClass('fa fa-times')){
                $(clase).click(function(){
                    //borramos el contenido del input
                    $(busqueda).val('');
                    //mostramos todas las listas
                    $(li).parent().show();
                    //volvemos a añadir la clase para mostrar la lupa
                    $(clase).attr('class', 'fa fa-search');
                });
            }
            //ocultamos toda la lista
            $(li).parent().hide();
            //valor del h3
            var txt = $(this).val();
            //si hay coincidencias en la búsqueda cambiando a minusculas
            if($(li).text().toLowerCase().indexOf(txt) > -1){
                //mostramos las listas que coincidan
                $(li).parent().show();
            }
        });
    });*/

    var busqueda = $('#inputSearch'),
    titulo = $('ul li p');
    $(titulo).each(function(){
        var li = $(this);
        //si presionamos la tecla
        $(busqueda).keyup(function(){
            //cambiamos a minusculas
            this.value = this.value.toLowerCase();
            //
            var clase = $('.search i');
            if($(busqueda).val() != ''){
                $(clase).attr('class', 'fa fa-times');
            }else{
                $(clase).attr('class', 'fa fa-search');
            }
            if($(clase).hasClass('fa fa-times')){
                $(clase).click(function(){
                    //borramos el contenido del input
                    $(busqueda).val('');
                    //mostramos todas las listas
                    $(li).parent().show();
                    //volvemos a añadir la clase para mostrar la lupa
                    $(clase).attr('class', 'fa fa-search');
                });
            }
            //ocultamos toda la lista
            $(li).parent().hide();
            //valor del h3
            var txt = $(this).val();
            //si hay coincidencias en la búsqueda cambiando a minusculas
            if($(li).text().toLowerCase().indexOf(txt) > -1){
                //mostramos las listas que coincidan
                $(li).parent().show();
            }
        });
    });