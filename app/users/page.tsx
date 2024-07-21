"use client";

import React, { useEffect } from "react";
import { searchUsers } from "../actions/user-actions";

export default function UsersPage() {
  const [users, setUsers] = React.useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    searchUsers("John Doe").then((users) => setUsers(users));
  }, []);

  return (
    <main>
      <h1>Users</h1>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </main>
  );
}
