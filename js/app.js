//Ejemplo de callBack en una función asincrona
//Listado de paises
const paises=['Francia','España','Portugal','Australia','Inglaterra','Irlanda'];


//Se agrega un nuevo pais despues de 2 segundos
function nuevoPais(pais,callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    }, 2000);
}

//Los paises se muestran despues de 1 segundo
function mostrarPaises(){
    setTimeout(function(){
        let html ='';
        paises.forEach(pais=>{
            html+=`<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML=html;
    },1000);
}

//Agregar nuevo pais
nuevoPais('Alemania',mostrarPaises);

//Mostrar los paises
mostrarPaises();

console.log(paises);
