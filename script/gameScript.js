
document.getElementById("instruction-video").pause();
document.getElementById("scoreForm").style.display= "none";
var score = 0;
var x;
var whiteSpeed = 300;
var greenSpeed = 450;
var goldSpeed = 5000;
var intervalLoop;
var intervalLoop2;
var intervalLoop3;
var div = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("class","divClass");
var themeButton = true;

// for volume button //
// ---------------------------------------------------------------------
var bgsound;
var volumeButton = document.getElementById("volume-img");
var volumeCheck = true;

$(volumeButton).click(function(){

if(volumeCheck === true){
    volumeCheck = false;
    volumeButton.setAttribute("src","./images/mute.png");
    
} else {

    volumeCheck = true;   
    volumeButton.setAttribute("src","./images/volume.png");
}
});
//------------------------------------------------------------------------------

// Start game //


function startButton(){
    bgsound = new Audio("./sounds/bgsound.mp3");
    bgsound.volume = 0.1;
    if(volumeCheck === false){
        bgsound.pause();
    } else {
        bgsound.play();
    }
    
    

    document.getElementById("scoreDisplay").innerHTML = "Score : " + score; 
    document.getElementById("loseImage").style.display = "none";
    document.getElementById("entry").style.display = "none";
    
    intervalLoop = setInterval(Button, whiteSpeed);
    intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    intervalLoop3 = setInterval(buttonGold, goldSpeed);
    $("h1").setAttribute("class","margin");
}

function Button(){
   
    for(var i=1;i<2;i++){
        var btn = document.createElement("button");
        div.appendChild(btn);
        btn.setAttribute("class","clickWhite");
        
        window.scrollTo({
            top : document.body.scrollHeight,
            behavior: 'smooth'
        });    
    }
    $(".clickWhite").click(function() {
        loseSound();
        bgsound.pause();
        $(this).css("background-color","Red");
        // alert("Loose...........");
        clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        document.getElementById("scoreDisplay").innerHTML = "Score : " + score;  
        document.getElementById("scoreForm").value = score;
        $(".divClass").hide();
        $("#entry").hide();
        $("#game-head").hide();
        document.getElementById("start-button").style.display = "none";
        document.getElementById("loseImage").style.display = "block";
        document.getElementById("retryGame").style.display = "block";
        window.scrollTo(0, 0); 
        // -------------------------------------

    // -----------------------------------
              
    });
}
function buttonGreen(){
    var btnGreen = document.createElement("button");
    var btnBlue;
    div.appendChild(btnGreen);
    btnGreen.setAttribute("style","background-color: #00b33c");
    btnGreen.setAttribute("class","clickBlue");

    
    $(btnGreen).click(function() {
        
        btnBlue = $(this).css("background-color","#0073e6");
        btnGreen.setAttribute("class","blueColor");
        score = score+1;
        document.getElementById("scoreDisplay").innerHTML = "Score : " + score;
        winSound(this);


    });
    if(score > 10){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 400;
        greenSpeed = 375;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }
    if(score > 20){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 300;
        greenSpeed = 350;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }
    if(score > 30){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 300;
        greenSpeed = 250;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }
    if(score > 50){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 250;
        greenSpeed = 225;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }
    if(score > 60){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 225;
        greenSpeed = 200;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }
    if(score > 70){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 200;
        greenSpeed = 175;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }
    if(score > 90){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 175;
        greenSpeed = 150;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }
    if(score > 120){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 150;
        greenSpeed = 100;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }
    if(score > 150){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 100;
        greenSpeed = 50;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }
    if(score > 180){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 75;
        greenSpeed = 35;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }
    if(score > 200){
        // clearInterval(intervalLoop);
        clearInterval(intervalLoop2);
        whiteSpeed = 50;
        greenSpeed = 25;
        // intervalLoop = setInterval(Button, whiteSpeed);
        intervalLoop2 = setInterval(buttonGreen, greenSpeed);
    }


    window.addEventListener('scroll', function() {
        var element = document.querySelector('.clickBlue');
        var position = element.getBoundingClientRect();
        // checking whether fully visible
        if(position.top <= 0 && position.bottom <= window.innerHeight) {
            
            console.log('not visible');
            clearInterval(intervalLoop);
            clearInterval(intervalLoop2);
            $("#entry").hide();
            $(".divClass").hide();
            $("#game-head").hide();
            document.getElementById("scoreDisplay").innerHTML = "Score : " + score; 
            document.getElementById("scoreForm").value = score;
            document.getElementById("start-button").style.display = "none";
            document.getElementById("loseImage").style.display = "block";
            document.getElementById("retryGame").style.display = "block";
            window.scrollTo(0, 0);
            bgsound.pause();
            // -------------------------------------
       
        // -----------------------------------
        }

        
    });
}

function buttonGold(){
    var btnGold = document.createElement("button");
    var btnGoldBright;
    div.appendChild(btnGold);
    btnGold.setAttribute("style","background-color: #ffdf00");
    btnGold.setAttribute("class","clickGold");

    
    $(btnGold).click(function() {
        
        btnGoldBright = $(this).css("background-color","#ffffff");
        btnGold.setAttribute("class","goldColor");
        score = score+10;
        document.getElementById("scoreDisplay").innerHTML = "Score : " + score;
        winSound(this);


    });
}

// function scoreSubmit(){
//     document.getElementById("scoreForm").value = score;
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbxxBmocWi2977pbfU23fiBgdiMB-I88kc2anmHiIA/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             // alert("Form submitted successfully")
//             window.location.reload();
//         },
//         error:function (err){
//           window.location.href="failure.html";

//         }
//     })
// }

function winSound(win){
    var greenSound = new Audio("./sounds/win.mp3");
    greenSound.play();
}

function loseSound(){
    var whiteSound = new Audio("./sounds/fail.mp3");
    whiteSound.play();
}

function themeToggle(){
    var element = document.body;
   element.classList.toggle("dark-mode");
   
   if(themeButton === true){
    themeButton = false;
    $("#theme-button").addClass("btn-dark");
    
   } else {
    themeButton = true;
    $("#theme-button").removeClass("btn-dark");
    
   }
   
}   

function showInstructions(){
    $("#game-rules-id").fadeToggle();
    // document.getElementById("game-rules-id").style.display = "block";
    document.getElementById("instruction-video").play();
    document.getElementById("instruction-video").volume = 0;
}





