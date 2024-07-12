import { query } from "../../core/database/databaseHandler.js";

const schema = "public";
const table = "tasks";

async function getAllTaskByUserID(user_id) {
  const sql = (`select * from ${schema}.${table} 
    where user_id =$1;`);
  const res = query(sql, [user_id]);
  return res;
}

async function getTaskById (id){
  const sql = (`select * from ${schema}.${table} 
    where id =$1;`);
  const res = query(sql,[id]);
  return res;
}

async function createTask(user_id, title, description, duedate, is_completed){
  const sql = (`INSERT INTO 
    ${schema}.${table} 
    (user_id, title, description, duedate, is_completed) 
    VALUES ($1, $2, $3, $4, $5);`);
  const res = query(sql, [user_id, title, description, duedate, is_completed])
}

async function updateTaskById(user_id, title, description,duedate, is_completed) {
  const res = await getAllTaskByUserID(user_id);
  console.log(res);
  let sql;
  if (
    res[0].title != title ||
    res[0].description != description ||
    res[0].duedate != duedate ||
    res[0].is_completed != is_completed
  ) {
    sql = `update ${schema}.${table}
    set title = $2 , description =$3, duedate = $4, is_completed = $5 where user_id =$1 and title = ${res[0].title} ;`;
  }
  const result = await query(sql, [user_id, title, description, duedate, is_completed]);
  return result;
}

async function deleteTodoById(user_id,title) {
  const sql = `delete from ${schema}.${table}
     where user_id = $1 and title = $2;`;
    const res = await query(sql, [user_id, title]);
    return res
}

export {
  getAllTaskByUserID,
  getTaskById,
  createTask,
  // updateTaskById,
  deleteTodoById
}

