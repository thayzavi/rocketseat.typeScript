import knex, { Knex } from 'knex'

export async function up(Knex: knex) : Promise<void>{
    await knex.schema.creaTable('')
}

export async function down(Knex: knex): Promise<void>{}