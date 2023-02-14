import { v4 } from "uuid";

interface NewContactProps {
  name: string
  email: string
  phone: string
  category_id: string
}

let contacts = [
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

  findByEmail(email: string) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email)
    ) );
  }

  delete(id: string) {
    return new Promise<void>((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({ name, email, phone, category_id }: NewContactProps) {
    return new Promise<void>((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id
      };

      contacts.push(newContact);
      resolve();
    });
  }

  
}

export default new ContactsRepository();