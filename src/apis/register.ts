import request from "./request";

const registerAPI = (data: any) => {
  return request({
    method: "get",
    url: "/api/register",
    data: data
  })
}

export default registerAPI;