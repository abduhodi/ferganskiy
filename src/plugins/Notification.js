import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const success = (text) => {
  toast.success(text);
};
const info = (text) => {
  toast.info(text);
};
const error = (text) => {
  toast.error(text);
};
const warning = (text) => {
  toast.warning(text);
};
export default {
  success,
  info,
  warning,
  error,
};
