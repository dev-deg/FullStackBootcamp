import Axios from "axios";

const ReqLogin = async (email, password) => {
  const response = await Axios.post("localhost:3001/login", {
    email: email,
    password: password,
  });
  console.log(response);
};

export default ReqLogin;
