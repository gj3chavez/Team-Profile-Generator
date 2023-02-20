const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = () =>

<!DOCTYPE html> 
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/65ce8f9f8f.js" crossorigin="anonymous"></script>
                
    </head>
    <body>
        <header>
        <!-- As a heading -->
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid justify-content-center" id="card-body">
                    <span class="navbar-brand mb-0 h1">Team Profile</span>
                </div>
            </nav>
        </header>
    <main>
        <div class="container">
            <div class = "row justify-content-center">
        
            <div class="card" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title">Albus Dumbledore</h5>
              <p class="card-text"><i class="fa-solid fa-mug-hot"></i> Manager</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 123</li>
              <li class="list-group-item">Email: dumbledore@gmail.com</li>
              <li class="list-group-item">Office number: 8</li>
            </ul>
            <!-- <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div> -->
          </div>

          <div class="card" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title">Harry Potter</h5>
              <p class="card-text"><i class="fa-solid fa-glasses"></i> Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 2</li>
              <li class="list-group-item">Email: harry-potter@gmail.com</li>
              <li class="list-group-item">GitHub: harry-pott</li>
            </ul>
            <!-- <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div> -->
          </div>


          <div class="card" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title">Ron Weasley</h5>
              <p class="card-text"><i class="fa-solid fa-glasses"></i> Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 3</li>
              <li class="list-group-item">Email:ronweas@gmail.com</li>
              <li class="list-group-item">GitHub: ronweas</li>
            </ul>
            <!-- <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div> -->
          </div>


          <div class="card" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title">Hermione Granger</h5>
              <p class="card-text"><i class="fa-solid fa-glasses"></i> Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 4</li>
              <li class="list-group-item">Email: hermioneg@gmail.com</li>
              <li class="list-group-item">GitHub: hermioneg</li>
            </ul>
            <!-- <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div> -->
          </div>


          <div class="card" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title">Neville Longbottom</h5>
              <p class="card-text"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 5</li>
              <li class="list-group-item">Email: nevillel@gmail.com</li>
              <li class="list-group-item">GitHub: nevillel</li>
            </ul>
            <!-- <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div> -->
        </div>