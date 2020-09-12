import config from '../untils/config';
import { HTTP } from '../untils/http';

class DetailModel extends HTTP {
  getDetail(field,id) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_DETAIL,
        data: {
          field,
          id
        },
        success(res) {
          resolve({
            data:res.data,
            status:1
          });
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

export { DetailModel }