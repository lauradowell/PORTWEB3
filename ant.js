
// Here is where the user Interfaces in JavaScript are implemented
//  animation: to the nav bar
function  printHTMLhead(){
    let  text = `
    <meta charset="utf-8">
    <title>DOM</title>
    <meta name="viewport" content="initial-scale=1.0; width=device-width">
    <link rel="stylesheet" href="/public_html/portfolio_website/css/style.css">
        `;
    document.head.innerHTML = text; 
}

// I wanted to create a  nav bar that I could change from a single .js file. The following is adapted from Tom's example on git https://git.arts.ac.uk/tkeene/BScExamplesResources
//In order to create this navbar I had to broaden my understanding of navigating the DOM, explored in WEEK 8
function printHTMLprimarynav(){
    let  text = `

    <!-- do we want this in body below here? is this right?-->
    
    <head>
       
       <a href="../home_bootstrap/index.html"><img id="object-position" src="../images/signature.png" ;"></a>
       

    </head>
    <ul>
      
    <!-- dropdown tabs-->
    <li class="dropdown">
   
        <!-- interesting to see that this order has to be this way if not settings will be overwritten-->
        <!-- CLASSES: p1 does not have line animation and dropbtn does-->
        <a  class="hover-underline-animation"  href="javascript:void(0)" class="dropbtn" >ART</a>
        <!-- instert page link into href-->
        <div class="dropdown-content">
            <a class="p1" href="../art/cci.html">(2020-now) Creative Computing </a>
         
        </div>
    </li>


    <li class="dropdown">
       
        <a class="hover-underline-animation" class="dropbtn" href="../about/index.html">ABOUT</a>
        
    </li>

</ul>
    `;
    document.getElementById('primarynav').innerHTML = text;
}

function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
setFavicons('../images/smol_sig.png');


function printHTMLfooter(pagetxt){
    /* below not used, but leaving here for future applications*/
    let  text = `
    Some footer text update for: ${pagetxt}
    `;
    document.getElementById('myfooter').innerHTML = text;
}

function spiral(){
    let tag; 
    let deg = 0;
    for(let i=0;i<15;i++){
        deg = i*5; 
        style = `
            transform:rotate(${deg}deg);
            border:1px solid red; 
            width:200px;
            height:200px;
            position:absolute;
            top:200px;
            left:50%;
        `;
        tag = document.createElement("div");
        tag.setAttribute('style', style);
        tag.innerHTML = "x";
        document.getElementById('myspiral').appendChild(tag);
    }
}

/* tab  design example */

function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
  }