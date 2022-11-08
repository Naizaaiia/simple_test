import {
    alerts
  } from "./action";
  
  const initialState = {
    alert: false
  };
  
  const main = (state = initialState, { type, payload }) => {
    switch (type) {
      case alerts.OPEN_ALERT:
        return {...state, alert: true }
      default:
        return { ...state };
    }
  };
  
  export default main;