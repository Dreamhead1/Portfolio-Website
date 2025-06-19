/* Image variables... */
var leftArrow = document.getElementsByClassName ("nextArrow-R");
var rightArrow = document.getElementsByClassName ("nextArrow-L");

var myIMG = document.getElementById ("myIMG");
var abstractSoul = document.getElementById ("i1");
var acidBath = document.getElementById("i2");
var Cyclops = document.getElementById ("i3");
var DMT = document.getElementById ("i4");
var egoDeath = document.getElementById ("i5");
var Falling = document.getElementById ("i6");
var hungryDog = document.getElementById ("i7");
var idDissolution = document.getElementById ("i8");
var Lovers = document.getElementById ("i9");
var maskFlower = document.getElementById ("i10");
var Monkey = document.getElementById ("i11");
var deathGod = document.getElementById ("i12");
var paintingShadow = document.getElementById ("i13");
var penguinHead = document.getElementById ("i14");
var potHead = document.getElementById ("i15");
var Protection = document.getElementById ("i16");
var pullingMe = document.getElementById ("i17");
var ratbirdMan = document.getElementById ("i18");
var shadowSplit = document.getElementById ("i19");
var snakeSkull = document.getElementById ("i20");
var theSheriff = document.getElementById ("i21");
var Tiger = document.getElementById ("i22")&& document.getElementsByClassName ("i22");


/* Image variables... 
  <button type="button" class="arrowButton-L" onclick="changeImageL()">
                            <div class="nextArrow-L">
                                &lt;
                            </div>
                        </button>

<!--L -> R-->

                            <button type="button" class="arrowButton-R" onclick="changeImageR()">
                                <div class="nextArrow-R">
                                    &gt;
                                </div>
                            </button>

*/

/* Left Button Function */
function changeImageL() {
    if (document.getElementById ("myIMG").src = abstractSoul) {
        document.getElementById ("myIMG").src = Tiger}
};
/* Left Button Function */

/* Right Button Function */
function changeImageR() {
    if (myIMG.src = abstractSoul){
        let img = document.querySelector("#myIMG");
        img.setAttribute("src", fileName);
    }
    /* if (document.getElementById ("#myIMG").src = abstractSoul) {
        document.getElementById ("#myIMG").src = acidBath}      */
};
    
/* Right Button Function */