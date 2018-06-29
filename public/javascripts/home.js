$(document).ready(() => {
    console.log('im working')
    $("#logout").on("click", () => {
        axios.defaults.withCredentials = true;
        axios.post("/auth/logout")
        .then(data => {
            console.log(data);
            window.location.replace('/auth/signin');
        })
        .catch(err => {
            console.log(err, 'this is error')
        })
    })
    
})