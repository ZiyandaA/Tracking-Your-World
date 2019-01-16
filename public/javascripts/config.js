$(document).ready(() => {

    $('#landing-container #signup-btn').click(function() {
        window.location.replace('/auth/signup')
    })

    console.log('should always be running')
    console.log($("#username").val())
console.log($("#password").val())
    // if ($("#username").val() != null && $("#username").val() != undefined && $("#password").val() != null && $("#password").val() != undefined) {
       
        axios.interceptors.request.use((config) => {
            // Do something before request is sent
            return config;
          }, (error) => {
            // Do something with request error
            console.log(error)
            return Promise.reject(error);
          });
        
        // Add a response interceptor
        axios.interceptors.response.use((response) => {
            // Do something with response data
            return response;
          }, (error) => {
            // Do something with response error
            return Promise.reject(error);
          });
    axios.defaults.withCredentials = true;
    if (document.cookie=="loggedin=true"){
     axios.get('/find-me')
        .then(data => {

            console.log('should be running if user exists')


            if (window.location.pathname === "/auth/signin" ||
                window.location.pathname === "/auth/signup") {

                    console.log('should be forwarding to home page')

                    window.location.replace("/")
                }
           console.log(data);
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
        
    }
    else {
        $('#trackers-container').css('display', 'none')
        $("#logout-container").css("display", "none");
    }
})

