import request from "./request";

const checkoutSession = () => {
  return request({
    withCredentials: false,
    method: "get",
    url: "/api/checkSession",
  })
}

export default checkoutSession;