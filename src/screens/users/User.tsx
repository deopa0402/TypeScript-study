import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from '../../db';

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with it {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="Followers">See Followers</Link>
      <Outlet context={{
        nameOfMyUser: users[Number(userId) - 1].name,
      }}
      />
      {/* outlet 을 이용한 하위 자식 구조 */}
    </div>
  );
}

export default User;
