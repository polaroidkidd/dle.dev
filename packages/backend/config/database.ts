function database({ env }) {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("STRAPI_DATABASE_PORT", 5432),
        database: env("STRAPI_POSTGRES_DB"),
        user: env("STRAPI_POSTGRES_USER"),
        password: env("STRAPI_POSTGRES_PASSWORD"),
        ssl: env.bool("STRAPI_DATABASE_SSL", false),
      },
    },
  };
}

export default database;
