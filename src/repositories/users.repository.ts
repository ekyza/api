import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    name: "John",
    email: "john@email.com",
    created_at: new Date(),
  },
  {
    id: uuidv4(),
    name: "Doe",
    email: "doe@email.com",
    created_at: new Date(),
  },
];

export default dummyData;

export function findAll() {
  return dummyData;
}

export function findById(id: string) {
  return dummyData.find((user) => user.id === id) || null;
}
