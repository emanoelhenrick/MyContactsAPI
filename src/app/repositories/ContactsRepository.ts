import { v4 } from "uuid";
import * as db from "../../database";


interface NewContactProps {
  name: string
  email: string
  phone: string
  category_id: string
}

interface ContactProps {
  id: string
  name: string
  email: string
  phone: string
  category_id: string
}

class ContactsRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id: string) {
    const [row] = await db.query("SELECT * FROM contacts WHERE id = $1", [id]);
    return row;
  }

  async findByEmail(email: string) {
    const [row] = await db.query("SELECT * FROM contacts WHERE email = $1", [email]);
    return row;
  }

  async delete(id: string) {
    const deleteOp = await db.query("DELETE FROM contacts WHERE id = $1", [id]);
    return deleteOp;
  }

  async create({ name, email, phone, category_id }: NewContactProps) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id: string, { name, email, phone, category_id }: NewContactProps) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);
    return row;
  }

  
}

export default new ContactsRepository();