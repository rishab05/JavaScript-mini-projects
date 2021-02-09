const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const orange = document.querySelector(".orange");
const blue = document.querySelector(".blue");

const center = document.querySelector(".center");
const audio = document.getElementById("audio1");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement)=>{return window.getComputedStyle(selectedElement).backgroundColor};

//var orangeElementColor = getBGColor(orange);

/*
orange.addEventListener('mouseenter',()=>{
    center.style.background = orangeElementColor;
});
*/

const magicColorChanger = (element,color)=>{
    return element.addEventListener('mouseenter',()=>{
        center.style.background = color;
        audio.play();
    });
};

magicColorChanger(red,getBGColor(red));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(blue,getBGColor(blue));