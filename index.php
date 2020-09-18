
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js" integrity="sha512-zT3zHcFYbQwjHdKjCu6OMmETx8fJA9S7E6W7kBeFxultf75OPTYUJigEKX58qgyQMi1m1EgenfjMXlRZG8BXaw==" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
    <link rel="stylesheet" href="dist/app.css">
    <title>php-ajax-dischi</title>
  </head>
  <body>
    <!-- header -->
    <header>
      <nav>
        <img id="logo" src="img/logo.png" alt="spotify logo">
      </nav>
    </header>
    <!-- main -->
    <main>
      <div class="card-ctr">
      </div>
    </main>
    <!-- handlebars per card album -->
    <script id="entry-template" type="text/x-handlebars-template">
      <div class="card">
        <img class="poster" src="{{poster}}" alt="">
        <div class="details">
          <h2 class="title">{{title}}</h2>
          <h3 class="author">{{author}}</h3>
          <h4 class="year">{{year}}</h4>
        </div>
      </div>
    </script>

    <script src="dist/app.js" charset="utf-8"></script>
  </body>
</html>
