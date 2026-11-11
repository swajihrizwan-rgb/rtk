import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../app/userSlice";

function RTK() {
  const dispatch = useDispatch();


  const users = useSelector((state) => state.users.users);

  return (
    <div>
      <h1>Users</h1>

      {users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}

      <button onClick={() => dispatch(addUser())}>
        Add User
      </button>

      <button onClick={() => dispatch(removeUser())}>
        Remove User
      </button>
    </div>
  );
}

export default RTK;