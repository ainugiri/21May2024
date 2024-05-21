function passwordCheck(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

function usernameCheck(username) {
  if (username.length >= 5) {
    return true;
  } else {
    return false;
  }
}   

function mobilenumberCheck(mobilenumber) {
  if (mobilenumber.length >= 10) {
    return true;
  } else {
    return false;
  }
}   