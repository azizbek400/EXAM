const $SignUp = document.querySelector("#singup-form");

function User(firsname, lastname, email, password) {
    this.firsname = firsname
    this.lastname = lastname
    this.email = email
    this.password = password
}

const SignUpNewUser = (e) => {
    e.preventDefault();
    const children = e.target.children;

    let newUser = User(children[0].value, children[1].value, children[2].value, children[3].value);
    children[4].setAttribute("disabled", true)
    children[4].innerText = "registering..."
    fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(data => {
            children[4].removeAttribute("disabled")
            children[4].innerText = "Success";
            location.replace(location.origin + "./pages/login.html")
        })
}

$SignUp.addEventListener("submit", SignUpNewUser);

