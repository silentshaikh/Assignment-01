//Question #01
let fNum = +prompt("Enter a Number");
let lNum = +prompt("Enter a Number");
if(fNum>lNum){
    console.log(`The Largest Number is ${fNum}`);
}else if(lNum>fNum){
    console.log(`The Largest Number is ${lNum}`);
}else{
    alert("Please Enter only Number");
};

//Question #02
let plus = +prompt("Enter a Number");
if(plus>0){
    console.log(`The Sign is Positive ${plus}`);
}else if(plus<0){
    console.log(`The Sign is Negative ${plus}`);
}else if(plus===0){
    alert("Please Enter Only Positive or Negative Number");
}
else{
    alert("Enter Only Number");
};

//Question #03
let prom1 = +prompt("Enter a Number");
let prom2 = +prompt("Enter a Number");
let prom3 = +prompt("Enter a Number");
let prom4 = +prompt("Enter a Number");
let prom5 = +prompt("Enter a Number");
if(prom1>prom2 && prom1>prom3 && prom1>prom4 && prom1>prom5){
    console.log(`The Largest Number is ${prom1}`);
}else if(prom2>prom1 && prom2>prom3 && prom2>prom4 && prom2>prom5){
    console.log(`The Largest Number is ${prom2}`);
}else if(prom3>prom1 && prom3>prom2 && prom3>prom4 && prom3>prom5){
    console.log(`The Largest Number is ${prom3}`);
}else if(prom4>prom1 && prom4>prom2 && prom4>prom3 && prom4>prom5){
    console.log(`The Largest Number is ${prom4}`);
}else if(prom5>prom1 && prom5>prom2 && prom5>prom3 && prom5>prom4){
    console.log(`The Largest Number is ${prom5}`);
}else{
    alert("Enter only Number");
};

//Question #04
for(let i=0; i<=15; i++){
   
    if(i%2 === 0){
        console.log(`${i} is Even`);
    }else{
        console.log(`${i} is Odd`);
    };
};

//Question #05
let result = +prompt("Enter Your Marks");
if(result>=0 && result<=100){
    if(result>=90){
        console.log("Your Grade is A");
    }else if(result>=80){
        console.log("Your Grade is B");
    }else if(result>=70){
        console.log("Your Grade is C");
    }
    else if(result>=60){
        console.log("Your Grade is D");
    }
    else if(result>=50 || result<50){
        console.log("Your Grade is F");
    }
}else{
    alert("Enter a Valid Number");
};

//Question #06
for(let i=1; i<=100; i++){
    
    if(i%3===0 && i%5===0){
        console.log(`${i} is Fizzbuzz`);
    }else if(i%3==0){
        console.log(`${i} is Fizz`);
    }else if(i%5===0){
        console.log(`${i} is Buzz`);
    }else{
        console.log(i);
    };
};


//Question #07
let star;
for(let i=1; i<=5; i++){
    star =  "*";
    for(let j=1; j<=i; j++){
        document.write(star);
    };
    document.write("<br>");
};

