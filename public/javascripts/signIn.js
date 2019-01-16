function onSignIn(e) {
    //alert( "Handler for .submit() called." );
    console.log("DEBBUGIING1")
    const username = $("#username").val();
    const password = $("#password").val();
    
    axios.defaults.withCredentials = true;
    axios.post('/auth/signin', {
            username: username,
            password: password
        
    })
    .then(user => {
       console.log("DEBBUGIING2")
        window.location.replace('/');
    })
    .catch(err => {
        console.log("DEBBUGIING3")
        // $("#error").html(err.response);
        $("#error").html(err.response.data.err);
    })

}

$(document).ready(() => {
    $("#signin-button").click(onSignIn);
})


function test() {
}