$(document).ready(function(){
  var $spanStarPortfolio = $('#span-start-portfolio');
  // vistas del portafolio
  var $about = $('#about');
  var $portfolio = $('#portfolio');
  var $contact = $('#contact');
  // redireccionando a las siguientes vistas
  $('#about').on('click', function() {
    window.location.href = '../portfolio/views/about.html';
  });
  $portfolio.on('click', function() {
    window.location.href = '../portfolio/views/portfolio.html';
  });
  $contact.on('click', function() {
    window.location.href = '../portfolio/views/contact.html';
  });
})