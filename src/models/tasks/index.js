import { query } from "../../core/database/databaseHandler.js";

const schema = "public";
const table = "tasks";

async function getAllTaskByUserID(user_id) {
  const sql = `select * from ${schema}.${table} 
    where userid =$1;`;
  const res = await query(sql, [user_id]);
  return res.rows;
}

async function getTaskById(id) {
  const sql = `select * from ${schema}.${table} 
    where id =$1;`;
  const res = await query(sql, [id]);
  return res.rows;
}

async function createTask(user_id, title, description, duedate, is_completed) {
  const sql = `INSERT INTO 
    ${schema}.${table} 
    (userid, title, description, duedate, is_completed) 
    VALUES ($1, $2, $3, $4, $5);`;
  const res = await query(sql, [
    user_id,
    title,
    description,
    duedate,
    is_completed,
  ]);
}

async function updateTaskById(id, title, description, duedate, is_completed) {
  const res = await getTaskById(id);
  console.log("res", res);
  let sql;
  if (
    res[0].title != title ||
    res[0].description != description ||
    res[0].duedate != duedate ||
    res[0].is_completed != is_completed
  ) {
    sql = `update ${schema}.${table}
    set title = $2 , description =$3, duedate = $4, is_completed = $5 where id =$1;`;
  }
  const result = await query(sql, [
    id,
    title,
    description,
    duedate,
    is_completed,
  ]);
  return result;
}

async function deleteTaskById(id) {
  const sql = `delete from ${schema}.${table}
     where id = $1;`;
  const res = await query(sql, [id]);
  return res;
}

export { getAllTaskByUserID, createTask, updateTaskById, deleteTaskById };
