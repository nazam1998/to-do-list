<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drag and drop</title>
    <link rel="stylesheet" href="./public/css/index.css">
</head>

<body>
    <nav>
        <div class="form-group mx-auto my-5 container row">
            <input type="file" class="inputfile form-control" id="background">
            <input type="text" id="ajout-liste" name="liste" class="form-control mx-auto" placeholder="Ajouter une nouvelle liste">
        </div>
    </nav>
    <div class="app">
        <div id="lists" class="lists row my-5 mx-auto">
        </div>
    </div>
    <script src="./node_modules/jquery/dist/jquery.min.js"></script>
    <script src="./node_modules/jqueryui/jquery-ui.min.js"></script>
    <script src="./src/js/index.js"></script>
</body>

</html>