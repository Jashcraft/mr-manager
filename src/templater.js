//will contain building instructions for Base page as well as elements for each team member card

const buildManager = manager => {
  // return a manager card
  return `
  <div class="card bg-dark text-light" style="width: 18rem;">
  <div>
    <div class="card-header bg-info text-light">
      <h4 class="card-title">${manager.getName()}</h4>
      <h5>${manager.getRole()}</h5>
    </div>

    <div class="card-body">
      <p>ID: ${manager.getId()}</p>
      <p>Email: ${manager.getEmail()}</p>
      <p>Offiice Number: ${manager.getNumber()}</p>
    </div>
  </div>
</div>
  `
}
const buildEngineer = engineer => {
  // return an Engineer card
  return `
  <div class="card bg-dark text-light" style="width: 18rem;">
  <div>
      <div class="card-header bg-info text-light">
      <h4 class="card-title">${engineer.getName()}</h4>
      <h5>${engineer.getRole()}</h5>
    </div>

    <div class="card-body">
      <p>ID: ${engineer.getId()}</p>
      <p>Email: ${engineer.getEmail()}</p>
      <p>GitHub: ${engineer.getGithub()}</p>
    </div>
  </div>
</div>
  `
}
const buildIntern = intern => {
  // return an Intern card
  return `
  <div class="card bg-dark text-light" style="width: 18rem;">
  <div>
      <div class="card-header bg-info text-light">
      <h4 class="card-title">${intern.getName()}</h4>
      <h5>${intern.getRole()}</h5>
    </div>

    <div class="card-body">
      <p>ID: ${intern.getId()}</p>
      <p>Email: ${intern.getEmail()}</p>
      <p>School: ${intern.getSchool()}</p>
    </div>
  </div>
</div>
  `
}

const buildTeam = teamArr => {
  const html = [];
  teamArr.forEach(member => {
    // build the specific type of employee card
    //add card to the html arr
    switch (member.getRole()) {
      case "Manager":
        html.push(buildManager(member));
        break;
      case "Engineer":
        html.push(buildEngineer(member));
        break;
      case "Intern":
        html.push(buildIntern(member));
        break;
      default:
        break;
    }
  })

  //join the html elements and return the string
  return html.join("");
}

const buildHTML = teamArr => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  <title>Document</title>
</head>
<body class="bg-secondary">
<h1 class="bg-dark text-light text-center">My Team</h1>
  <div class="container">
  <div class="row justify-content-around">
    ${buildTeam(teamArr)}
  </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>
  `
}

module.exports = buildHTML