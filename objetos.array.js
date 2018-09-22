//Tenemos una variedad de objetos que representan diferentes personas en nuestras listas de contactos.
//Una función lookUpProfile que toma el nombre y una propiedad (prop) como argumentos que se precribió para usted.
//La función debe verificar si el nombre es el primer nombre de un contacto real y la propiedad dada (prop) es una propiedad de ese contacto.
//Si ambos son verdaderos, devuelve el "valor" de esa propiedad.
//Si el nombre no corresponde a ningún contacto, devuelva "No such contact"
//Si prop no corresponde a ninguna propiedad válida de un contacto que coincida con el nombre, devuelva "No such such property".

var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
      if(contacts[i].hasOwnProperty(prop)){
         return contacts[i][prop]
      }
      return "No such property"

    }
  }
  return "No such contact"
}

lookUpProfile("Akira", "likes");