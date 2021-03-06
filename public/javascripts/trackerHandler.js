function getTrackers(id) {
    return fetch('/users/' + id)
        .then(data => {
            return data.json();
        })
}

function postTracker(id, name) {
    return axios.post("/trackers", {
        userID: id,
        name: name
    })
}


function onCreateTracker() {
  

    const name = $('#tracker-input').val();
    if (name !== '') {
        postTracker(window.ID, name)
        .then(newTracker => {
        

            $('#trackers').empty()
            getTrackers(window.ID)
                .then(data => {
                fillTrackers(data.trackers)  
                })
                .catch(err => {
                 
                })
        })
    }

    
}


$(document).ready(() => {
    $('#tracker-submit').click(onCreateTracker)
    // if ($("#username").val() != null && $("#username").val() != undefined && $("#password").val() != null && $("#password").val() != undefined) {
                axios.interceptors.request.use((config) => {
                    // Do something before request is sent
                    return config;
                  }, (error) => {
                    // Do something with request error
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
    console.log(document.cookie)
    if (document.cookie=="loggedin=true"){
        axios.get('/find-me')
        .then(data => {
            console.log("someerror2")
            return getTrackers(data.data._id)
        })
        .then(data => {

            console.log("someerror")

            fillTrackers(data.trackers);
           
        }) .catch(err => {

            console.log(err)

            //hide the trackers

            //show landing page

            $('#trackers-container').css('display', 'none')

       
            $("#logout-container").css("display", "none");
            
 //           if (window.location.pathname !== "/auth/signin" && window.location.pathname !== "/auth/signup")
                //window.location.replace('/auth/signin');
        })
    }
//     axios.get('/find-me')
//         .then(data => {
//             console.log("someerror2")
//             return getTrackers(data.data._id)
//         })
//         .then(data => {

//             console.log("someerror")

//             fillTrackers(data.trackers);
           
//         }) .catch(err => {

//             console.log(err)

//             //hide the trackers

//             //show landing page

//             $('#trackers-container').css('display', 'none')

       
//             $("#logout-container").css("display", "none");
            
//  //           if (window.location.pathname !== "/auth/signin" && window.location.pathname !== "/auth/signup")
//                 //window.location.replace('/auth/signin');
//         })
    
    
});



function addInputs(id, elem) {
   
    let trackerID = "";
    if(typeof(id) === "string") {
        trackerID = id;
    }
    else {
        trackerID = $(this).parent().parent().attr("id");
    }
    
    if ($("#" + trackerID + "> input").css("display") === "none") {

        $("#" + trackerID + "> input").css("display", "block");
        $("#" + trackerID + "> button").css("display", "block");
        $("#" + trackerID + "> select").css("display", "block");

        if(elem) {
            $("#" + trackerID + ">.name-input").val(elem.name);
            $("#" + trackerID + ">.target-input").val(elem.target);
            $("#" + trackerID + ">.value-input").val(elem.value);
            $("#" + trackerID + ">.tracker-target-input").val(elem._id);
        }
    }
    else {
        $("#" + trackerID + "> input").css("display", "none");
        $("#" + trackerID + "> select").css("display", "none");
        $("#" + trackerID + "> .add-child").css("display", "none");

        $("#" + trackerID + ">.name-input").val("");
        $("#" + trackerID + ">.target-input").val("");
        $("#" + trackerID + ">.value-input").val("");
        $("#" + trackerID + ">.tracker-target-input").val("");
}
    

}


function onUpdateTracker() {

}


function onDeleteTracker() {
   
    let trackerID = $(this).parent().parent().attr("id");
    axios.delete("/trackers/" + trackerID) //localhost:3000/tracker/
        .then(data => {
            $('#trackers').empty();
            return getTrackers(window.ID)
        })
        .then(data => {
            fillTrackers(data.trackers);
        })

}

function addTrackerTarget() {
  
    let trackerID = $(this).parent().attr("id");
    const name = $("#" + trackerID + ">.name-input").val();
    const target = $("#" + trackerID + ">.target-input").val();
    const value = $("#" + trackerID + ">.value-input").val();
    const targetID = $("#" + trackerID + ">.tracker-target-input").val();
    console.log(name, target, value);
    axios.post("/trackertargets", {
        trackerID: trackerID,
        name: name,
        target: target,
        value: value,
        targetID: targetID
    })
    .then(trackerTarget => {
        $('#trackers').empty()
        return getTrackers(window.ID)
    })
    .then(data => {
        fillTrackers(data.trackers)
    })
}

function showTrackerTargets() {

    let trackerID = $(this).parent().parent().attr("id");
    let table = $("#" + trackerID + ">.tracker-target-table");
    if (table.css("display") === "none") {
        table.css("display", "inline-block");
    }
    else {
        table.css("display", "none")
    }
}


function deleteTrackerTarget(id) {
    axios.delete("trackertargets/" + id) //localhost:3000/tracker/
        .then(data => {
            $('#trackers').empty();
            return getTrackers(window.ID)
        })
        .then(data => {
            fillTrackers(data.trackers);
        })
}

function fillTrackers(trackers) {

    var UNIT_TYPES = [
        'ml',
        'cal',
        'mg',
        'gal',
        'oz',

    ]

    var options = UNIT_TYPES.map(function(name, i) {
        return `<option>${name}</option>`
    })

    trackers.forEach(elem => {
        
        let id = elem._id;
        $('#trackers').append(`
        <div id=${id} class="tracker">
            <div class="name-container">
                <p class="tracker-name">
                    ${elem.name}
                </p>
                
                <button class="add-inputs crud-button"">+</button>
                <button class="delete crud-button">x</button>
            </div>
            
            <input class="name-input" style="display:none" placeholder="Name" type="text">
            <input class="target-input" style="display:none" placeholder="Type" type="text">
            <input class="value-input" style="display:none" placeholder="Measurement" type="text">
            <select style="display:none">
                ${options}
            </select>
            <input class="tracker-target-input" style="display:none" type="hidden">
            <button class="add-child confirm" style="display:none">confirm</button>
            <table class="tracker-target-table">
                <tr>
                    <th>name</th>
                    <th>target</th>
                    <th>value</th>
                    <th>date</th>
                    <th>actions</th>
                </tr>
            </table>
        </div>
        `);

        function autofillMeasurement(ev) {
            $('.value-input').val(ev.currentTarget.value)
        }

        console.log($("#" + id + ">.add-child"), 'tracker name')
        $("#" + id + " select").change(autofillMeasurement);
        $("#" + id + "> .name-container > .tracker-name").click(showTrackerTargets);
        $("#" + id + "> .name-container > .add-inputs").click(addInputs);
        $("#" + id + ">.add-child").click(addTrackerTarget);
        $("#"+ id +"> .name-container > .delete").click(onDeleteTracker);
        elem.trackerTargets.forEach(elem => {
            console.log(new Date(elem.date).getHours())
            if (elem.name) {
                $("#" + id + " > table").append(`
                    <tr class="tracker-target">
                        <td>
                            ${elem.name}
                        </td>
                        <td>
                            ${elem.target}
                        </td>
                        <td>
                            ${elem.value}
                        </td>
                        <td>
                         ${formatDate(new Date(elem.date))}
                        </td>
                        <td>
                            <button class="edit" onclick='addInputs("${id}", ${JSON.stringify(elem)})'>edit</button>
                            <button class="edit" onclick='deleteTrackerTarget(\"${elem._id}\")'>delete</button>
                        </td>
                        
                    </tr>
                `)
            }
            

        })
    })

}

function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

