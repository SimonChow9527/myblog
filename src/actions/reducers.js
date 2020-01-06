import { combineReducers } from "redux";

function showNav(state = true, action) {
  switch (action.type) {
    case "CHANGE_NAV_VISIBILITY":
      return action.showNav;
    default:
      return state;
  }
}

function isMobile(state = false, action) {
  switch (action.type) {
    case "IS_MOBILE":
      return action.isMobile;
    default:
      return state;
  }
}

function setPrinter(state = true, action) {
  switch (action.type) {
    case "SHOW_PRINTER":
      return action.showPrinter;
    default:
      return state;
  }
}


function navReducer(state = {}, action) {
  return {
    showNav: showNav(state.showNav, action)
  };
}

function mobileReducer(state = {}, action) {
  return {
    isMobile: isMobile(state.isMobile, action)
  };
}

function printerReducer(state = {}, action) {
  return {
    showPrinter: setPrinter(state.showPrinter, action)
  };
}

const rootReducer = combineReducers({
  navReducer,
  mobileReducer,
  printerReducer
});
export default rootReducer;
