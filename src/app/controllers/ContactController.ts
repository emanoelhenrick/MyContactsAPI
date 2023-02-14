import { Request, Response } from "express";
import ContactsRepository from "../repositories/ContactsRepository";

interface NewContactProps {
  name: string
  email: string
  phone: string
  category_id: string
}

class ContactController {
  async index(req: Request, res: Response) {
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact){
      return res.status(404).json({ error: "User not found." });
    }

    res.json(contact);
  }

  async store(req: Request, res: Response) {
    const { name, email, phone, category_id } = req.body;

    const contactsExists = await ContactsRepository.findByEmail(email);

    if (contactsExists) {
      return res.status(400).json({ error: "This e-mail is already been taken."});
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id
    });

    res.json(contact);
  }

  // update() {
  // }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact){
      return res.status(404).json({ error: "User not found." });
    }

    await ContactsRepository.delete(id);
    res.sendStatus(204);
  }
}

export default new ContactController();