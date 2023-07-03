import Cookies from "js-cookie";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import s from "./Burger.module.scss";

function Burger() {
  const { setIsAuth } = useAuth();
  const { isShow, ref, setIsShow } = useOnClickOutside(false);

  const navigate = useNavigate();

  const logoutHandler = () => {
    Cookies.remove("workout");
    setIsAuth(false);
    setIsShow(false);

    navigate("/auth");
  };

  return (
    <div className={s.burger} ref={ref}>
      <button className={s.burgerButton} onClick={() => setIsShow(!isShow)}>
        {isShow ? (
          <>
            <IoClose color="white" size={"27px"} />
          </>
        ) : (
          <RxHamburgerMenu
            className={s.burgerLogo}
            color="white"
            size={"27px"}
          />
        )}
      </button>
      {isShow ? (
        <div className={s.list}>
          <NavLink className={s.link} to="/workouts">
            <button className={s.listButton}>Workouts</button>
          </NavLink>
          <NavLink className={s.link} to="/new-exercise">
            <button className={s.listButton}>Create New</button>
          </NavLink>
          <NavLink className={s.link} to="/profile">
            <button className={s.listButton}>Profile</button>
          </NavLink>
          <button className={s.listButton} onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Burger;
