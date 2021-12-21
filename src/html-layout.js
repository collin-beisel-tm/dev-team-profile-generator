const { default: build } = require("jest-leak-detector");

//function that creates variables containing html markup templates for each role type
const printProfiles= data => {
 
    //maps manager data into the associated template literal
    const manager = data.manager.map(function(data) {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${data.name}</h2>
            <h4>Manager<h4>
            <p>ID: ${data.id}</p>
            <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
            <p>Office Number: ${data.office}</p>
        </div>
        `
        return managerHtml
    });

    //maps engineer data into the associated template literal
    const engineer = data.engineer.map(function(data) {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${data.name}</h2>
            <h4>Engineer<h4>
            <p>ID: ${data.id}</p>
            <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
            <p> Github: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></p>
        </div>
        `
        return engineerHtml
    })

    //maps intern data into the associated template literal
    const intern = data.intern.map(function(data) {
        let internHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${data.name}</h2>
            <h4>Intern<h4>
            <p>ID: ${data.id}</p>
            <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
            <p> School: ${data.school}</p>
        </div>
        `
        return internHtml
    })
    return [manager,engineer,intern]
}

//exports markup with profiles injected in body
module.exports = buildHTML => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>CB Builds Tech Team</title>
        </head>
        <body>
            <header>
            <h1 class="text-center">CB Builds Tech Team</h1>
            </header>
            ${printProfiles(buildHTML)}
        </body>
        </html>    
        `
}



