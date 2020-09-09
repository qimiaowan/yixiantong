
let state = {
  cityName: "全部",
  cityId:0
}
const stateDate = localStorage.getItem("stateDate");
if (stateDate) {
  state = JSON.parse(stateDate);
}

export default state;