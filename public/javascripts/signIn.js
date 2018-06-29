function onSignIn(e) {
    alert( "Handler for .submit() called." );

    const username = $("#username").val();
    const password = $("#password").val();
    
    axios.defaults.withCredentials = true;
    axios.post('/auth/signin', {
            username: username,
            password: password
        
    })
    .then(user => {
       
        window.location.replace('/');
    })
    .catch(err => {
       
        $("#error").html(err.response.data.err);
    })

}

$(document).ready(() => {
    $("#signin-button").click(onSignIn);
})


function test() {
}