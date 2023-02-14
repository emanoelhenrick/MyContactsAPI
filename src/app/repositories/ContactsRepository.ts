import { uuid } from "uuidv4";

const contacts = [
  {
    id: uuid(),
    name: "Emanoel",
    email: "manel@gmail.com",
    phone: "28971263",
    category_id: uuid()
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    } );
  }

  
}

export default new ContactsRepository();