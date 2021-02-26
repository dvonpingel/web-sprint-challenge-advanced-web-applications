import { axiosWithAuth } from "../helpers/axiosWithAuth";

export const fetchColors = () => {
  axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
