const Task = require('./task');

class Tasks {

    _listado = {
        'abc': 123
    };

    get listArr(){

        const list = [];
        Object.keys(this._listado).forEach( key => {

            const task = this._listado[key];
            list.push(task);

        })

        return list;

    }

    constructor(){
        this._listado = {};
    }

    deleteTask( id = '' ){

        if( this._listado[id] ){

            delete this._listado[id];

        }

    }

    loadTasksFromArray( tasks = [] ){

        tasks.forEach( task => {

            this._listado[task.id] = task;

        })


    }

    createTask( desc = '' ){

        const task = new Task(desc);
        this._listado[task.id] = task;

    }

    completeList(){

        this.listArr.forEach( ( task, id ) => {

            const idx = `${ id + 1 }`.green;
            // console.log(idx);
            const { desc, completedIn } = task;
            const state = ( completedIn )
                            ? 'Completed'.green
                            : 'Pending'.red;

            // console.log( `${idx} ${desc} ${state}` )


        });

    }

    listPendingCompleted( completed = true ) {

        let counter = 0;
        this.listArr.forEach( task => {

            const { desc, completedIn } = task;
            const state = ( completedIn )
                            ? 'Completed'.green
                            : 'Pending'.red;

            if ( completed ) {

                if( completedIn ){
                    
                counter += 1;
                console.log( `${ ( counter + '.' ).green } ${ desc } :: ${ completedIn.green }` )

                }
                
            } else {

                if( !completedIn ){
                    
                    counter += 1;
                    console.log( `${ ( counter + '.' ).green } ${desc} :: ${state}` )
                    
                    }

            }

        })

    }

    toggleCompleted( id = [] ) {

        ids.forEach( id => {

            const task = this._listado[id];
            if( !task.completedIn ){

                task.completedIn = new Date().toISOString() 

            }

        });


        this.listArr.forEach( task => {

            if( !ids.includes( task.id ) ){

                this._listado[task.id].completedIn = null;

            }

        });

    }


}

module.exports = Tasks;