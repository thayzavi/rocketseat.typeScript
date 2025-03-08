import {knex as setupKnex} from 'knex'

export const config ={
    client: 'sqlite',
    connection:{
        filename:'.tmp/app.bd'
    },
    useNullAsDefault: true,


}

export const Knex = setupKnex(config)