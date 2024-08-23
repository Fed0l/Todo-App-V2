import { query } from "../../core/database/databaseHandler.js";

const schema = "public";
const table = "users";

// async function getUserById (id){
//   const sql = (`select * from ${schema}.${table} 
//     where id= $1;`);
//   const res = await query(sql,[id]);
//   return res.rows;
// }

async function getUserByUsername (username){
    const sql = (`select * from ${schema}.${table} 
      where username= $1;`);
    const res = await query(sql,[username]);
    return res.rows[0];
  }

async function createUser(username,password,firstName,lastName,email, role){
  const sql = `INSERT INTO 
  ${schema}.${table} 
  (username,password,firstName,lastName,email, role) 
  VALUES ($1,$2,$3,$4,$5,$6);`;
    const res = await query(sql, [username,password,firstName,lastName,email, role]);
    return res;
  }
  

  // async function updateUserData(id, username) {
  //   const res = await getUserById(id);
  //   console.log(res);
  //   let sql;
  //   if (
  //     res[0].username != username
  //   ) {
  //     sql = `update ${schema}.${table}
  //     set username = $2 where id=$1;`;
  //   }
  //   const result = await query(sql, [id, username]);
  //   return result;
  // }  

export {
  // getUserById,
  getUserByUsername,
  createUser,
  // updateUserData
}