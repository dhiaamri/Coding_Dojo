function login(element) {
  if (element.innerText === "login") {
    element.innerText = "logout";
  } else {
    element.innerText = "login";
  }
}

function vanish(element) {


    element.remove();

}
