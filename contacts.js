const fs = require("fs").promises;
const path = require("path");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890", 6);

const contactPath = path.resolve("./db/contacts.json");

async function getDb() {
  const dbRaw = await fs.readFile(contactPath);
  const db = JSON.parse(dbRaw);
  return db;
}

async function listContacts() {
  try {
    const contacts = await getDb();
    return contacts;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await getDb();
    contact = contacts.filter((cont) => cont.id == contactId);
    return contact[0];
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await getDb();
    const contact = contacts.find((cont) => cont.id === contactId);
    if (!contact) {
      return null;
    }
    const newContacts = contacts.filter((cont) => cont.id !== contactId);
    await fs.writeFile(contactPath, JSON.stringify(newContacts), "utf8");
    return contact;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function addContact(name, email, phone) {
  try {
    const id = nanoid();
    const newContact = { id, name, email, phone };
    const contacts = await getDb();
    const newContacts = [newContact, ...contacts];
    newContactsRaw = JSON.stringify(newContacts);
    await fs.writeFile(contactPath, newContactsRaw, "utf8");
    return newContact;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
