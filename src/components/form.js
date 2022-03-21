import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const handleChange = (e) => {
    let newProp = form;
    newProp[e.target.name] = e.target.value;
    setForm({ ...newProp });
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      let enptyValues = Object.values(form).some(obj => obj == "");


  }

  return (
    <div>
      <h2>Form Submit</h2>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <label>Nome: </label>
        <input type="text" name="name" onChange={(e) => handleChange(e)} />
        <br />
        <label>Email</label>
        <input type="text" name="email" onChange={(e) => handleChange(e)} />
        <br />
        <label>Gênero</label>
        <select name="gender" onChange={(e) => handleChange(e)}>
          <option>-</option>
          <option>M</option>
          <option>F</option>
        </select>
        <br />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
};

export default Form;
