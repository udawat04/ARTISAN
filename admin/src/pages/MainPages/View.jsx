import React, { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../../components";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetchOrders();
    fetch("http://localhost:4000/sub", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("first", data);
        setOrdersData(data);
        setIsLoading(false);
      })

      .catch((error) => console.log(error));
  }, []);

  //   const fetchOrders = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4002/category");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setOrdersData(data);
  //       setIsLoading(false);
  //     } catch (e) {
  //       setError("Could not fetch data: " + e.message);
  //       setIsLoading(false);
  //     }
  //   };

  const deleteOrder = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/sub/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Remove the deleted item from the UI
      setOrdersData(ordersData.filter((order) => order._id !== id));
    } catch (e) {
      console.error("Error deleting order:", e);
      // Optionally, show an error message to the user
    }
  };

  const ordersGrid = [
    {
      field: "image",
      headerText: "Image",
      template: ({ subimage }) => (
        <img
          src={subimage}
          alt="category"
          style={{ width: 100, height: 100, marginLeft: 40 }}
          className="rounded"
        />
      ),
      textAlign: "Center",
      width: "120",
    },
    {
      field: "category.category",
      headerText: "Category",
      template: ({ category }) => (
        <div
          style={{
            // background: StatusBg,
            borderRadius: "8px",
            padding: "5px 10px",
            color: "black",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          {category?.category}
        </div>
      ),
      width: "150",
      textAlign: "Center",
    },
    {
      field: "subcategory",
      headerText: "Subcategory",
      template: ({ subcategory }) => (
        <div
          style={{
            // background: StatusBg,
            borderRadius: "8px",
            padding: "5px 10px",
            color: "black",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          {subcategory}
        </div>
      ),
      width: "150",
      textAlign: "Center",
    },

    // {
    //   field: "Status",
    //   headerText: "Status",
    //   template: ({ Status, StatusBg }) => (
    //     <div
    //       style={{
    //         background: StatusBg,
    //         borderRadius: "8px",
    //         padding: "5px 10px",
    //         color: "white",
    //       }}
    //     >
    //       {Status}
    //     </div>
    //   ),
    //   textAlign: "Center",
    //   width: "120",
    // },

    {
      headerText: "Delete",
      template: ({ _id }) => (
        <button
          onClick={() => deleteOrder(_id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
      ),
      textAlign: "Center",
      width: "120",
    },
  ];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        pageSettings={{ pageSize: 6 }}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
