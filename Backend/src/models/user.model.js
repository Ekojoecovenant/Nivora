const pool = require("../config/db");

const createUser = async (name, email, password) => {
  const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`;
  const values = [name, email, password];
  const newUser = await pool.query(query, values);
  return newUser?.rows[0];
};

const findUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const values = [email];
  const user = await pool.query(query, values);
  return user?.rows[0];
};

const getAllUsers = async () => {
  const users = await pool.query(`SELECT * FROM users`);
  return users;
};

module.exports = {
  createUser,
  findUserByEmail,
  getAllUsers,
};
