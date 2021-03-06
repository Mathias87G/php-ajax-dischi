let $ = require('jquery');


$(document).ready(function(){
  printAuthors();
  $('.authors-list').on('change', function(){
    var select = $('.authors-list').val().toString();
    console.log(select);
    $.ajax(
      {
        'url': 'http://localhost/php-ajax-dischi/server.php',
        'method': 'GET',
        'data': {
          'author': select
        },
        'success': function(risposta){
          $('.card-ctr').empty();
          printData(risposta);
        }
      }
    )
  }),
  allData();
});

// funzione AllData
function allData(){
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
}

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

// funzione per stampare options
function printAuthors(){
  $.ajax(
    {
      'url': 'http://localhost/php-ajax-dischi/dischi-author-filtered.php',
      'method': 'GET',
      'success': function(risposta){
        var source = $("#author-template").html();
        var template = Handlebars.compile(source);
        for (var i = 0; i < risposta.length; i++) {
          var context = {
            author : risposta[i]
          };
          var html = template(context);
          $('.authors-list').append(html);
        }
      },
      'error': function(){
        alert('Errore');
      }
    }
  );
}
