$(document).ready(() => {
    
    axios.defaults.withCredentials = true;
     axios.get('/find-me')
        .then(data => {
            if (window.location.pathname === "/auth/signin" ||
                window.location.pathname === "/auth/signup") {
                    window.location.replace("/")
                }
           
            username = data.data.username;
            window.ID = data.data._id;
            let information = $("#information > span");
            if (information.length) {
                information.text("Welcome, " + username);
            }
            $('#login-container').css("display", "none")


        })
        .catch(err => {
       
            $("#logout-container").css("display", "none");
           
            if (window.location.pathname !== "/auth/signin" && window.location.pathname !== "/auth/signup")
                window.location.replace('/auth/signin');
        })
})

