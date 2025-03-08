import { Knex } from "knex";
import path from "path";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "database.sqlite"), // Caminho para o banco
    },
    migrations: {
      directory: path.resolve(__dirname, "database", "migrations"), // Caminho correto para as migrations
      extension: "ts", // Usa TypeScript nas migrations
    },
    useNullAsDefault: true,
  },
};

export default config;
