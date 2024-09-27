let number = 50; 
 
if (number > 0) {
    console.log("number is positive");
    
} else if (number < 0) {
    console.log("number is negative");
} else if (number == 0) {
    console.log("number is zero");
    
}

var day = '8';

switch (day) {
    case '1':
        console.log('Sunday');
        break;
    case '2':
        console.log('Monday');
        break;
    case '3':
        console.log('Tuesday');
        break;
    case '4':
        console.log('Wednesday');
        break;
    case '5':
        console.log('Thursday');
        break;
    case '6':
        console.log('Friday');
        break;
    case '7':
        console.log('Saturday');
        break;  
    default:
            console.log('Unknown day');      
}


for (let i = 1; i <= 5; i++) {
    console.log(i);
}    

let m = 1;

while (m <= 5) {
    console.log(m);
    m++; 
}

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

for (var n = 1; n <= 10; n++) {
    if (n === 3) {
        break;
        
    }
    console.log(n);
}
console.log("Loop exited at i = 3");


for (var o = 1; o <= 10; o++) {
    if (o === 3) {
        continue;
        
    }
    console.log(o);
}


let globalVar = "I'm insane!";

function scopeExample() {
    let localVar = "I'm Crazy!";
    
    console.log(globalVar);
    console.log(localVar); 
}

scopeExample();