import s from "./Field.module.scss";

function Field({ register, name, options, error, ...rest }) {
  return (
    <div className={s.field}>
      <input className={s.input} {...register(name, options)} {...rest} />
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
}

export default Field;