// Given a valid IP address, you are asked to return a defanged version of that IP address. A defanged IP address replaces every period "." with "[.]".
// Example1:Input: address = "1.1.1.1" Output: "1[.]1[.]1[.]1"
// Example2:Input: address = "255.100.50.0" output: "255[.]100[.]50[.]0"


const address = "255.100.50.0";

const defangedAddress = (address) =>{
    // return address.replace(/\./g, "[.]");
    return address.split('.').join('[.]');
}

console.log(defangedAddress(address)); 

