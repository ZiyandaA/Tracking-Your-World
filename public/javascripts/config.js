$(document).ready(() => {

    $('#landing-container #signup-btn').click(function() {
        window.location.replace('/auth/signup')
    })

    console.log('should always be running')
    
    axios.defaults.withCredentials = true;
     axios.get('/find-me')
        .then(data => {

console.log('should be running if user exists')


            if (window.location.pathname === "/auth/signin" ||
                window.location.pathname === "/auth/signup") {

                    console.log('should be forwarding to home page')

                    window.location.replace("/")
                }
           
            username = data.data.username;
            window.ID = data.data._id;
            let information = $("#welcome-message");
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

