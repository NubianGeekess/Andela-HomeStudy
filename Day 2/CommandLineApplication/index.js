//1) View your most recent repositories
//2) Create a Repository
//3) Delete a Repository
//4) Create a Github Gist
//5) Delete a Githib Gist
var request = require('request');
var readline = require('readline');
var apiToken = '4b3a3ba1a18e5af6688bae27e219244ec0e258ef ';
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var gistID;

rl.question('Enter your github username: ', function(username) {
    var url = 'https://api.github.com/users/' + username + "/repos";
    var options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    }

    request.get(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("The name of your most recent repo is " + (JSON.parse(response.body)[0]).full_name);
        }

        if (response.body) {
            rl.question('create a new repo: ', function(createRepoName) {
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

                request.post(options, function(error, response, body) {
                    if (!error) {
                        console.log("Your new repository " + JSON.parse(response.body).full_name + " has been created");
                    } else {
                        console.log('Error === ' + error);
                    }
                    if (response.body) {
                        rl.question('Edit the created repository name to: ', function(newName) {
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

                            request.patch(options, function(error, response, body) {
                                if (!error) {
                                    console.log("Your repository name has been changed to " + JSON.parse(response.body).full_name);
                                } else {
                                    console.log('Error === ' + error);
                                }
                                if (response.body) {
                                    rl.question('delete a repo: ', function(repoName) {
                                        var url = 'https://api.github.com/repos/' + username + '/' + repoName;
                                        var options = {
                                            url: url,
                                            headers: {
                                                'User-Agent': 'request',
                                                'Authorization': 'token ' + apiToken
                                            }
                                        }

                                        request.delete(options, function(error, response, body) {
                                            if (!error) {
                                                console.log("Repository Deleted");
                                            } else {
                                                console.log('Error === ' + error);
                                            }
                                        })
                                        rl.close();
                                    });
                                }
                            });
                        });
                    }
                });
            }); //first Question

        } // first if statement
    })
})