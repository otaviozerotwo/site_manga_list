function ajustar_resolucao(){
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
}

function mostrar_descricao_menu(){
  $('#descricao_menu_home').hide();
  $('#descricao_menu_catalogo').hide();
  $('#descricao_menu_checklist').hide();
  $('#descricao_menu_reviews').hide();

  $('#link_home').hover(function(){
    $('#descricao_menu_home').show();
  }, function(){
    $('#descricao_menu_home').hide();
  });

  $('#link_catalogo').hover(function(){
    $('#descricao_menu_catalogo').show();
  }, function(){
    $('#descricao_menu_catalogo').hide();
  });

  $('#link_checklist').hover(function(){
    $('#descricao_menu_checklist').show();
  }, function(){
    $('#descricao_menu_checklist').hide();
  });

  $('#link_reviews').hover(function(){
    $('#descricao_menu_reviews').show();
  }, function(){
    $('#descricao_menu_reviews').hide();
  });
}

$(document).ready(function(){
  mostrar_descricao_menu();
  ajustar_resolucao();
});
