function validateUsername(username) {
  if(username.length <10)
    return false; 
  return true;
}

function validate (username, password) {
  if(!validateUsername(username))
    return false;
  if(password.length < 8)
    return false;
  return true;
}

function mobilenumberValidate(mobileNumber) {
  if(mobileNumber.length !== 10)
    return false;
  return true;
}

// codex 
// OpenAI
// Generate code snippets for your projects
// prompt = "Validate username and password"
// code = "function validateUsername(username) {\n  if(username.length <10)\n    return false; \n  return true;\n}\n\nfunction validate (username, password) {\n  if(!validateUsername(username))\n    return false;\n  if(password.length < 8)\n    return false;\n  return true;\n}"
// language = "javascript"
// version = 3


function calculateSumOfArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
} 

function calculateAge(birthYear) {
  return 2022 - birthYear;
}

function validateForm(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var birthYear = document.getElementById("birthYear").value;
  var experience = document.getElementById("experience").value;
  var arr = document.getElementById("arr").value;
  
  if(!validate(username, password)){
    alert("Invalid username or password");
    return false;
  }
  if(!mobilenumberValidate(mobileNumber)){
    alert("Invalid mobile number");
    return false;
  }
  if(calculateAge(birthYear) < 18){
    alert("Age must be greater than 18");
    return false;
  }
  if(calculateExperience(experience) < 0){
    alert("Experience must be greater than 0");
    return false;
  }
  if(calculateSumOfArray(arr) < 0){
    alert("Sum of array must be greater than 0");
    return false;
  }
  return true;

}

// cr214
// change request
// calculateExperience
// calculateAge
// calculateSumOfArray
// prompt = "Calculate the sum of an array"
// code = "function calculateSumOfArray(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n} "
// language = "javascript"

// logic
// experience * 12
