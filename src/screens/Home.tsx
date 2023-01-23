import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  //http://localhost:3000/?geo=123
  console.log(readSearchParams.has("geo")); //true
  console.log(readSearchParams.get("geo")); //123
  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "123",
    });
  }, 3000);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
