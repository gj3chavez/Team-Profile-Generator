const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');
function generateHTML (employees) {
 const template =`

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
            ${generateCards(employees)}
          </div> 
        </div>
    </main>
  </body>

</html>`

return template;
}



const createManagerCard = (manager) =>
   
  `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${manager.getName()}</h5>
  <p class="card-text"><i class="fa-solid fa-users"></i> ${manager.getRole()}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${manager.getId()}</li>
  <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a><li>
  <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
</ul>
</div>`

const createEngineerCard = (Engineer) =>

  `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${Engineer.getName()}</h5>
  <p class="card-text"><i class="fa-solid fa-users"></i> ${Engineer.getRole()}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Engineer.getId()}</li>
  <li class="list-group-item">Email:<a href="mailto: ${Engineer.getEmail()}">${Engineer.getEmail()}</a><li>
  <li class="list-group-item">Github:<a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
</ul>
</div>`


const createInternCard = (Intern) =>

  `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${Intern.getName()}</h5>
  <p class="card-text"><i class="fa-solid fa-users"></i> ${Intern.getRole()}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Intern.getId()}</li>
  <li class="list-group-item">Email:<a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a><li>
  <li class="list-group-item">School: ${Intern.getSchool()}</li>
</ul>
</div>`

function generateCards(employees) {
  let cards = []
  for (let i = 0; i < employees.length; i++) {
    const thisEmployee = employees[i];
    // console.log(thisEmployee)
    switch (thisEmployee.getRole()) {
      case 'Manager':
        cards.push(createManagerCard(thisEmployee));
        break;
      case 'Engineer':
        cards.push(createEngineerCard(thisEmployee));
        break;
      case 'Intern':
        cards.push(createInternCard(thisEmployee));
        break;
    }
  }
  return cards.join(``)
}

module.exports = generateHTML;