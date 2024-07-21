"use client";

import React, { useEffect } from "react";

export default function UsersPage() {
  const [users, setUsers] = React.useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    fetch(`/api/users?name=${"John Doe"}`).then((res) =>
      res.json().then((data) => setUsers(data.users))
    );
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
