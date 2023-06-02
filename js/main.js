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
    $('#icone_home').hide();
    $('#descricao_menu_home').show();
  }, function(){
    $('#icone_home').show();
    $('#descricao_menu_home').hide();
  });

  $('#link_catalogo').hover(function(){
    $('#icone_catalogo').hide();
    $('#descricao_menu_catalogo').show();
  }, function(){
    $('#icone_catalogo').show();
    $('#descricao_menu_catalogo').hide();
  });

  $('#link_checklist').hover(function(){
    $('#icone_checklist').hide();
    $('#descricao_menu_checklist').show();
  }, function(){
    $('#icone_checklist').show();
    $('#descricao_menu_checklist').hide();
  });

  $('#link_reviews').hover(function(){
    $('#icone_reviews').hide();
    $('#descricao_menu_reviews').show();
  }, function(){
    $('#icone_reviews').show();
    $('#descricao_menu_reviews').hide();
  });
}

function hover_manga(){
  $('#info_adicionais_1').hide();
  $('#info_adicionais_2').hide();
  $('#info_adicionais_3').hide();
  $('#info_adicionais_4').hide();
  $('#info_adicionais_5').hide();
  $('#info_adicionais_6').hide();
  $('#info_adicionais_7').hide();

  $('#img_capa_1').hover(function(){
    $('#info_adicionais_1').show();
  }, function(){
    $('#info_adicionais_1').hide();
  });

  $('#img_capa_2').hover(function(){
    $('#info_adicionais_2').show();
  }, function(){
    $('#info_adicionais_2').hide();
  });

  $('#img_capa_3').hover(function(){
    $('#info_adicionais_3').show();
  }, function(){
    $('#info_adicionais_3').hide();
  });

  $('#img_capa_4').hover(function(){
    $('#info_adicionais_4').show();
  }, function(){
    $('#info_adicionais_4').hide();
  });

  $('#img_capa_5').hover(function(){
    $('#info_adicionais_5').show();
  }, function(){
    $('#info_adicionais_5').hide();
  });

  $('#img_capa_6').hover(function(){
    $('#info_adicionais_6').show();
  }, function(){
    $('#info_adicionais_6').hide();
  });

  $('#img_capa_7').hover(function(){
    $('#info_adicionais_7').show();
  }, function(){
    $('#info_adicionais_7').hide();
  });
}

$(document).ready(function(){
  mostrar_descricao_menu();
  ajustar_resolucao();
  hover_manga();
});
