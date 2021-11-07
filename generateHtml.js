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
      
    <div class="card" id="username-card">
    <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Username</h4>
      <p class="card-text">
        Your username is ${answers.username}.
      </p>
    </div>
  </div>
  
  <div class="card" id="location-card">
  <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Username</h4>
    <p class="card-text">
      Your location is ${answers.location}.
    </p>
    <a href="#!" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  
  <div class="card" id="bio-card">
  <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">Bio Page</h4>
    <p class="card-text">
    </p>
    <a href="${answers.bio}" class="btn btn-primary">Bio</a>
  </div>
  </div>
  
  /////// include email out to be able to open automatically with default email program 
  
  <div class="card" id="linkedin-card">
  <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">LinkedIn</h4>
    <p class="card-text">
    </p>
    <a href="${answers.linkedin}" class="btn btn-primary">LinkedIn</a>
  </div>
  </div>
  
  /////// include github username out to be able to open automatically in github 
  <div class="card" id="github-card">
  <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">GitHub</h4>
    <p class="card-text">
    </p>
    <a href="${answers.github}" class="btn btn-primary">GitHub</a>
  </div>
  </div>
    
      <script src="script.js"></script>
    
    </body>
    </html>`;
}

module.exports = generateHtml;
