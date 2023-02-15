import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "root",
  password: "root",
  database: "mycontacts",
});

client.connect();

export async function Query(query: string) {
  const { rows } = await client.query(query);
  return rows;
}

Query("SELECT * FROM contacts").then(console.log);


