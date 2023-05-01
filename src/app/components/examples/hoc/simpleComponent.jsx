import React from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  return (
    <>
      {isAuth
      ? <button className="secondary mt-2" onClick={onLogOut}>
      Выйти из системы
      </button>
      : <button className="secondary mt-2" onClick={onLogin}>
      Войти
      </button>
      }
      </>
   );
};
SimpleComponent.propTypes = {
  isAuth: PropTypes.bool,
  onLogOut: PropTypes.func,
  onLogin: PropTypes.func

};

export default SimpleComponent;
