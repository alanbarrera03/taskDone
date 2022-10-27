require('colors');

const { saveDB, readDB } = require('./helpers/saveFile');

const { 
        inquirerMenu,
        pause,
        readInput,
        listTasksDelete,
        confirm,
        showListCheckList
       } = require('./helpers/inquiere');

const Tasks = require('./models/tasks');

// const { inquirerMenu } = require('./helpers/inquire');
// const { showMenu, pause } = require('./helpers/messages');

console.clear();

const main = async() => {

    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if( tasksDB ) {

        tasks.loadTasksFromArray( tasksDB );

    }

    do{
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                 // create option
                 const desc = await readInput( 'Description:' );
                //  console.log( desc );
                tasks.createTask( desc )
                break;
        
            case '2':
                tasks.completeList();
                // console.log( tasks.listArr );
                break;
            case '3':
                tasks.listPendingCompleted(true);
                break;
            case '4':
                tasks.listPendingCompleted(false);
                break;
            case '5':
                const ids = await showListCheckList( tasks.listArr );
                tasks.toggleCompleted( ids );
                break;

            case '6':
                const id = await listTasksDelete( tasks.listArr );
                
                if(id !== '0'){
                    const ok = await confirm( '¿Estás seguro?' );

                    if(ok){
                        tasks.deleteTask( id );
                        console.log('Tarea borrada');
                    }

                }
                break;
        }

        // console.log({ opt });

        // if( opt !== '0' )

        saveDB( tasks.listArr );

        await pause();

    } while( opt !== '0' );

}

main();