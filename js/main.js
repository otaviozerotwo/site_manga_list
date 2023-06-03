function ajustar_resolucao(){
  $(window).on('resize', function(){
    if($(window).width() <= 800){
      $('.cabecalho__busca').hide();
    }else{
      $('.cabecalho__busca').show();
    }

    if($(window).width() <= 1400){
      $('.capa_8').hide();
    }else{
      $('.capa_8').show();
    }

    if($(window).width() <= 1250){
      $('.capa_7').hide();
    }else{
      $('.capa_7').show();
    }

    if($(window).width() <= 1050){
      $('.capa_6').hide();
    }else{
      $('.capa_6').show();
    }

    if($(window).width() <= 900){
      $('.capa_5').hide();
    }else{
      $('.capa_5').show();
    }

    if($(window).width() <= 750){
      $('.capa_4').hide();
    }else{
      $('.capa_4').show();
    }

    if($(window).width() <= 550){
      $('.capa_3').hide();
    }else{
      $('.capa_3').show();
    }
  });
}

function mostrar_descricao_menu(){
  $(".menu-lateral__icone").hover(function(){
        $(this).find(".descricao_menu").show();
    },function(){
        $(this).find(".descricao_menu").hide();
    }
  );
}

function hover_manga(){
  $('#info_adicionais_1').hide();
  $('#info_adicionais_2').hide();
  $('#info_adicionais_3').hide();
  $('#info_adicionais_4').hide();
  $('#info_adicionais_5').hide();
  $('#info_adicionais_6').hide();
  $('#info_adicionais_7').hide();
  $('#info_adicionais_8').hide();

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

  $('#img_capa_8').hover(function(){
    $('#info_adicionais_8').show();
  }, function(){
    $('#info_adicionais_8').hide();
  });
}

function adicionar_capas(){
    var nome_div = $('.home__capas'); // Seletor para a div com a classe home__capas
    
    // Verifica se a div já possui a tag <ul>
    var nova_tag_ul = $('<ul>'); // Cria a tag <ul>
      
    for(var i = 1; i <= 8; i++){
    // Cria a tag <li> com o conteúdo desejado
      var nova_tag_li = $('<li>').addClass('capa_' + i)
                                  .append($('<img>').attr('src', 'img/dragon_ball_' + i + '.png')
                                                    .attr('id', 'img_capa_' + i)
                                                    .attr('alt', 'Capa Dragon Ball #' + i))
                                  // .append($('<div>').attr('id', 'info_adicionais_' + i)
                                  //                   .append($('<p>').text('Informações adicionais')))
                                  .append($('<a>').attr('href', '#').text('+ COLEÇÃO'))
                                  .append($('<p>').text('Dragon Ball #' + i));

      // Adiciona a nova tag <li> à tag <ul>
      nova_tag_ul.append(nova_tag_li);
    }
    // Adiciona a tag <ul> à div com a classe home__capas
    nome_div.append(nova_tag_ul);
}


$(document).ready(function(){
  $(this).find(".descricao_menu").hide();
  mostrar_descricao_menu();
  adicionar_capas();
  ajustar_resolucao();
  // hover_manga();
});
