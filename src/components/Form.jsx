import useFromInput from "../hooks/useFormInput";

function Form() {
  const firstNameProps = useFromInput("Mary");
  const lastNameProps = useFromInput("Poppins");

  return (
    <>
      <label>
        First name:
        <input
          {...firstNameProps}
          // value={firstNameProps.value}
          // onChange={firstNameProps.onChange}
        />
      </label>
      <br />
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}

export default Form;
