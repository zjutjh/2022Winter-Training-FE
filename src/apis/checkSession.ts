import request from "./request";

const checkSessionAPI = () => {
  return request({
    withCredentials: true,
    method: "get",
    url: "/api/checkSession",
  })
}

export default checkSessionAPI;