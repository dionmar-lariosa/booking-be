import "dotenv/config";
import pg from "pg";

const { Pool } = pg;

export const db = new Pool({
  connectionString: process.env.DATABASE_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: true
  }
});

db.on("error", (error) => {
  console.error("Unexpected database error:", error);
});
