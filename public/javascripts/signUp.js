function onSignUp(e) {

    const username = $("#username").val();
    const password = $("#password").val();
    
    axios.defaults.withCredentials = true;
    axios.post('/auth/signup', {
            username: username,
            password: password
        
    })
    .then(user => {
      
        window.location.replace('/auth/signin');
    })
    .catch(err => {
        
        $("#error").html(err.response.data.error);
    })

}

$(document).ready(() => {
    $("#signUpButton").click(onSignUp);
})


function test() {
    const username = $("#username").val();
    const password = $("#password").val();
    
    onSignUp();
}