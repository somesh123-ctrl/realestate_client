



import { FETCH_HOUSE_REQUEST, FETCH_HOUSE_SUCCESS ,FETCH_HOUSE_FAIL } from "./ActionType";






const { default: Axios } = require("axios");


const houseRentAction = () => async (dispatch) => {
  const dev_url = "https://realestate-server.onrender.com/api/house-rent";
  const production_url = "/api/house-rent";
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await Axios.get(dev_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export default houseRentAction;