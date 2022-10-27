require('colors');

const showMenu = () => {

    return new Promise( resolve => {

        console.clear();
        console.log('========================='.green);
        console.log('    Select one option'.green);
        console.log('=========================\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tareas`);
        console.log(`${'6.'.green} Borrar tareas`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readLine = require('readline').createInterface({
    
            input:  process.stdin,
            output: process.stdout,
    
        });
    
        readLine.question('Select one option: ',(opt) => {
    
            readLine.close();
            resolve( opt );
    
        });

    })

}

    const pause = () => {

        return new Promise( resolve => {

            const readLine = require('readline').createInterface({

                input:  process.stdin,
                output: process.stdout,
    
            });
    
            readLine.question(`\nPress ${'ENTER'.green} to continue\n`,(opt) => {
                
                readLine.close();
                resolve();
    
            });

        })

}

module.exports = {
    showMenu,
    pause
}