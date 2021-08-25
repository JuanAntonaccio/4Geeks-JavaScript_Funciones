
const rapid = (myString) => {
    let consonants = [];
    let texto=myString.toLowerCase();
    for(let position in texto){
        if(['a','e','i','o','u'].includes(texto[position]) == false)
            consonants.push(texto[position].toUpperCase())
    }
    return consonants.join('');
}

// From this line up Do not change code below
let str = "John";
console.log(rapid(str));