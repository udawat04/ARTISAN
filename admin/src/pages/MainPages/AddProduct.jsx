import React, { useState } from "react";

import "../form.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
  category:"",
  subcategory:"",
  name:"",
  price:"",
  producttype:"",
  prodimage:"",
  });

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/category", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("first", data);
        setCategory(data);
      })

      .catch((error) => console.log(error));
  }, []);

  const [subcategory, setsubCategory] = useState([]);
 

  const fetchSubcategories = (id) => {
    fetch(`http://localhost:4000/sub/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Subcategories:", data);
        setsubCategory(data);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
     if (name === "category") {
       fetchSubcategories(value);
     }
  };

   const handleImage = (ev) => {
     if (ev.target.files) {
       setFormData({
         ...formData,
         prodimage: ev.target.files[0],
       });
     }
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product data:", formData);
     if (formData.category && formData.subcategory && formData.name && formData.price && formData.producttype && formData.prodimage)  {
       console.log(formData);
       const form = new FormData();
       form.append("category",formData.category);
       form.append("subcategory",formData.subcategory);
       form.append("name",formData.name);
       form.append("price",formData.price);
       form.append("producttype",formData.producttype);
       form.append("prodimage",formData.prodimage);

        fetch("http://localhost:4000/products/add", {
          method: "POST",
          body: form,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Data received:", data);
            if (data) {
              console.log("object", data);
              navigate("/view/products");
            } else {
              alert(data.error || "unkown");
            }
          })
          .catch((error) => {
            console.log(error);
          });
     }
  };

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <table className="text-center">
            <tr>
              <td colSpan={2}>
                <h3>Add SubCategory</h3>
              </td>
            </tr>

            <tr>
              <td>Category</td>

              <td>
                {/* <input type="text" name="category" onChange={handleInput} /> */}
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  {category.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td>sub Category</td>

              <td>
                {/* <input type="text" name="category" onChange={handleInput} /> */}
                <select
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                >
                  <option value="">Select subCategory</option>
                  {subcategory.map((subcategory) => (
                    <option key={subcategory._id} value={subcategory._id}>
                      {subcategory.subcategory}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td>name</td>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td>price</td>
              <td>
                <input type="text" name="price" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td>product type</td>
              <td>
                <input type="text" name="producttype" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td>Image</td>
              <td style={{ paddingLeft: "10px" }}>
                <input type="file" name="image" onChange={handleImage} />
              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <button className="btn1" type="submit" value="Save">
                  Submit
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
