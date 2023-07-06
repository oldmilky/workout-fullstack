import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mainBackground from "../assets/images/mainBackground.png";
import Header from "../components/Header/Header";
import { useAuth } from "../hooks/useAuth";
import s from "./Pages.module.scss";

function NotFound() {

  const {isAuth} = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate("/auth");
    }
  })

  return (
    <div className={s.notFoundPage}>
      <Header heading="Not Found" image={mainBackground} />
      <div>not found</div>
    </div>
  );
}

export default NotFound;
