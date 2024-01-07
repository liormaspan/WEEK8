// Exercise 1 : Scope

// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// funcOne()
// 1.2
// WE WILL RESEVE AN ERROER MASSAGE

// 2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }
// funcThree()
// funcTwo()
// funcThree()
// 2.2
// We will receive an error message because it is not possible to redefine the variable that is inside a function

// 3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive()

// function4 We will receive the hello message
// function5 We will get nothing because A is not defined

// 4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// 4.2
// We will still receive a test message because the declared is defined as a let

// 5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`${a}`);
// }
// alert(` ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// 5.2
// in the if block will be a=2
// outside of the if block will be a=5


// Exercise 2 : Ternary Operator

// let winBattle=()=>true;
// let experiencePoints;
// experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);


// Exercise 3 : Is It A String 

// const mystr=(x)=>(typeof x === "string" ? true:false);
// console.log(mystr("hello"));
// console.log(mystr(1515));


// Exercise 4 : Colors
// 1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let answer=colors.forEach((colors,index)=>{
//     // console.log(colors);
//     return console.log(`${index+1}#choice is ${colors}`);

// })

// 2
//  console.log(colors.includes ('Violet')?"YEAH":"NO..");

// Exercise 5 : Colors #2

// const colors = ["Blue", "Green", "Red", "Orange"];
// let ordinal = ["st","nd","rd","th"];

// let answer=colors.forEach((colors,index)=>{
//     // console.log(colors);
//     return console.log(`${index+1}${ordinal[index]} choice is ${colors}`);
// })

// Exercise 6 : Bank Details

// let bankAmount=5000;
// const vat=17;
// const details = [+200, -100, 146, 167, -2900]
// let total=0

// details.forEach((element,index)=>{
//     details[index]+=(element*vat)/100
//     total += details[index]
// })

// console.log(`your balance are ${bankAmount+total}`);