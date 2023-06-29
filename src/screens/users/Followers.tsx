import { useOutletContext } from "react-router-dom";

interface IfollowersContext {
  nameOfMyUser:string;
}

function Followers() {
  const {nameOfMyUser} = useOutletContext<IfollowersContext >();
  return <h1>Her are {nameOfMyUser}의 Followers</h1>;
}
export default Followers;
