function validateName(name) {
    const regex = /^[A-Za-z ]{2,}$/;

    if(name.trim() === ""){
        return "Name field cannot be empty";
    } 
    else if(!regex.test(name)){
        return "Invalid name! Use only alphabets and spaces (min 2 characters)";
    } 
    else {
        return "Valid name";
    }
}


console.log(validateName("Prem Kumar"));   
console.log(validateName("P"));            
console.log(validateName("Prem123"));      
console.log(validateName(" "));            
