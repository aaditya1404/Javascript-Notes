// const:-
/* const ko starting me value dena jaruri hota hai mtlb initalize karna jaruri hota hai
eg:- const a; ye error dega ki "missing initializer"
par const a = 5; ye error nahi dega
- const braces scoped hota hai */






// functions:-
/* ES6 me ek type ka function hota hai jiska 3 type hota hai 
- arrow function (ek function)
    uske teen types:-
    - basic fat arrow func
        ** ()fat =>arrow {}function **
        var func = ()=>{};

    - fat arrow func with one parameter
        var b = (parm) => {};
        b(12);
        ** agar hmlog ek prameter pass kar rahe hai to hmlog ko fat() lagane ka jaruri nahi hai
           aur agar ek se jyada parameters pass kar rahe hai to fat() lagana jaruri hai ** 
    - fat arrow function with  implicit return
        implicit return ka mtlb hota haijab hm khud se return nah lekha ho tabhi return ho jaye
        var g = () => {}; - ye hogaya hmlog ka basic fat arrow func
        - isko implicit banane ke liye function hata do mtlb
        - var g = () => 12; function ke jagah pe jo v lekha rahega wo return ho jayega automatic*/






// temlate literals ( backtick - ``):-
/*  console.log("hey 2+2"); - hey 2+2
    par
    console.log("hey ${2+2}") - hey 4 */






// deafult parameters :-
/*  jab value nah de function parameter ko to wo default value le sake 
    function abcd(prm) {
        console.log(prm);
    }
    abcd(12); - isse to output 12 ayega q ki 12 value hmne pass kiya function ko call karte waqt
    abcd(); - isse output udefined ayega q ki koi value pass nahi ki hmlog ne function ko call karte waqt
    **  agar hmlog chahte hai ki koi v undefined value na aye to hmlog jab value na pass kare to hmlog 
        prm=0 lekh denge jiske ke value 0 defined ho jaye
        function abcd(prm = 0) {
            console.log(prm);
        }
        abcd(12); - isse output undefined ke jagah 0 ayega 
        ** agar 0 ke alawa koi aur value dalenge to wo uska default baan jayega */






// rest and spread "..." :-
/*  jo ki alag alag work karta hai different context mein
    ** "..." yahi spread hai aur yahi rest hai, alag alag context me iske kaam v alag alag hote hai ** 
    var a = [1,2,3,5,4,6,1,7,1]; - ye ek array banaya
    var b =[...a]; hmne array a to spread karke copy kiya array b me
    **  spread ka mtlb hai elements ke sare values ko uss jagah bekhear dena 
        - spread use hota hai copy ya phir uss location por jahan pe ye use hua hai wahan pe kisi aur ki value
            `bekherne ke liye use hota hai

    **  rest use hota hai jab aapko bache hue value ek me dalne me use hota hai */
        





// destructuring :-
/* - arrays and objects se data bahar nikalna isse ko destructuring bolte hai
    var a = [1,2,3];
    var [b,c] = a; - isse ba ka value a[0] aur c ka value a[1] baan jata hai
    
    var obj = {name:"harsh", age:24};
    var{age} = obj; */






// try and catch :-
/*  console.log("hey");
    try{
        console.log(hey);
    }catch(err){
        console.log(err);
    }
    console.log("hey"); */