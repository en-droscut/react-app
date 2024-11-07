// import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "You should have at least 18 years" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };
  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: "",
  //   });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  //   console.log(register("name"));

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();

  //     // if (nameRef.current !== null) person.name = nameRef.current.value;
  //     // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

  //     console.log(person);
  //   };

  return (
    <>
      <h3>Complex form</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          {/* ref={nameRef} */}
          <input
            //   onChange={(event) =>
            //     setPerson({ ...person, name: event.target.value })
            //   }
            //   value={person.name}
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          {/* ref={ageRef} */}
          <input
            //   onChange={(event) =>
            //     setPerson({ ...person, age: parseInt(event.target.value) })
            //   }
            //   value={person.age}
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>

        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
