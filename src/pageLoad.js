import createRestaurantHome from "./restaurant";
import createTabs from "./tabs";

function initialLoad() {
  createTabs();
  createRestaurantHome();
}

export default initialLoad;
