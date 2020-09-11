
let state = {
  cityName: "全部",
  cityId: 0,
  field:"view"
}
const stateDate = localStorage.getItem("stateDate");
if (stateDate) {
  state = JSON.parse(stateDate);
}

export default state;