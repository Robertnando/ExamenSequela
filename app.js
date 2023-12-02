"use strict"

// function Add(){
// let Screen = document.querySelector(".Screen");
// let Text = document.querySelector(".Text")
// let List = document.getElementById("List")
// let Newlist = document.createElement("li")

//    Newlist.appendChild(Text);
//    List.appendChild(Newlist);
// }

let Bakas = ["CIRNO", "MARISA", "CHIRUMIRU", "REIMU", 12345]
let  Screen = document.querySelector(".Screen");
let Text = document.getElementById("Text");
let List = document.getElementById("List");
let agregar = document.getElementById("Yes");
let eliminar = document.getElementById("No");

for (let i = 0; i < Bakas.length; i++) {
    const Array = Bakas[i];
    console.log(Array)
    
}
console.log("Array send to the console succefully!")

/*
function Add(){
    let AddedText = Text.value;
    AddedText.push(Bakas);
    List.innerHTML = Bakas;
}

;

console.log("Works?")

function name(params) {
    
}
*/
function AddArray(){
    let Template = Bakas.map(Baka => `<li>${Baka}</li>`).join('\n');
    List.innerHTML = Template;
}

AddArray();

agregar.addEventListener('click', ()=> {
    Bakas.push(Text.value);
    Text.value = "";
    AddArray();
})

eliminar.addEventListener('click', ()=> {
    Bakas.pop(Text.value);
    AddArray();
})