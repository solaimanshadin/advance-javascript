const isTrue = param => {
    if (param) {
        console.log("Condition is True");
    } else {
        console.log("Condition is False");
    }
}
let nothing;
// falsy values 
isTrue(null);
isTrue(0);
isTrue("");
console.log(nothing);
isTrue(nothing);
isTrue(NaN);
isTrue(false);
//Truthy Values
isTrue(" ");
isTrue("0");
isTrue({});
isTrue([]);