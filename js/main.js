function ajustar_resolucao(){
  var breakpoints = [
    { width: 800, class: '.cabecalho__busca' },
    { width: 1400, class: '.capa_8' },
    { width: 1250, class: '.capa_7' },
    { width: 1050, class: '.capa_6' },
    { width: 900, class: '.capa_5' },
    { width: 750, class: '.capa_4' },
    { width: 550, class: '.capa_3' }
  ];

  $(window).on('resize', function(){
    var windowWidth = $(window).width();

    breakpoints.forEach(function(breakpoint){
      if (windowWidth <= breakpoint.width){
        $(breakpoint.class).hide();
      } else {
        $(breakpoint.class).show();
      }
    });
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
    var nome_div = $('.home__capas');
    
    var nova_tag_ul = $('<ul>');
      
    for(var i = 1; i <= 8; i++){
      var nova_tag_li = $('<li>').addClass('capa_' + i)
                                  .append($('<img>').attr('src', 'img/dragon_ball_' + i + '.png')
                                                    .attr('id', 'img_capa_' + i)
                                                    .attr('alt', 'Capa Dragon Ball #' + i))
                                  // .append($('<div>').attr('id', 'info_adicionais_' + i)
                                  //                   .append($('<p>').text('Informações adicionais')))
                                  .append($('<a>').attr('href', '#').text('+ COLEÇÃO'))
                                  .append($('<p>').text('Dragon Ball #' + i));

      nova_tag_ul.append(nova_tag_li);
    }
  
    nome_div.append(nova_tag_ul);
}

$(document).ready(function(){
  mostrar_descricao_menu();
  adicionar_capas();
  ajustar_resolucao();
  // hover_manga();
});
