import * as fs from "node:fs/promises";

import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, "utf-8");
    return JSON.parse(data);
};

if (process.argv[1].endsWith('getAllContacts.js')) {
    const contacts = await getAllContacts();
    console.log(contacts);
}
