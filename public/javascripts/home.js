$(document).ready(() => {
    
    $("#logout").on("click", () => {
        axios.defaults.withCredentials = true;
        axios.post("/auth/logout")
        .then(data => {
            
            window.location.replace('/auth/signin');
        })
        .catch(err => {
           
        })
    })
    
})