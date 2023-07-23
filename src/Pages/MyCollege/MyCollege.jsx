import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [myCollege, setMyCollege] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/admission?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCollege(data));
  }, [user]);
  return <div>{myCollege.length}</div>;
};

export default MyCollege;
