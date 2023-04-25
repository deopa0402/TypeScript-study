import { Link } from "react-router-dom";
import { users } from "../db";

function Home() {
  return (
    <div>
      <ul>
        {/* ul 컴포넌트 안에 deo, nlco 를 불러옴 */}
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
