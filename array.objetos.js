//Escriba una función que tome la identificación de un álbum (como 2548),
//Un elemento de propiedad (como "artista" o "pistas") y un valor (como "Adicto al amor")

//Si prop no es "pistas" y el valor no está vacío ("")
//Actualice o establezca el valor de la propiedad del álbum de ese registro.
//Su función siempre debe devolver el objeto de colección completo.

//Hay varias reglas para manejar datos incompletos:

//Si prop es "tracks" pero el álbum no tiene una propiedad de "tracks", cree un array vacío antes de agregar el nuevo valor a la propiedad correspondiente del álbum.

//Si prop es "tracks" y el valor no está vacío (""), inserte el valor en el final del array del tracks existente del álbum.

//Si el valor está vacío (""), elimine la propiedad prop proporcionada del álbum.

//Sugerencias
//Use la notación de corchetes al acceder a las propiedades del objeto con variables.
//Push() es un elemento que puedes usar.

var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));



function updateRecords(id, prop, value) {
  if(value === ""){
    delete collection[id][prop]
    return collection
  }

  if(prop === "tracks"){
   if(collection[id].hasOwnProperty("tracks")){
     collection[id].tracks.push(value)
   }
   else{
     collection[id].tracks = [value]
   }
  }
  else{
    collection[id][prop] = value
  }

  return collection;
  }

 updateRecords(5439, "artist", "ABBA");

