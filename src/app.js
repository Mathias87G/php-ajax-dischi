let $ = require('jquery');

$(document).ready(function(){
  printAuthors();
  $.ajax(
    {
      'url': 'http://localhost/php-ajax-dischi/server.php',
      'method': 'GET',
      'success': function(risposta){
        printData(risposta);
      },
      'error': function(){
        alert('Errore');
      }
    }
  );
});

// Funzione printdata
function printData(data){
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < data.length; i++) {
    var context = {
      'title' : data[i].title,
      'author' : data[i].author,
      'poster': data[i].poster,
      'year' : data[i].year
    };
    var html = template(context);
    $('.card-ctr').append(html);
  }
}

function printAuthors(){
  $.ajax(
    {
      'url': 'http://localhost/php-ajax-dischi/dischi-author-filtered.php',
      'method': 'GET',
      'success': function(risposta){
        console.log(risposta);
      },
      'error': function(){
        alert('Errore');
      }
    }
  );
}
