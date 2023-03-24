const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');
function generateHTML (team) {
 `

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
            ${generateCards(team)}
          </div> 
        </div>
    </main>
  </body>

</html>`

return template;
}


function generateManagerCard (team){
  let managerCard = '';
  for (let i = 0; i < Manager.length; i++){
    if(Manager[i].getRole() === 'Manager') {
      managerCard +=
   
  `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${Manager[i].getName()}/h5>
  <p class="card-text"><i class="fa-solid fa-users"></i> ${Manager[i].getRole()}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Manager[i].getId()}</li>
  <li class="list-group-item">Email: <a href="mailto:${Manager[i].getEmail()}">${Manager[i].getEmail()}</a><li>
  <li class="list-group-item">${Manager[i].getOfficeNumber()}</li>
</ul>
</div>`
}
}
return managerCard;
}

function generateEngineerCard (team){
  let engineerCard = '';
  for (let i = 0; i < Engineer.length; i++){
    if(Manager[i].getRole() === 'Engineer') {
      engineerCard +=
  `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${Enginner[i].getName()}/h5>
  <p class="card-text"><i class="fa-solid fa-users"></i> ${Engineer[i].getRole()}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Engineer[i].getId()}</li>
  <li class="list-group-item">Email:<a href="mailto:${Engineer[i].getEmail()}">${Engineer[i].getEmail()}</a><li>
  <li class="list-group-item"><a href="https://github.com/${Engineer[i].getGithub()}" target="_blank"
  rel="noopener noreferrer">${Engineer[i].getGithub()}</a></li>
</ul>
</div>`
}
}
return engineerCard;
}


function generateInternCard (team){
  let internCard = '';
  for (let i = 0; i < Intern.length; i++){
    if(Intern[i].getRole() === 'Intern') {
      internCard +=
  `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${Intern[i].getName()}/h5>
  <p class="card-text"><i class="fa-solid fa-users"></i> ${Intern[i].getRole()}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Intern[i].getId()}</li>
  <li class="list-group-item">Email:<a href="mailto:${Intern[i].getEmail()}">${Intern[i].getEmail()}</a><li>
  <li class="list-group-item">${Intern[i].getSchool()}</li>
</ul>
</div>`
}
}
return internCard;
}


// function createCards(team) {
//   let cards = []
//   for (let i = 0; i < team.length; i++) {
//     const thisEmployee = team[i];
//     switch (thisEmployee.getRole()) {
//       case 'Manager':
//         const manager = new Manager(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.getOfficeNumber);
//         cards.push(createManagerCard(manager));
//         break;
//       case 'Engineer':
//         const engineer = new Enginner(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.github);
//         cards.push(createEngineerCard(engineer));
//         break;
//       case 'Intern':
//         const intern = new Intern(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.school);
//         cards.push(createInternCard(intern));
//         break;
//     }
//   }
//   return cards.join(``)
// }

module.exports = generateHTML;