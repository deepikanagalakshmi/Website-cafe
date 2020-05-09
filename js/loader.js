$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({fullWidth: true});
    $('.parallax').parallax();
    $('.reviews').carousel({
      numVisible:7,
      shift	:50,
      padding:60,
    });

  });

  function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open()

  }