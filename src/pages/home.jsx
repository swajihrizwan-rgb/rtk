import { Link } from "react-router-dom";



function Home() {
  return (
    <div>
      <h1>Welcome to My App</h1>

      <p>This is our Home Screen.</p>

      <Link to="/users">
        <button>View Users</button>
      </Link>

      <Link to="/rtk">
        <button>View RTK</button>
      </Link>
    </div>
  );
}

export default Home;