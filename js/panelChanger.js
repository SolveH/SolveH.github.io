var itprojectsbtn = document.getElementById("itprojectsbtn");
var personalprojectsbtn = document.getElementById("personalprojectsbtn");
var itprojects = document.getElementById("itprojects");
var personalprojects = document.getElementById("personalprojects");
function itprojectClick(){
    itprojectsbtn.style.backgroundColor = "#008CBA";
    itprojectsbtn.style.color = "#fff";
    personalprojectsbtn.style.backgroundColor = "#fff";
    personalprojectsbtn.style.color = "#000";
    itprojects.style.display = "inline";
    personalprojects.style.display = "none";
}
function personalprojectClick(){
    personalprojectsbtn.style.backgroundColor = "#008CBA";
    personalprojectsbtn.style.color = "#fff";
    itprojectsbtn.style.backgroundColor = "#fff";
    itprojectsbtn.style.color = "#000";
    personalprojects.style.display = "inline";
    itprojects.style.display = "none";
}
itprojectClick();
