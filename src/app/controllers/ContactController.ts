import { Request, Response } from "express";
import ContactsRepository from "../repositories/ContactsRepository";

class ContactController {
  async index(req: Request, res: Response) {
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  show() {

  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

export default new ContactController();