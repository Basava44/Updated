const assistance = document.querySelector(".assistance");
const learn = document.getElementsByClassName("learn");

function myfunction()
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

  assistance.addEventListener("click",()=>{
      document.getElementById("help").style.display="block";
})

function close_helpsection(){
    document.getElementById("help").style.display="none";
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
    currentslide=2;

    if(currentslide==3)
    currentslide=0;

    learn[currentslide].style.display ="flex";       
}

