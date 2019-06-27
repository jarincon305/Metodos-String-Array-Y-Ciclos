//alert("ESTAMOS EMPEZANDO A USAR GIT")
//console.log("AHORA VAMOS A SUBIR NUESTROS ARCHIVOS A GIT HUB")
/* var persona= {
	nombre: "Axel",
	apellido:"Franco",
	cedula:"1234567895",
	 edad: 18
}
if(persona.edad >= 18)
{
alert(persona.nombre+" "+"es mayor edad y tiene "+ persona.edad )
}*/

// arreglo de 3 Personas  recorrer el arreglo y mirar dependiendo el genero de pelicula y la edad, recomendar 3 peliculas

/* var personas = [
{

	nombre: "felipe",
	apellido:"gomez",
	edad:19,
	cedula: "12345",
	peliFavorita:"Crespusculo",
	generoPeli:"romance juvenil",
	
},
{
	nombre: "camilo",
	apellido:"galan",
	edad:30,
	cedula: "1234555",
	peliFavorita:" duro de matar ",
	generoPeli:"accion"
},
{
	nombre: "juan",
	apellido: "rivera",
	edad:8,
	cedula: "12345678",
	peliFavorita:" buscando a nemo ",
	generoPeli:"infantil"
}

]


for (var i= 0 ; i < personas.length ; i++) 

{
	alert(" Hola "+
		personas[i].nombre+" "+
		personas[i].apellido+" de "+
		personas[i].edad+" anos ")

	if (personas[i].edad > 18 ) {

		switch(personas[i].generoPeli){

	case "accion":
	alert("sus 3 peliculas recomendadas son"  + " Duro de matar 2 " + "rambo" + "john wick")
	break;

	case "romance juvenil":
	alert("sus 3 peliculas recomendadas son"  + " bajo la misma estrella " + " Amanecer " + " Pueblito de papel ")
	break;

	case " aventura ":
alert("sus 3 peliculas recomendadas son"  + " la isla del tesoro " + " las aventuras del tintin " + " el viaje al centro de la tierra ")
	break;

	case " comedia ":
	alert("sus 3 peliculas recomendadas son"  + " deadpool " + " la mascara " + " zoolander ")
	break;

	case " drama ":
	alert("sus 3 peliculas recomendadas son"  + " el abogado del mal " + " 8 minutos antes de morir " + " la forma del H2o ")
	break;

	default:
	alert(" lo lamentamos, por el momento " + personas[i].generoPeli);

	}
		}else if(personas[i].edad >= 14){

		switch(personas[i].generoPeli){

	case "accion":
	alert("sus 3 peliculas recomendadas son "  + " como entrenar a tu dragon " + " las cronicas de narnia " + " hombres de negro ")
	break;

	case " romance juvenil ":
	alert("sus 3 peliculas recomendadas son "  + " bajo la misma estrella " + " amanecer " + " orgullo y prejuicio ")
	break;

	case " aventura ":
	alert("sus 3 peliculas recomendadas son "  + " el libro de la selva " + " las aventuras de tintin " + " el viaje al centro de la tierra ")
	break;

	case "comedia":
	alert("sus 3 peliculas recomendadas son "  + " spiderman lejos " + " toy story 4 " + " ace ventura ")
	break;

	case "drama":
	case "suspenso":
	alert("sus 3 peliculas recomendadas son "  + " el rey leon " + " el gran showman " + " siempre a tu lado ")
	break;
	default:
	alet(" lo lamentamos, por el momento " + personas[i].generoPeli);
	}
		}else{
				switch(personas[i].generoPeli){

	case "infantil":
	alert("sus 3 peliculas recomendadas son"  + " dumbo " + " coco " + " moana ")
	break;
		}

	}
} */

// todas esas propiedades sirven para los string

// length para las letras que tiene el caracter o string 


// charAt es para que usted decida que letra del string quiere que le devuelva o escribe todas y le devuelve toda a palabra
/* console.log(cadena.charAt(0))
console.log(cadena.charAt(1))
console.log(cadena.charAt(2))
console.log(cadena.charAt(3))
console.log(cadena.charAt(4))
console.log(cadena.charAt(5))
console.log(cadena.charAt(6))
console.log(cadena.charAt(7))
console.log(cadena.charAt(8))
console.log(cadena.charAt(91))*/

//para que el sting o palabra se convierta en mayuscula con las propiedades toLowerCase y toUpperCase
/* console.log(cadena.toLowerCase())
console.log(cadena.toUpperCase()) */

// estas propiedades es para unir el caracter o string
/* var cadenaNueva=cadena.concat(cadena2)
console.log(cadenaNueva) */

// esta propiedad es para decir en que letra termina el caracter o string y asi mismo le arrojara un valor boleano
/* console.log(cadena.endsWith("e")) */

// esta propiedad para poner dos o mas letras y mostrar si estan enseguida de las otras
/* var cadena = "Nomoleste"
console.log(cadena.includes("No")) */

// esta propiedad muestra en que posicion inicia el caracter de comillas
/* var cadena = "Nomoleste plox"
console.log(cadena.indexOf("plox")) */

// lo que hace esta propiedad es decirle desde donde quiere inicie y hasta donde termine el string, corta el caracter hasta donde se le asigne
/* var cadena = "Nomoleste plox"
console.log(cadena.slice(0,7)) */

// toma la cadena de caracter y buscas los espacios para darle como la posicion de un arreglo y significaria que se divide en 3 palabras y se puede usar , o espacio como quiera
/* var cadena = "Nomoleste plox 2019"
console.log(cadena.split(" ")) */
 
// extrae caracteres de un string indicandoles donde empieza y donde termina es parecido al slice
/* var cadena = "Nomoleste plox"
console.log(cadena.substring(0,7)) */

//Metodos Para Arreglo

/* var cadena = "Nomoleste plox"
document.getElementById('ejercicioArray').innerHTML=cadena */

// la propiedad tostring muestra lo que ahi en el array
/* var array1 = [	
"bateria" , "bajo" ,"guitarra" ,"guitarron" , "piano"
             ]
document.getElementById('ejercicioArray').innerHTML=array1.toString() */

// la propiedad join nos separa de los demas caracteres o string segun lo que tenga en las comillas
/* var array1 = [	
"bateria" , "bajo" ,"guitarra" ,"guitarron" , "piano"
             ]
document.getElementById('ejercicioArray').innerHTML=array1.join("O") */

// la propiedad pop agarra el ultimo valor del array y lo guarda y retorna la posicion que quito ya sea en console.log o document.write
/* var array1 = [	
"bateria" , "bajo" ,"guitarra" ,"guitarron" , "piano"
             ]
document.getElementById('ejercicioArray').innerHTML=array1.pop()
console.log(array1) */

// la propieda push agrega otro puesto en el arreglo 
/* var array1 = [	
"bateria" , "bajo" ,"guitarra" ,"guitarron" , "piano" 
             ]
document.getElementById('ejercicioArray').innerHTML=array1.push("tecla")
console.log(array1) */

// Ejercicio en clase

var txt="APRENDIZ"
document.getElementById('ejercicioClase').innerHTML=txt.toLowerCase()+" sena "


var nice=txt.split("")
nice=nice.join("+").toUpperCase()
document.getElementById('ejercicioClase2').innerHTML=nice

var nice2
nice2=txt.toUpperCase().split("")	
nice2=nice2.reverse()
nice2=nice2.join(" ")
document.getElementById('ejercicioClase3').innerHTML=nice2
