import { v4 } from "uuid";

const contacts = [
  {
    id: v4(),
    name: "Emanoel",
    email: "manel@gmail.com",
    phone: "28971263",
    category_id: v4()
  },
  {
    id: v4(),
    name: "Lucas",
    email: "mlulul@gmail.com",
    phone: "28971asa263",
    category_id: v4()
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    } );
  }

  findById(id: string) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id)
    ) );
  }

  
}

export default new ContactsRepository();