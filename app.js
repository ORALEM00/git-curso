/* Informacion obtenida de: https://www.youtube.com/watch?v=HiXLkL42tMU&list=LL&index=30&t=59s */

console.log("Hola mundo")

//git init: inicias el proyecto

//git add <file>: añades un archivo a tu espacio de trabajo, tambien se aplica cuando
//                 modificas un archivo y debes agregarlo de nuevo

// git add . : asi agregas todos los archivos de golpe

//git status: te devuelve el estatus actual del proyecto

//git commit: The git commit command captures a snapshot of the project's currently 
//            staged changes. Lo ponemos siempre que queramos guardar los ultimos cambios
//            hechos al proyecto. 
//            Presionas i para escribir hasta arriba y dar un mensaje, luego le das esc
//            y finalmente sale con :wq

/* git commit -m "Mensaje: De esta manera evitamos entrar al editor de codigo, pero
                        es lo mismo que el de arriba" */

//git checkout -- <file> : eliminas los ultimos cambios de ese archivo

//git diff <file> : te muestra los ultimos cambios hechos al archivo

//git log: te da el historial de cambios

//En el archivo de texto .gitignore ponemos los nombres de todos los archivos que no queremos
//agregar a nuestro entorno de trabajo

// git branch: Nos dice el proyecto en que estamos trabajando y sus versiones alternativas

// git branch <nombre>: Aqui creamos una version alternativa, para entrar a esta version
//                 alternativa pones git checkout <nombre>. Aqui puedes modificar lo que
//                 quieras sin alterar a la version original