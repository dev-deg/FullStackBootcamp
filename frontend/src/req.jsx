import Axios from "axios";

const ReqLogin = async (email, password) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": true,
  };
  const response = await Axios.post(
    "http://localhost:3001/login?email=" + email + "&password=" + password,
    {},
    { headers }
  );
  console.log(response.data.result);
};

export default ReqLogin;
