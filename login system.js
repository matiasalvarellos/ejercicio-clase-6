let username = [];
let password = [];


//register account
function register(usuario, contraseña) {
    username.push(usuario);
    password.push(contraseña);
    console.log("Register completed");
}

register("pato", "pato.com");
register("rochi", "rochi1");
register("segundo", "segundo10");
register("chiara", "chiarac1");

//login into account
function login(usuario1, contraseña1) {
    if (username.indexOf(usuario1) === password.indexOf(contraseña1) && username.indexOf(usuario1) > -1 && password.indexOf(contraseña1) > -1 ) {
        console.log("login succesful")} else {
            console.log("Can´t login")
        }
    }

login("chiara", "chiarac");

console.log(username, password);



