import { ref } from "vue";

const useScreenSize = () => {
  const width = ref(0);
  const height = ref(0);
 
  addEventListener("resize", (e: Event) => {
    height.value = window.innerHeight;
    width.value = window.innerWidth;
  })

  return {
    width, height
  } 
}

export default useScreenSize;
