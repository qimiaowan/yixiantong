
const mutations = {
  selectorCity(state,cityInfo) {
    state.cityName = cityInfo.cityName;
    state.cityId = cityInfo.cityId;

    localStorage.setItem("stateDate",JSON.stringify(state))
  }
}

export default mutations;