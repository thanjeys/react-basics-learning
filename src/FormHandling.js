import { useState } from "react";

function FormHandling() {
  const [values, setValues] = useState({
    name: "",
    price: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    // console.log(e.target)
    setValues({...values, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsBag = {};
    if (values.name == "") 
        errorsBag.name = "Name Field is empty"
  
    if (values.price == "") 
        errorsBag.price = "Price Field is empty"
    
    setErrors(errorsBag);
    
    
  }

  return (
    <>
      <h1>Handling Form with Object and Validation</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            name="name"
            onChange={handleInput}
            value={values.name}
          />
          {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Price"
            name="price"
            onChange={handleInput}
            value={values.price}
          />
          {errors.price && <p style={{color: 'red'}}>{errors.price}</p>}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default FormHandling;
