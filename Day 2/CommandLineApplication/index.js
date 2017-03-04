/*
A simple command line application that consumes a Public API using a HTTP client library.
*/

//1) View your most recent repositories
//2) Create a RepositoryCreate
//3) Delete a Repository
//4) Edit a Repository Name

//Require the NPM package "Request" to make HTTP request from the CLI
var request = require('request');

//Require the NPM package "readline" to read inputs from the CLI
var readline = require('readline');

//My Personal authorizaton token
var apiToken = '208f81439ca3f8acb6f71bfdbecd1184534b3391 ';
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter your github username: ', function (username) {
  var url = 'https://api.github.com/users/' + username + "/repos";
  var options = {
      url: url,
      headers: {
        'User-Agent': 'request'
      }
    }
    //Makes Get request to /Users/:Username/repos
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("The name of your most recent repo is " + (JSON.parse(response.body)[0]).full_name);
    }

    if (response.body) {
      rl.question('create a new repo: ', function (createRepoName) {
        var url = 'https://api.github.com/user/repos';
        var options = {
          url: url,
          headers: {
            'User-Agent': 'request',
            'Authorization': 'token ' + apiToken
          },
          form: JSON.stringify({
            "name": createRepoName,
            "description": "This repo was created using Github Api",
            "homepage": "https://github.com",
            "private": false,
            "has_issues": true,
            "has_wiki": true
          })
        }

        //Makes POST request to user/repos
        request.post(options, function (error, response, body) {
          if (!error) {
            console.log("Your new repository " + JSON.parse(response.body).full_name + " has been created");
          } else {
            console.log('Error === ' + error);
          }
          if (response.body) {
            rl.question('Edit the created repository name to: ', function (newName) {
              var url = 'https://api.github.com/repos/' + username + '/' + createRepoName;
              var options = {
                  url: url,
                  headers: {
                    'User-Agent': 'request',
                    'Authorization': 'token ' + apiToken
                  },
                  form: JSON.stringify({
                    "name": newName,
                    "description": "This repository was edited via Github API",
                    "homepage": "https://github.com",
                    "private": false,
                    "has_issues": true,
                    "has_wiki": true
                  })
                }
                //Makes PATCH request to repos/:username/:repoName
              request.patch(options, function (error, response, body) {
                if (!error) {
                  console.log("Your repository name has been changed to " + JSON.parse(response.body).full_name);
                } else {
                  console.log('Error === ' + error);
                }
                if (response.body) {
                  rl.question('delete a repo: ', function (repoName) {
                    var url = 'https://api.github.com/repos/' + username + '/' + repoName;
                    var options = {
                      url: url,
                      headers: {
                        'User-Agent': 'request',
                        'Authorization': 'token ' + apiToken
                      }
                    }
                    rl.close();

                    //Makes DELETE request to repos/:Username/:repoName
                    request.delete(options, function (error, response, body) {
                      if (!error) {
                        console.log("Repository Deleted");
                      } else {
                        console.log('Error === ' + error);
                      }
                    })
                  });
                }
              });
            });
          }
        });
      }); //first Question
    } // first if statement
  });
});
