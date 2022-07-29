import { toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

function success(msg) {
  toast.success(msg);
}

function info(msg) {
  toast.info(msg);
}

function warning(msg) {
  toast.warning(msg);
}

function error(error) {
  toast.error(error);
}

const showToast = {
  success,
  info,
  warning,
  error,
};

export default showToast;
