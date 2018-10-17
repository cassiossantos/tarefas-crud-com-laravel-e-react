<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Tarefas</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        body{
            height: 900px;
            background-color: whitesmoke;
        }
        .panel{
            padding: 25px;
            margin: 20px auto;
            box-shadow: 0px 3px 3px 0px #dddddd;
        }
        .panel-heading{
            background-color: white !important;
        }
        button{
            outline: none !important;
            margin: 4px;
        }
        .modal{
            display: block !important;
            visibility: visible !important;
            background-color: rgba(0, 0, 0, 0.096);
            height: 100%;
            padding: 0 20px;
        }
        .modal-dialog{
            margin: 70px auto;
        }
        .modal-content{
            border: 1px solid #b9b9b9;
            padding: 20px;
            box-shadow: 0px 3px 3px 0px #b9b9b9d7 !important;

        }
        .modal-body input, textarea{
            margin: 7px auto;
        }

        .loading i{
            display: block;
            color: #5f5f5f;
            font-size: 20px;
            animation: spin 2s linear infinite;
            margin: 40px auto;
            height: max-content;
            width: max-content;
        }
       
        @keyframes spin{
          from{
              transform: rotate(0deg);

          }
          to{
              transform: rotate(360deg);
          }
        }
</style>
</head>
<body>
    <div id="root"></div>
    <script src="../js/app.js"></script>
    
</body>
</html>