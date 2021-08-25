// Your code goes here:
function renderPerson(name,fecha,ojos,edad,sexo){
  let texto="";
  texto=name+" is a "+edad+" years old "+sexo+" ";
  texto=texto+"born in "+fecha+" with "+ojos+" eyes";
  return texto;

}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));