import React, { useEffect, useState } from "react";
import "../form.css";
import { useNavigate } from "react-router-dom";

const AddSubcategory = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   category:"",
    subcategory:"",
    subimage:"",
    
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

  
  
  const handleInput = (ev) => {
    debugger;
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

   const handleImage = (ev) => {
     if (ev.target.files) {
       setFormData({
         ...formData,
         subimage: ev.target.files[0],
       });
     }
   };

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    console.log(formData);
    if (formData.category&&formData.subcategory && formData.subimage) {
      console.log(formData);
      const form = new FormData();
      form.append("category", formData.category);
      form.append("subcategory", formData.subcategory);
      form.append("subimage", formData.subimage);

     
       fetch("http://localhost:4000/sub/add", {
         method: "POST",
         body: form,
       })
         .then((res) => res.json())
         .then((data) => {
           console.log("Data received:", data);
           if (data) {
             console.log("object", data);
             navigate("/view/subcategory");
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
        <form action="" onSubmit={onFormSubmit}>
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
                  onChange={handleInput}
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
              <td>subcategory</td>
              <td>
                <input type="text" name="subcategory" onChange={handleInput} />
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

export default AddSubcategory;
