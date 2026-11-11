import { useState } from "react";

import { useAddUserMutation, useGetUsersQuery , useUpdateUserMutation, usePatchUserMutation } from "../features/userApi";

function Users() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // GET API
    const {
      data: users,
      isLoading: usersLoading,
      error: usersError,
    } = useGetUsersQuery();

    // POST API
    const [addUser, { isLoading, isSuccess, error }] =
      useAddUserMutation();

    // PUT API
    const [updateUser, { isLoading: isUpdating }] =
      useUpdateUserMutation();

    // PATCH API
    const [patchUser, { isLoading: isPatching }] =
      usePatchUserMutation();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const result = await addUser({
          name: name,
          email: email,
        }).unwrap();
  
        console.log("User Added:", result);
  
        setName("");
        setEmail("");
      } catch (err) {
        console.log("Error:", err);
      }
    };
// PUT API - Complete user update
const handlePut = async () => {
    try {
      const result = await updateUser({
        id: 1,
        name: "Ahmed",
        username: "Ahmed123",
        email: "ahmed@gmail.com",
      }).unwrap();
  
      console.log("PUT Response:", result);
    } catch (err) {
      console.log("PUT Error:", err);
    }
  };
  
  // PATCH API - Only email update
  const handlePatch = async () => {
    try {
      const result = await patchUser({
        id: 1,
        email: "newemail@gmail.com",
      }).unwrap();
  
      console.log("PATCH Response:", result);
    } catch (err) {
      console.log("PATCH Error:", err);
    }
  };
    
  
    return (
      <div>
        <h1>Add New User</h1>
  
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          <br /><br />
  
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <br /><br />
  
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add User"}
          </button>
        </form>
  
        {isSuccess && <p>User added successfully!</p>}
        {error && <p>Something went wrong!</p>}
  
        <hr />
  
        <h1>Users List </h1>

        <h2>Update User</h2>

<button onClick={handlePut} disabled={isUpdating}>
  {isUpdating ? "Updating..." : "PUT User"}
</button>

<button onClick={handlePatch} disabled={isPatching}>
  {isPatching ? "Patching..." : "PATCH User"}
</button>

<hr />  
  
        {usersLoading && <p>Loading users...</p>}
  
        {usersError && <p>Error fetching users!</p>}
  
        {users?.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }

  export default Users;