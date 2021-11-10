function managerHtml(manager) {
  return `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
<div class="card-header">Manager</div>
<div class="card-body">
  <h5 class="card-title">Manager ${manager.name}</h5>
  <p class="card-text"> 
  Manager id is ${manager.id}.
  <br>
  Manager email is ${manager.email}.
  <br>
  Manager office number is ${manager.officeNumber}.
  </p>
</div>
</div>`;
}

function internHtml(employees) {
  const internArray = employees.filter(
    (employee) => employee.getRole() === "Intern"
  );
  return internArray
    .map((intern) => {
      return `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Intern</div>
        <div class="card-body">
        <h5 class="card-title">Intern ${intern.name}</h5>
        <p class="card-text"> 
        intern id is ${intern.id}.
        <br>
        intern email is ${intern.email}.
        <br>
        intern school is ${intern.school}.
        </p>
        </div>
        </div>`;
    })
    .join("");
}

function engineerHtml(employees) {
  const engineerArray = employees.filter(
    (employee) => employee.getRole() === "Intern"
  );
  return engineerArray
    .map((engineer) => {
      return `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Engineer</div>
        <div class="card-body">
        <h5 class="card-title">Engineer ${engineer.name}</h5>
        <p class="card-text"> 
        engineer id is ${engineer.id}.
        <br>
        engineer email is ${engineer.email}.
        <br>
        engineer github is ${engineer.github}.
        </p>
        </div>
        </div>`;
    })
    .join("");
}
function generateHtml(answers) {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
      <title>Employee Cards</title>
    </head>
    
    <body>
      
    ${managerHtml(answers[0])}
    ${internHtml(answers)}
    ${engineerHtml(answers)}
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>`;
}

module.exports = generateHtml;
