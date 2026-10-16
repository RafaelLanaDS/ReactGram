const mongoose = require("mongoose");

const dbUser = process.env.DB_USER || process.env.BD_USER;
const dbPassword = process.env.DB_PASS;
const dbHost = process.env.DB_HOST || "cluster0.8taofxr.mongodb.net";

const connectionString =
  process.env.MONGODB_URI ||
  (dbUser && dbPassword
    ? `mongodb+srv://${encodeURIComponent(dbUser)}:${encodeURIComponent(dbPassword)}@${dbHost}/?retryWrites=true&w=majority`
    : null);

const conn = async () => {
  if (!connectionString) {
    throw new Error(
      "Set MONGODB_URI or configure DB_USER/BD_USER and DB_PASS in backend/.env."
    );
  }

  const dbConn = await mongoose.connect(connectionString);
  console.log("Conectou ao banco de dados!");
  return dbConn;
};

module.exports = conn;
