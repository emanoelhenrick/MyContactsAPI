import { Request, Response } from "express";
import ContactsRepository from "../repositories/ContactsRepository";

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

  store() {

  }

  update() {

  }

  delete() {

  }
}

export default new ContactController();