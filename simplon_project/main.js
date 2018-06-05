// // string array object number calcul
// // "" string chaine de caratere
// // [] array tableau indexé
// // {} object tableau associatif
// // 1 number nombre
// // 1 + 2 calcul

// var name = "Paul";
// var myCalculBig = 3+50;  // camelCase
// var myNumer = 8;
// console.log(name)
// console.log(myCalculBig)
// console.log(myNumer)

// var myArray = ["paul","thomas","Alice"]
// console.log(myArray)

// var myObject = {name:"paul",age:45,sexe:"Homme"}
// console.log(myObject)

// var listUsers = [ // tableau indexe
//     {name:"paul",age:45,sexe:"Homme"}, // tableau associatif
//     {name:"loise",age:78,sexe:"femme"}, // tableau associatif
//     {name:"robert",age:45,sexe:"Homme"}, // tableau associatif
//     {name:"michel",age:67,sexe:"Homme"}, // tableau associatif
//     {name:"carole",age:12,sexe:"femme"} // tableau associatif
// ]
// console.log(listUsers)

// var myObjectAvanced = {users:{
//     name:"reberta",
//     age:34
// }}
// console.log(myObjectAvanced)


/*  ------------------------------------------------------------------------- */


var circles = document.querySelectorAll(".circle");
var text    = document.querySelectorAll("#describe main")

console.log(circles)

for(var i = 0; i < circles.length; i++){
    circles[i].addEventListener('click', (e)=>{
        
        description(e.currentTarget.dataset.id)
    })
}

function description(id){
    for(var j = 0; j < text.length; j++){
        if(text[j].dataset.id === id){
            text[j].style.display = "block"
        } else {
            text[j].style.display = "none"
        }
    }
}



