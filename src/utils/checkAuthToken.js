import jwt from "jsonwebtoken";

const token = localStorage.getItem("token");

let checkToken = () => {};

if (token) {
  checkToken = async () => {
    const response = await jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
    return response;
  };
}

export default checkToken;
