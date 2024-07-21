"use server";

export async function searchUsers(name: string) {
  const DB = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Jim Doe" },
  ];

  return DB.filter((user) => user.name.includes(name));
}
