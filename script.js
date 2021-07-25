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
    for(let i=0; i<enteredDate.length;i++)
    {
        enteredDate[i].innerHTML = data.EnteredDate;
    }
    for(let i=0; i<receivedDate.length;i++)
    {
        receivedDate[i].innerHTML = data.ReceivedDate;
    }
    for(let i=0; i<numberOfShares.length;i++)
    {
        numberOfShares[i].innerHTML = data.NumberofShares;
    }
    for(let i=0; i<type.length;i++)
    {
        type[i].innerHTML = data.Type;
    }
    for(let i=0; i<amount.length;i++)
    {
        amount[i].innerHTML = data.Amount;
    }
    for(let i=0; i<status.length;i++)
    {
        status[i].innerHTML = data.Status;
    }
    for(let i=0; i<info.length;i++)
    {
        info[i].innerHTML = data.info;
    }
})

