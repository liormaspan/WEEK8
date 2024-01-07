let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const dispalyGroceries=()=>{
    groceries.fruits.forEach((fruit)=>{
        console.log(fruit);
    })
}

dispalyGroceries()

const cloneGroceries=()=>{
    const user = client
    client="betty"
    console.log(`user: ${user}`);
    console.log(`client: ${client}`);
    const shopping=groceries
    groceries.totalPrice="$35"

}
cloneGroceries()