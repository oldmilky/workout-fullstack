import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useCheckToken } from "../../hooks/useCheckToken";
import Burger from "./Burger/Burger";
import s from "./Header.module.scss";

function Header({ heading = "", backLink = '/', image }) {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useCheckToken();

  const { isAuth } = useAuth();

  return (
    <header
      className={s.header}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={s.container}>
        {isAuth && (
          <>
            {pathname === "/" && isAuth ? (
              <FaUser
                onClick={() => {
                  navigate('/profile');
                }}
                className={s.user}
                size={"27px"}
                cursor={"pointer"}
              />
            ) : (
              <button
                className={s.back}
                onClick={() => {
                  navigate(isAuth ? backLink : "/auth");
                }}
              >
                <IoMdArrowBack size={"27px"} color="fff" cursor={"pointer"} />
              </button>
            )}
            <Burger />
          </>
        )}
      </div>
      {heading && (
        <div className={s.heading}>
          <h2 className={s.headingTitle}>{heading}</h2>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.string,
  backLink: PropTypes.string,
  icon: PropTypes.string,
};

export default Header;
