import config from '../untils/config';
import { HTTP } from '../untils/http';

class IndexModel extends HTTP {
  getHomeData(cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: config.API.GET_HOME_DATAS,
        data: {
          cityId
        },
        success(res) {
          console.log(res);

          resolve({
            status: 1,
            data:res.data
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

export {IndexModel}
