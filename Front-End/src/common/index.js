const backendDomin = "http://localhost:8080";

const SummaryApi = {
  signUp: {
    url: `${backendDomin}/api/singup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomin}/api/singin`,
    method: "post",
  },
  userDetail: {
    url: `${backendDomin}/api/user-detail`,
    method: "get",
  },
};

export default SummaryApi;
