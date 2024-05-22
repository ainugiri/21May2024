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
