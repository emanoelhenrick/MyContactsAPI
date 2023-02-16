import * as db from "../../database";

class CategoriesRepository {
  async findAll() {
    const rows = await db.query("SELECT * FROM categories ORDER BY name");
    return rows;
  }

  async create({ name }: { name: string }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }

}

export default new CategoriesRepository();