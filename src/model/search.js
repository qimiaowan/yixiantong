import config from '../untils/config';
import { HTTP } from '../untils/http';

class SearchModel extends HTTP {
  getSearchDatas(keyword,cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.SEARCH_ACTION,
        data: {
          keyword,cityId
        },
        success(res) {
          resolve({
            res,
            status:1
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

export { SearchModel }