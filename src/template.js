const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = (team) => `

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
        
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid justify-content-center" id="card-body">
                    <span class="navbar-brand mb-0 h1">Team Profile</span>
                </div>
            </nav>
        </header>
    <main>
        <div class="container">
            <div class = "row justify-content-center"></div>
            ${createCards(team)}
          </div> 
        </div>
    </main>
  </body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
</html>`

const createManagerCard = (Manager) =>
  `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${Manager.getName()}/h5>
  <p class="card-text"><i class="fa-solid fa-users"></i> ${Manager.getRole()}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Manager.getId()}</li>
  <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a><li>
  <li class="list-group-item">${Manager.getOfficeNumber()}</li>
</ul>
</div>`


const createEnginerCard = (Engineer) =>
  `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${Enginner.getName()}/h5>
  <p class="card-text"><i class="fa-solid fa-users"></i> ${Engineer.getRole()}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Engineer.getId()}</li>
  <li class="list-group-item">Email:<a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a><li>
  <li class="list-group-item"><a href="https://github.com/${Engineer.getGithub()}" target="_blank"
  rel="noopener noreferrer">${Engineer.getGithub()}</a></li>
</ul>
</div>`


const createInternCard = (Intern) =>
  `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${Intern.getName()}/h5>
  <p class="card-text"><i class="fa-solid fa-users"></i> ${Intern.getRole()}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Intern.getId()}</li>
  <li class="list-group-item">Email:<a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a><li>
  <li class="list-group-item">${Intern.getSchool()}</li>
</ul>
</div>`


function createCards(team) {
  let cards = []
  for (let i = 0; i < team.length; i++) {
    const thisEmployee = team[i];
    switch (thisEmployee.getRole()) {
      case 'Manager':
        const manager = new Manager(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.getOfficeNumber);
        cards.push(createManagerCard(manager));
        break;
      case 'Engineer':
        const engineer = new Enginner(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.github);
        cards.push(createEngineerCard(engineer));
        break;
      case 'Intern':
        const intern = new Intern(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.school);
        cards.push(createInternCard(intern));
        break;
    }
  }
  return cards.join(``)
}

module.exports = generateHTML;