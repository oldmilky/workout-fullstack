import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import ExerciseService from "../../services/exercise/exercise.service";
import Field from "../Field/Field";
import Loader from "../Loader/Loader";
import s from "./NewExercise.module.scss";
import { getIconPath } from "./icon-path.util";

const data = ["chest", "shoulders", "biceps", "legs", "hit", "back"];

function NewExercise() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: "onChange",
  });

  const { mutate, isLoading, error } = useMutation(
    ["create exercise"],
    body => ExerciseService.create(body),
    {
      onSuccess: () => {
        reset();
      },
    }
  );

  const onSubmit = data => {
    mutate(data);
  };

  return (
    <section className={s.newExercise}>
      {isLoading && <Loader />}
      {error && <div className={s.error}>{error.message}</div>}
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Field
          error={errors?.name?.message}
          name="name"
          register={register}
          type="text"
          options={{
            required: "Name is required",
          }}
          placeholder="Enter name"
        />
        <Field
          error={errors?.times?.message}
          name="times"
          register={register}
          options={{
            valueAsNumber: true,
            validate: value => value > 0 || "Times must be number",
            required: "Times is required",
          }}
          placeholder="Enter times"
        />
        <div className={s.buttons}>
          <button className={s.button}>Create</button>
        </div>
        <Controller
          name="iconPath"
          control={control}
          render={({ field: { value, onChange } }) => (
            <div className={s.images}>
              {data.map(name => (
                <img
                  className={
                    value === getIconPath(name) ? s.imageActive : s.image
                  }
                  key={name}
                  src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(name)}`}
                  alt={name}
                  onClick={() => onChange(getIconPath(name))}
                />
              ))}
            </div>
          )}
        />
      </form>
    </section>
  );
}

export default NewExercise;
