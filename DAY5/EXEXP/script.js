// Exercise 1 : Find The Sum

// const myArr=a=>b=>a+b
// const result=myArr(3)
// console.log(result(5));

// Exercise 2 : Kg And Grams

// (function (gr){
//     console.log(`the kg is ${gr}`);
// })(1000)

// let kg=function(kg){
//     console.log(`the kg is ${kg}`);
// }(1)

// Function declaration is hoisted, allowing the function to be called before its declaration, while function expression is not hoisted and must be defined before it's called.


// const myKg=a=>b=>a*b
// const res=myKg(1)
// console.log(res(1000));

// Exercise 3 : Fortune Teller

// (function (number_of_children, partners_name, geographic_location,job_title){
//     let p=document.getElementById("par")
//     p.textContent=`You will be a ${job_title} in ${geographic_location}, and married to ${partners_name} with ${number_of_children} kids.`
// })(4,"Hagit","Israel","FullStack Developer")

// Exercise 4 : Welcome

// (function(username){
//     let div=document.createElement("div")
//     div.innerText=username
//     let nav=document.querySelector("nav")
//     let Image=document.createElement("image")
//     nav.append(div,Image)
//     Image.src="https://media.gq-magazine.co.uk/photos/62ac38f82da9f5f89888eba9/16:9/w_2240,c_limit/jon-snow-series-1200.jpeg"
// })("jonh")


// Exercise 5 : Juice Bar

function makeJuice(size){
    const ingredients=[]
    
    function addIngredients(first, second, third){
        ingredients.push(first,second,third)

    }
    addIngredients("banan","apple","orange")
    addIngredients("milk","water","ice")
    function displayJuice(){
        let Ingredients=document.createElement("p")
        let body=document.querySelector("body")
        body.append(Ingredients)
        let str=ingredients.join(", ")
        console.log(str);
        Ingredients.textContent=`The client wants a ${size} juice, containing ${str}`
    }
    displayJuice()
}
makeJuice("small")




