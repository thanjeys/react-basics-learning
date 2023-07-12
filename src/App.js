import FormHandling from "./FormHandling";
import Jquery from "./Jquery";
import JsonData from "./JsonData";
import logo from "./logo.svg";
import Product from "./Product";
import { useState } from "react";

let productData = [
  
];

const NewProduct = ({ addData }) => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    let product = {
      name: name,
      price: price,
    };

    addData(product);

    console.log("Submitted", product);

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Name"
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Price"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
};

function App() {
  let [stateProduct, setProduct] = useState(productData);

  const removeData = (index) => {
    let filtered = stateProduct.filter((value, i) => {
      return index !== i;
    });

    setProduct(filtered);
  };

  const addData = (data) => {
    setProduct([...stateProduct, data])
  };

  
  return (
    <div className="container">
      <div className="App">
        <h1 className="heading">Products</h1>
        <Product removeData={removeData} productData={stateProduct}/>
      </div>
      <div className="add-product">
        <h1>Add Product</h1>
        <NewProduct addData={addData} />
      </div>
      <FormHandling />
      <JsonData />
      <Jquery />
    </div>
  );
}

export default App;
