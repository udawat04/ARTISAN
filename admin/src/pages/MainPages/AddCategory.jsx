import React, { useState } from 'react'
import "../form.css"
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    category:"",
    image:"",
    
  });
debugger
  const handleInput = (ev) => {
    const { name,value } = ev.target;
    setFormData({
      ...formData,
      [name]:value,
    });
    console.log(formData)
  };

   const handleImage = (ev) => {
     if (ev.target.files) {
       setFormData({
         ...formData,
         image: ev.target.files[0],
       });
     }
   };

  const onFormSubmit = (ev) => {
  ev.preventDefault();
  if (formData.category && formData.image) {
    const form = new FormData();
    form.append("category", formData.category);
    form.append("image", formData.image);

      fetch("http://localhost:4000/category", {
      method: "POST",
      body: form,
    })
            .then((res) => res.json())
            .then((data) => {
              console.log("Data received:", data);
              if (data) {
                console.log("object", data);
                navigate("/view/category");
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
                    <h3>Add Category</h3>
                </td>
              </tr>

            <tr>
              <td>Category</td>
      
              <td>
                <input type="text" name='category' onChange={handleInput} style={{width:"80%"}}/>
              </td>
              </tr>

              <tr>
                <td>Image</td>
                <td style={{paddingLeft:"10px"}}>
                  <input type="file" name='image' onChange={handleImage} />
                </td>
              </tr>

              <tr>
                <td colSpan={2}>
                  <button className='btn1' type='submit' value="Save" >Submit</button>
                </td>
              </tr>
           
            </table> 
        </form>
        </div> 
    </>
  )
}

export default AddCategory
