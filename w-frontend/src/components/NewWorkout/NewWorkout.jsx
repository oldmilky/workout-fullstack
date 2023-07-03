import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import ReactSelect from "react-select";
import WorkoutService from "../../services/workout/workout.service";
import Field from "../Field/Field";
import Loader from "../Loader/Loader";
import s from "./NewWorkout.module.scss";
import { useList } from "./useList";

function NewWorkout() {
  const { data, isLoading } = useList();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: "onChange",
  });

  const { mutate, error } = useMutation(
    ["create workout"],
    body => WorkoutService.create(body),
    {
      onSuccess: () => {
        reset({
          name: '',
          exerciseIds: []
        });
      },
    }
  );

  const onSubmit = data => {
    mutate({
      name: data.name,
      exerciseIds: data.exerciseIds.map(ex => ex.value),
    });
  };

  if (isLoading) return <Loader />;

  return (
    <section className={s.newWorkout}>
      {/* {isLoading && <Loader />} */}
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

        <Controller
          name="exerciseIds"
          control={control}
          render={({ field: { value, onChange } }) => (
            <ReactSelect
              classNamePrefix="select2-selection"
              placeholder="Exercises..."
              title="Exercises"
              options={data.map(exercise => ({
                value: exercise.id,
                label: exercise.name,
              }))}
              value={value}
              onChange={onChange}
              isMulti
            />
          )}
        />

        <NavLink className={s.link} to="/new-exercise">
          Add new exercise
        </NavLink>

        <div className={s.buttons}>
          <button className={s.button}>Create</button>
        </div>
      </form>
    </section>
  );
}

export default NewWorkout;
