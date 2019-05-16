var blackSquareMaker = document.getElementById("squareMaker");      
var mainRef = document.getElementsByTagName("main")[0];             
var globCounter = 0;                                                
var validClickCounter = 0;                                           
var arraySquare = [];                                               
var arrayLetter = [];                                               

(function Square() {
    var firstSquareCss = function(fSquare){
       fSquare.style.cssFloat = "Left";
       fSquare.style.height = 80 + "px";
       fSquare.style.width = 80 + "px";
       fSquare.style.background = "aquamarine";
       fSquare.style.margin = "64px";
       fSquare.style.color = "#ffffff";
       fSquare.style.fontSize = "64px";
       fSquare.style.display = "flex";
       fSquare.style.alignItems = "center";
       fSquare.style.textAlign = "center";
       fSquare.className =  "Square_" + globCounter++;
    }

    var firstSquare = document.createElement("section");
    firstSquareCss(firstSquare);
    arraySquare.push(firstSquare);
    currLen = arraySquare.length;                                   

})();

var generateLetter = function () {
    var letterOptions = "ROZEEN";                                
    var newSpen = document.createElement("span");
    newSpen.style.display = "none";
    newSpen.style.margin = "auto";
    newSpen.innerText = letterOptions.charAt(Math.floor(Math.random() * letterOptions.length))
    arraySquare[currLen - 1].appendChild(newSpen);
}


blackSquareMaker.onclick = function () {    
                                            
    for (var i = 0; i < 3; ++i) {
        mainRef.appendChild(arraySquare[currLen - 1]);
        var squareStyle = window.getComputedStyle(arraySquare[currLen - 1]);
        var newSquare = arraySquare[currLen - 1].cloneNode(true);
        generateLetter();
        newSquare.style.width = parseInt(squareStyle.width) + 20 + "px";
        newSquare.style.height = parseInt(squareStyle.height) + 20 + "px";
        newSquare.style.fontSize = parseInt(squareStyle.fontSize) + 5 + "px"
        newSquare.className = "Square_" + globCounter++;                                
        arraySquare.push(newSquare);
        currLen = arraySquare.length;                                                   
    }
}

var parseSquare = function (squareSpan, squareIndex) {                              
    arrayLetter[validClickCounter++] = { letter: squareSpan, index: squareIndex };      

    if (validClickCounter % 2 == 0) {                                                   
        var fLetter = arrayLetter[validClickCounter - 1].letter;
        var sLetter = arrayLetter[validClickCounter - 2].letter;
        var fIndex = arrayLetter[validClickCounter - 1].index;
        var sIndex = arrayLetter[validClickCounter - 2].index;
         validClickCounter = 0;                                                         
         
        if (fLetter.innerText == sLetter.innerText && fIndex != sIndex) {               
            exposuredSquare(fIndex);
            exposuredSquare(sIndex);
        }

        else{
            setTimeout(function(){                                                                 
                fLetter.style.display = "none";
                sLetter.style.display = "none";        
                },500);
            }
        }

}

var exposuredSquare = function (squareIndex) {
    arraySquare[squareIndex].style.background = "#7fffd4";                                
    arraySquare[squareIndex].className = "exposured_" + squareIndex;                     
}

document.addEventListener("click", function (currSection) {
    var chekValidClick = /Square_/;

    if (currSection.target.className.search(chekValidClick) != -1) {                     
        var arrayIndex = currSection.target.className.substring("Square_".length);
        arrayIndex = parseInt(arrayIndex);
        var s = arraySquare[arrayIndex];
        var x = s.firstChild;
        x.style.display = "block";                                                       
        parseSquare(x, arrayIndex);
    }
});