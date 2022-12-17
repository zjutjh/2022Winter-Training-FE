import { createPinia } from "pinia";
import useUserStore from "./useUserStore";

const pinia = createPinia()

const count = {
  value: 1
};

export default pinia;
export { useUserStore, count };