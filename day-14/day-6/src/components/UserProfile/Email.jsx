import React from "react";
import { useUserStore } from "../../context/useUserStore";

function Email() {
  const user = useUserStore((state) => state.user);

  if (!user) return null;

  return <p>Email: {user.email}</p>;
}

export default Email;

// import React from 'react'
// import { useUserStore } from '../../context/useUserStore'

// function Email() {
//   const user = useUserStore()
//   return (
//     <div>
//       my email is {user.email}
//     </div>
//   )
// }

// export default Email