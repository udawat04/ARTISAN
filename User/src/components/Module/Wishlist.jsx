import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useAuth } from "../../context/AuthContext";
import { getCurrentUser } from "../../utils/common";

export default function Wishlist() {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    async function getUser() {
      const data = await getCurrentUser();
      setCurrentUser(data);
      console.log("data", data);
    }
    getUser();
  }, []);

  useEffect(() => {
    if (currentUser && currentUser?._id) {
      // Fetch wishlist items from the backend
      fetch(`http://localhost:4000/getWishlist/${currentUser?._id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setWishlist(data))
        .catch((error) => console.log("Error fetching wishlist:", error));
    }
  }, [currentUser]);

  const handleRemoveFromWishlist = (productId) => {
    debugger;
    fetch("http://localhost:4000/removeFromWishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user._id,
        productId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Remove response:", data); // Add logging for the response
        if (data.status === 200) {
          setWishlist((prevItems) =>
            prevItems.filter((item) => item.productId._id !== productId)
          );
          console.log(
            "cart",
            wishlist.filter((item) => item.productId._id !== productId)
          );
        } else {
          console.log("Failed to remove item:", data);
        }
      })
      .catch((error) =>
        console.log("Error removing item from wishlist:", error)
      );
  };

  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-3 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCard
              className="card-registration card-registration-1"
              style={{ borderRadius: "15px", fontFamily: "DM Serif Display" }}
            >
              <MDBCol>
                <MDBTable responsive>
                  <MDBTableHead>
                    <tr>
                      <th scope="col" className="h5">
                        Wishlist
                      </th>
                      <th scope="col">Type</th>
                      <th scope="col">Price</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {wishlist.map((item) => (
                      <tr key={item._id}>
                        <th scope="row">
                          <div className="d-flex align-items-center">
                            <img
                              src={`http://localhost:4000${item.productId.prodimage}`}
                              fluid
                              className="rounded-3"
                              style={{ width: "120px" }}
                              alt=""
                            />
                            <div className="flex-column ms-4">
                              <p className="mb-2">
                                {item.productId?.category?.category}
                              </p>
                              <p className="mb-0">{item.productId.name}</p>
                            </div>
                          </div>
                        </th>
                        <td className="align-middle">
                          <p className="mb-0" style={{ fontWeight: "500" }}>
                            {item.productId.producttype}
                          </p>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{ fontWeight: "500" }}>
                            ${item.productId.price}
                          </p>
                        </td>
                        <td className="align-middle">
                          <a
                            href="#!"
                            className="text-muted"
                            onClick={() =>
                              handleRemoveFromWishlist(item.productId._id)
                            }
                            >
                         
                              <MDBIcon fas icon="trash" />
                         
                            </a>
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBCol>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
