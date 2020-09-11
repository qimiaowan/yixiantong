import axios from 'axios';
import tools from './tools'
class HTTP {
  axiosPost(option) {
    axios({
      url: option.url,
      method: 'post',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      data:tools.xlhString(option.data)
    }).then(res => {
      option.success(res);
    }).catch(res => {
      option.error(res);
    })
  }
}

export {
  HTTP
};