const fs = require("fs").promises;
const path = require("path");
// const argv = require("yargs").argv;

const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890", 6);

// Розкоментуйте і запиши значення
const contactPath = path.resolve("./db/contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  try {
    const contactsRaw = await fs.readFile(contactPath);
    const contacts = JSON.parse(contactsRaw);
    //   console.table(contacts);
    return contacts;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getContactById(contactId) {
  try {
    const contactsRaw = await fs.readFile(contactPath);
    const contacts = JSON.parse(contactsRaw);
    // console.table(contacts);
    contact = contacts.filter((cont) => cont.id == contactId);
    // console.log(contact[0]);
    return contact[0];
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function removeContact(contactId) {
  const contactsRaw = await fs.readFile(contactPath);
  const contacts = JSON.parse(contactsRaw);
  newContacts = contacts.filter((cont) => cont.id !== contactId);
  console.table(newContacts);
  newContactsRaw = JSON.stringify(newContacts);
  await fs.writeFile(contactPath, newContactsRaw, "utf8");
  return newContacts;
}

async function addContact(name, email, phone) {
  const id = nanoid();
  const newContact = { id, name, email, phone };
  const contactsRaw = await fs.readFile(contactPath);
  const contacts = JSON.parse(contactsRaw);
  const newContacts = [newContact, ...contacts];
  console.table(newContacts);
  newContactsRaw = JSON.stringify(newContacts);
  await fs.writeFile(contactPath, newContactsRaw, "utf8");
  return newContacts;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
