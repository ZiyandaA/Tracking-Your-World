$(document).ready(() => {

    console.log('this should run')

    $('#landing-container #signup-btn').click(function() {
        window.location.replace('/auth/signup')
    })
    
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

            //hide landing page

            //show trackers

            $('#landing-container').css('display', 'none')


        })
        .catch(err => {

            console.log('did error out')

            //hide the trackers

            //show landing page

            $('#trackers-container').css('display', 'none')

       
            $("#logout-container").css("display", "none");
           
 //           if (window.location.pathname !== "/auth/signin" && window.location.pathname !== "/auth/signup")
                //window.location.replace('/auth/signin');
        })
})

