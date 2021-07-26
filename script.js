const assistance = document.querySelector(".assistance");
const learn = document.getElementsByClassName("learn");
const user = document.querySelectorAll(".user_name");
const userID = document.querySelector(".userid");
const help = document.querySelector(".help");

for(let i=0;i<user.length;i++){
    user[i].innerHTML = userID.value;
}

function change_userid(e){
    for(let i=0;i<user.length;i++){
        user[i].innerHTML = userID.value;
    }
}


function responsive_navbar()
{
    const x = document.getElementById("topnav");
    if (x.className === "navigation") {
        x.className += " responsive";
        btn.className = "fa fa-close";
    } else {
        x.className = "navigation";
        btn.className = "fa fa-bars";
    }
}

function open_data(evt, dataName) {
    const features = document.getElementsByClassName("features");
    for(let i=0;i<features.length;i++)
    {
        features[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(dataName).style.display = "block";
      evt.currentTarget.className += " active";
  }

function open_helpsection(){
      document.getElementById("help").style.display="block";
}

function close_helpsection(){
    document.getElementById("help").style.display="none";
}

window.onclick = function(event) {
    if (event.target == help) {
      help.style.display = "none";
    }
  }


function close_tab(){
     document.querySelector(".caution").style.display="none";
}

// slide show

var currentslide = 0;
learn[currentslide].style.display ="flex";

function slide(slidechange){
    console.log("currentslide:",currentslide, "slidechange", slidechange);

    for(let i=0;i<learn.length;i++)
    {
        learn[i].style.display = "none";
    }

    currentslide +=  slidechange;
    
    if(currentslide==-1)
    currentslide=learn.length-1;

    if(currentslide==learn.length)
    currentslide=0;

    learn[currentslide].style.display ="flex";       
}


// Reading Json File

const Features = document.getElementsByClassName("features");
// for(let x in Features){
//     console.log(Features[x].firstElementChild.innerHTML);
// }

const enteredDate = document.querySelectorAll(".EnteredDate");
const receivedDate = document.querySelectorAll(".ReceivedDate");
const numberOfShares = document.querySelectorAll(".NumberofShares")
const type = document.querySelectorAll(".Type");
const amount = document.querySelectorAll(".Amount"); 
const status = document.querySelectorAll(".Status");
const info = document.querySelectorAll(".info")

fetch("data.json")
.then(responce => responce.json())
.then(data =>{
    for(let x in Features){
        var value = Features[x].firstElementChild.innerHTML;
        // console.log(data[value]);

        // console.log(data[value].EnteredDate);
            enteredDate[x].innerHTML = data[value].EnteredDate;
            receivedDate[x].innerHTML = data[value].ReceivedDate;
            numberOfShares[x].innerHTML = data[value].NumberofShares;
            type[x].innerHTML = data[value].Type;
            amount[x].innerHTML = data[value].Amount;
            status[x].innerHTML = data[value].Status;
            info[x].innerHTML = data[value].info;
    }
})