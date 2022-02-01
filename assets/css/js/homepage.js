var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("repo-search-term");


var formSubmitHandler = function(event) {
    event.preventDefault();
    //get value from input element 
    var username = nameInputEl.value.trim();

    if (username) {
        getUsersRepos(username);
        nameInputEl.value = "";
    } else {
        alert('Please enter a Github username')
    }
    console.log(event);
}

var displayRepos = function(repos, searchTerm) {
    repoContainerEl.textContent = "";
    repoSearchTerm.textContent = searchTerm;
}

userFormEl.addEventListener("submit", formSubmitHandler);


var getUsersRepos = function(user) {
    // format the github api url
    var apiUrl = "http://api.github.com/users/" +user + "/repos";

    //make a request to the url 
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayRepos(data, user);
        });
    });
};
console.log("outside")
getUsersRepos()