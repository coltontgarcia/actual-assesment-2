///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 
    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'bagel', 
        price: 2.99
    }, 
    {
        name: 'pizza', 
        price: 5.99
    }, 
    {
        name: 'fries', 
        price: .99
    }
]

//CODE HERE

const totalAmount = cart.reduce((accumulator, curVal) => accumulator + curVal.price, 0)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 
    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 
    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => ((cartTotal * (tax + 1)) - couponValue).toFixed(2);


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 
    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.
    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.
    Explain what data types each property should be
    and why you chose those data types. 
    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Customer name
    Address
    Email
    Phone Number
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: 'colton garcia',
    address: '4473 Doris Way, Salt Lake City, California, 99999',
    email: 'coltongarcia@email.com',
    phoneNumber: '+123456789'
}