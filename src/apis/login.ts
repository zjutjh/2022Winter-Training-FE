import request from "./request";

const loginAPI = (data?: any) => {
  return request({
    method: "post",
    url: "/api/login",
    data: data,
    withCredentials: true
  })
}

export default loginAPI;