import database from "../../../../infra/database.js";

export default async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as SUM;");
  console.log(result.rows[0].sum);

  return res.json("Olá!");
}
