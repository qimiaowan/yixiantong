import config from '../untils/config';
import { HTTP } from '../untils/http';

class ListModel extends HTTP {
  getListDatas(cityId, field) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_LIST_DETAIL,
        data: {
          cityId,
          field
        },
        success(res) {
          resolve({
            status: 1,
            res
          })
        },
        error(err) {
          resolve({
            status:0
          })
        }
      })
    })
  }
}


export { ListModel }