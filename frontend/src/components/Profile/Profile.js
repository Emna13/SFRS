import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getProfile } from "../../js/actions";


const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const user = useSelector(state => state.userReducer.user)
  console.log(user)
  const loading = useSelector(state => state.userReducer.loading)
  const isAuth = useSelector(state => state.userReducer.isAuth)
 
  
  return <div>
      {loading ? 'please wait': !isAuth ? 
        <Redirect to="/login" />:
    <div>{user.name}</div>}
      </div>;
};

export default Profile;
