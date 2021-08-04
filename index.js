const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function memberInput() {
    inquirer
    .prompt(
        {
            type: "text",
            name: "name",
            message: "What is the name of this team member?",
        },
        {
            type: "number",
            name: "ID",
            message: "Please input the member ID",           
        },
        {
            type: "input",
            name: "email",
            message: "What is this team member's email?",
        },
        {
            type: "input",
            name: "role",
            message: "What is this team member's role?",
        }
    )
}

// Here I would put code to separate the prompts according to role
// For engineer - add GitHub
// For intern - add school
// For manager - add office number

memberInput();

// Received some help from https://github.com/RyanEllingson/Team-Profile-Generator