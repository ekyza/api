import { DUMMY_DATA } from "../constants/dummy-data.js";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function findAll() {
  await delay(500);

  return DUMMY_DATA;
}

export async function findById(id: number) {
  await delay(300);
  return DUMMY_DATA.find((user) => user.id === id) || null;
}
