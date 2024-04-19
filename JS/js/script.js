


let startButton = document.getElementById("start");
let resetButton = document.getElementById("Reset");
const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
var  starting = false ;

let sensorActive = false;
let isMoving = false;



function toggleDoors(open) {
    if (open) {
      door1.style.transform = 'rotateY(0deg)';
      door2.style.transform = 'rotateY(0deg)';
    } else {
      door1.style.transform = 'rotateY(-90deg)';
      door2.style.transform = 'rotateY(90deg)';
      sensorActive = open;
    }
    }
   function openDoor(){
    toggleDoors(true);
   }
  function closeDoor(duration){
    toggleDoors(true);
    if(duration){
        setTimeout(closeDoor,duration);
    }

  }
  function closeDoor(duration){
    toggleDoors(false);
  }

// function toggleDoors() {
//   if (sensorActive) {
//     door1.style.transform = 'rotateY(0deg)';
//     door2.style.transform = 'rotateY(0deg)';
   
//   } else {
//     door1.style.transform = 'rotateY(-90deg)';
//     door2.style.transform = 'rotateY(90deg)';
//   }
//   sensorActive = !sensorActive;
// }

// Simulate sensor triggering every 3 seconds
// setInterval(() => {
//   toggleDoors();
// }, 3000);



// ---------------------

const lierButton4 = document.getElementById('R4');
const lierButton3 = document.getElementById('R3');
const lierButton2 = document.getElementById('R2');
const lierButton1 = document.getElementById('R1');
const lierButton0 = document.getElementById('R0');
const movingElement = document.getElementById('door-container');
let intervalId;
// let isMovingUp = true;
let currentPosition = 463;

// R4
function movement() {
    isMoving = true;
    const r44 = document.querySelector('.R44');
    r44.style.display = 'block';
    if (isMovingUp) {
        if (currentPosition <= 1) {
            clearInterval(intervalId);
            isMovingUp = false;
            closeDoor();
            setTimeout(openDoor, 3000);
            return;
        } else {
            currentPosition -= 7;
        }
    } else {
        if (currentPosition >= 1) { // Adjust the desired lower position accordingly
            clearInterval(intervalId);
            isMovingUp = true;
            closeDoor();
            setTimeout(openDoor, 3000);
            return;
        } else {
            currentPosition += 7; // Adjust the decrement value according to your needs
        }
    }
    movingElement.style.top = currentPosition + 'px';
}

lierButton4.addEventListener('click', function() {
    intervalId = setInterval(movement, 100);
});

    // R3

 // Define a variable to track the direction of movement
 let isMovingUp = false;

 function movement_R3() {
     isMoving = true;
     const r33 = document.querySelector('.R33');
    r33.style.display = 'block';
     if (isMovingUp) {
         if (currentPosition <= 115) {
             clearInterval(intervalId);
             isMovingUp = false;
             
             return;
         } else {
             currentPosition -= 7;
         }
     } else {
         if (currentPosition >= 115) { // Adjust the desired lower position accordingly
             clearInterval(intervalId);
             isMovingUp = true;
             closeDoor();
             setTimeout(openDoor, 3000);
             return;
         } else {
             currentPosition += 7; // Adjust the decrement value according to your needs
         }
     }
     movingElement.style.top = currentPosition + 'px';
 }
 
 lierButton3.addEventListener('click', function() {
     intervalId = setInterval(movement_R3, 100);
 });
 


    // R2



    function movement_R2() {
        isMoving = true;
        const r22 = document.querySelector('.R22');
        r22.style.display = 'block';
        if (isMovingUp) {
            if (currentPosition <= 233) {
                clearInterval(intervalId);
                isMovingUp = false;
                closeDoor();
                setTimeout(openDoor, 3000);
                return;
            } else {
                currentPosition -= 7;
            }
        } else {
            if (currentPosition >= 234) { // Adjust the desired lower position accordingly
                clearInterval(intervalId);
                isMovingUp = true;
                closeDoor();
                setTimeout(openDoor, 3000);
                return;
            } else {
                currentPosition += 7; // Adjust the decrement value according to your needs
            }
        }
        movingElement.style.top = currentPosition + 'px';
    }
    
    lierButton2.addEventListener('click', function() {
        intervalId = setInterval(movement_R2, 100);
    });
    // R1

    function movement_R1() {
        isMoving = true;
        const r11 = document.querySelector('.R11');
    r11.style.display = 'block';
        if (isMovingUp) {
            if (currentPosition <= 350) {
                clearInterval(intervalId);
                isMovingUp = false;
                closeDoor();
                setTimeout(openDoor, 3000);
                return;
            } else {
                currentPosition -= 7;
            }
        } else {
            if (currentPosition >= 350) { // Adjust the desired lower position accordingly
                clearInterval(intervalId);
                isMovingUp = true;
                closeDoor();
                setTimeout(openDoor, 3000);
                return;
            } else {
                currentPosition += 7; // Adjust the decrement value according to your needs
            }
        }
        movingElement.style.top = currentPosition + 'px';
    }
    
    lierButton1.addEventListener('click', function() {
        intervalId = setInterval(movement_R1, 100);
    });
    // R0

    function movement_R0() {
        isMoving = true;
        const r00 = document.querySelector('.R00');
    r00.style.display = 'block';
        if (isMovingUp) {
            if (currentPosition <= 463) {
                clearInterval(intervalId);
                
                isMovingUp = false;
                closeDoor();
                setTimeout(openDoor, 3000);
                return;
            } else {
                
                currentPosition -= 7;
            }
        } else {
            if (currentPosition >= 463) { // Adjust the desired lower position accordingly
                clearInterval(intervalId);
                isMovingUp = true;
                closeDoor();
                setTimeout(openDoor, 3000);
                return;
            } else {
                currentPosition += 7; // Adjust the decrement value according to your needs
            }
        }
        movingElement.style.top = currentPosition + 'px';
    }
    
    lierButton0.addEventListener('click', function() {
        intervalId = setInterval(movement_R0, 100);
    });

    // BUTTON
 


document.getElementById('Reset').addEventListener('click', function () {
    clearInterval(intervalId); // Arrêter tout mouvement en cours
    currentPosition = 463; // Réinitialiser la position de l'ascenseur
    movingElement.style.top = currentPosition + 'px'; // Réinitialiser la position visuelle de l'ascenseur
    doorMovementAllowed = false; // Désactiver les mouvements de porte
    closeDoor(); // Fermer les portes
    const button = document.getElementById('button');
    button.innerText = ''; // Réinitialiser l'affichage des étapes
  });




    






