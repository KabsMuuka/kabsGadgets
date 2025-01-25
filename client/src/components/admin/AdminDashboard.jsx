import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../../redux/action/actionCreators";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [usersearch, setUsersearch] = useState("");

  const dispatch = useDispatch();
  const { isAuthenticated, accessToken } = useSelector((state) => state.auth);
  const posts = useSelector((state) => state.fetchPost);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div className="flex-1">
        <p className="text-center">admin Dashboard</p>
        <Link to={"/sell"} className="btn btn-ghost text-xl">
          Sell product
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
