// Image swapping
let myImage = document.getElementById('test-central-image');

myImage.onclick = function() {
  if (myImage.getAttribute('src') === '../images/corgi.jpg') {
    myImage.setAttribute('src', '../images/corgi2.jpg')
  } else {
    myImage.setAttribute('src', '../images/corgi.jpg')
  }
}



// Change user button
let myButton = document.getElementById('button-change-user')
let myHeading = document.getElementById('test-heading')

myButton.onclick = function() {
  setUsername();
}

function setUsername() {
  let myUsername = prompt('Please enter your username.');
  if(myUsername) {
    localStorage.setItem('username', myUsername);
    myHeading.textContent = 'How you doin\', ' + myUsername + '?';
  }
}