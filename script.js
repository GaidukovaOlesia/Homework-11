
// debugger;
hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
rainbow = hero.concat(native, destination);
console.log(rainbow);
newRainbow = rainbow.reverse();
console.log(newRainbow);
newRainbow.unshift("Richard");
newRainbow.pop();
newRainbow.splice(2,1, "Gave","Battle","Vain" );
console.log(newRainbow);

for(i = 0; i < newRainbow.length; i++)  {
    if(i === 1) {
        newRainbow[i] = "Of"
    } else if(i === 2) {
        newRainbow[i] = "York"
    } else if(i === 3) {
        newRainbow[i] = "Gave"
    } else if(i === 4) {
        newRainbow[i] = "Battle"
    } else if(i === 5) {
        newRainbow[i] = "In"
    } else if(i === 6) {
        newRainbow[i] = "Vain"
    }
}
console.log(newRainbow);

colors = ["red", "orange", "yellow", "green", "skyblue", "blue", "violet"];
circleArr = [];
for(i = 0; i <colors.length; i++) {
    circleArr.push(`<div> <div class="circle" style="background-color: ${colors[i]}"></div> <p class="text">${newRainbow[i]}</p></div>`)
}

document.write(`
    <div class="wrapp">
        ${circleArr.join("")}
    </div>  
        `);




