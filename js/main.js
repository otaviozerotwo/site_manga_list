$(window).on('resize', function() {
    if ($(window).width() <= 800) {
      $('.cabecalho__busca').hide();
    } else {
      $('.cabecalho__busca').show();
    }
});
