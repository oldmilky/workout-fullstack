import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AuthService from "../../services/auth.service";
import Field from "../Field/Field";
import Loader from "../Loader/Loader";
import s from "./Auth.module.scss";

function Auth() {
  const [type, setType] = useState("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const { mutate, isLoading } = useMutation(
    ["auth"],
    ({ email, password }) => AuthService.main(email, password, type),
    {
      onSuccess: () => {
        setIsAuth(true);
        reset();
      },
    }
  );

  const onSubmit = data => {
    mutate(data);
  };

  return (
    <section className={s.auth}>
      {isLoading && <Loader />}
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Field
          error={errors?.email?.message}
          name="email"
          register={register}
          type="text"
          options={{
            required: "Email is required",
          }}
          placeholder="Enter email"
        />
        <Field
          error={errors?.password?.message}
          name="password"
          register={register}
          type="password"
          options={{
            required: "Password is required",
          }}
          placeholder="Enter password"
        />
        <div className={s.buttons}>
          <button className={s.button} onClick={() => setType("login")}>
            Sign in
          </button>
          <button className={s.button} onClick={() => setType("register")}>
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
}

export default Auth;
