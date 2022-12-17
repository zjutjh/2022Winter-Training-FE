import axios from "axios"

const request = (config: any) => {
  const service = axios.create({
    timeout: 10000,
  });
  return service(config);
}

export default request;
