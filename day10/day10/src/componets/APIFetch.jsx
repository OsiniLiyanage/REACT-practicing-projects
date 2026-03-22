import React, { useEffect, useState } from "react";

function APIFetch() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users?.map((u, i) => (
        <li key={i}>
          {u.id} - {u.name} - {u.email}
        </li>
      ))}
    </div>
  );
}

export default APIFetch;