$(window).on('resize', function(){
    if($(window).width() <= 800){
      $('.cabecalho__busca').hide();
    }else{
      $('.cabecalho__busca').show();
    }

    if($(window).width() <= 1300){
      $('.capa_7').hide();
    }else{
      $('.capa_7').show();
    }

    if($(window).width() <= 1150){
      $('.capa_6').hide();
    }else{
      $('.capa_6').show();
    }

    if($(window).width() <= 950){
      $('.capa_5').hide();
    }else{
      $('.capa_5').show();
    }

    if($(window).width() <= 750){
      $('.capa_4').hide();
    }else{
      $('.capa_4').show();
    }

    if($(window).width() <= 580){
      $('.capa_3').hide();
    }else{
      $('.capa_3').show();
    }
});
