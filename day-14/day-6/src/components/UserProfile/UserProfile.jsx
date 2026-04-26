import { useUserStore } from "../../context/useUserStore";
import Email from "./Email";

function UserProfile() {
  const { user, login, logout } = useUserStore();
  //other way
  
  return (
    <div>
      {user ? (
        <div>
          <h2>Helloo {user.name}</h2>

          <Email/>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;