const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

// Розкоментуйте і запиши значення
const contactPath = path.resolve("./db/contacts.json");
console.log("contactPath:" + contactPath);

// TODO: задокументувати кожну функцію
async function listContacts() {
  const contactsRaw = await fs.readFile(contactPath);
  const contacts = JSON.parse(contactsRaw);
  console.table(contacts);
  return contacts;
}

async function getContactById(contactId) {
  const contactsRaw = await fs.readFile(contactPath);
  const contacts = JSON.parse(contactsRaw);
  console.table(contacts);
  contact = contacts.filter((cont) => cont.id == contactId);
  console.log(contact[0]);
  return contact[0];
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
