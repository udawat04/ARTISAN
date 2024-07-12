import { API_BASE_URL } from "../config";

export const getCurrentUser = async () => {
  const result = await fetch(`${API_BASE_URL}user/profile`, {
    method: "GET",
    headers: {
      authorization: `Beader ${localStorage.getItem("accessToken")}`,
    },
  });
  const res = await result.json();
  let user = {};
  if (res.status === 200) {
    user = res.user;
  }
  return user;
};
