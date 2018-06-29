function onSignUp(e) {

    const username = $("#username").val();
    const password = $("#password").val();
    console.log(username);
    axios.defaults.withCredentials = true;
    axios.post('/auth/signup', {
            username: username,
            password: password
        
    })
    .then(user => {
       
        window.location.replace('/auth/signin');
    })
    .catch(err => {
        console.log(err);
        $("#error").html(err.response.data.error);
    })

}

$(document).ready(() => {
    $("#signUpButton").click(onSignUp);
})


function test() {
    const username = $("#username").val();
    const password = $("#password").val();
    console.log(username, password)
    onSignUp();
}