function managerHtml(manager) {
  return `<div class="card" id="username-card">
  <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Manager ${manager.name}</h4>
    <p class="card-text">
      Manager id is ${manager.id}.
      Manager email is ${manager.email}.
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
      return `<div class="card" id="username-card">
  <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Intern ${intern.name}</h4>
    <p class="card-text">
      Intern id is ${intern.id}.
      Intern email is ${intern.email}.
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
      <title>Ricardo's Page</title>
    </head>
    
    <body>
      
    ${managerHtml(answers[0])}
    ${internHtml(answers)}

    </body>
    </html>`;
}

module.exports = generateHtml;
