const {Contenedor} = require('./Contenedor.js');
const {Productos} = require('./Productos.js');

// Test 
const contenedor = new Contenedor(`productos`);                    // Ingreso nombre del arhcivo
      
const producto1 = new Productos(`manzana`, 200, `manzana.com`);   // Creando producto 1
const producto2 = new Productos(`pera`, 300, `pera.com`);         // Creando producto 2


(async () => {

    // Testing metodo saveNew
    await contenedor.saveNew(producto1);                          // Agregando producto 1
    await contenedor.saveNew(producto2);                          // Agregando producto 2
    
    // Testing metodo getById 
    await contenedor.getById(2).then((res) => console.log(`Resultado del metodo test getById 2 `, res));  
    await contenedor.getById(4).then((res) => console.log(`Resultado del metodo test getById 4, el metodo deberia devolver null: `, res));  

    // Testing metodo getAll
    await contenedor.getAll().then((res) => console.log(`Resultado del metodo test getAll`, res));  

    // Testing metodo deleteById
    await contenedor.deleteById(2);
    await contenedor.getById(2).then((res) => console.log(`Resultado del metodo test getById 2 (El producto no deberia existir)`, res));


    // Testing metodo deleteAll
    await contenedor.deleteAll();  
    await contenedor.getAll().then((res) => console.log(`Resultado del metodo test getAll (Los productos no deberian existir)`, res));
})();




//contenedor.deleteAll();                       //Borrar todos los datos del archivo

//contenedor.getAll();                          //Mostrar todos los datos del archivo, en caso de que el archivo no exista... Lo crea

//contenedor.saveNew(productoNuevo);            //Agregar un objeto al archivo

//contenedor.getById(2);                        //Filtrar un producto por su ID

//contenedor.deleteById(1);                     //Borrar un producto por su ID