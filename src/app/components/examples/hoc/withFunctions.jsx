import React, { useState } from "react";
import CardWrapper from "../../common/Card";
const withFunctions = (Component) => (props) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token") === "token");
  const handleLogin = () => {
    localStorage.setItem("token", "token");
    setIsAuth(localStorage.getItem("token") === "token");
};
const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsAuth(localStorage.getItem("token") === "token");
};
  return (
<CardWrapper>
   <Component {...props}
             onLogin = {handleLogin}
              onLogOut ={handleLogOut}
              isAuth = {isAuth}
              />
</CardWrapper>

   );
};

export default withFunctions;
