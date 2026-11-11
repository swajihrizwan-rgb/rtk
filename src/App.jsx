// import { useState } from "react";

// import {
//   useAddUserMutation,
//   useGetUsersQuery,
// } from "./features/userApi";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   // GET API
//   const {
//     data: users,
//     isLoading: usersLoading,
//     error: usersError,
//   } = useGetUsersQuery();

//   // POST API
//   const [addUser, { isLoading, isSuccess, error }] =
//     useAddUserMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await addUser({
//         name: name,
//         email: email,
//       }).unwrap();

//       console.log("User Added:", result);

//       setName("");
//       setEmail("");
//     } catch (err) {
//       console.log("Error:", err);
//     }
//   };

//   return (
//     <div>
//       <h1>Add New User</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <br /><br />

//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <br /><br />

//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Adding..." : "Add User"}
//         </button>
//       </form>

//       {isSuccess && <p>User added successfully!</p>}
//       {error && <p>Something went wrong!</p>}

//       <hr />

//       <h1>Users List </h1>

//       {usersLoading && <p>Loading users...</p>}

//       {usersError && <p>Error fetching users!</p>}

//       {users?.map((user) => (
//         <div key={user.id}>
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


import AppRoutes from "./routes/AppRoutes";
import { lazy, Suspense } from "react";
const RemoteProducts = lazy(
  () => import("products_remote/Products")
);
function App() {
  return (
    <div>
      <AppRoutes />
      <Suspense fallback={<p>Loading Products...</p>}>
        <RemoteProducts />
      </Suspense>
    </div>
  );
}

export default App;