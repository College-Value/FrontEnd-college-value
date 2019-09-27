import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log("tokennnnnnnn: ", token);

  return axios.create({
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth