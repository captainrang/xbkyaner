//省份接口
export const province = {
  get:{
    method: 'get',
    url: 'xzqh/provinces',
  }
}

// 调剂接口
export const adjust = {
  get:{
    method: 'get',
    url: '/schInfo/tjxx',
  }
}

// 登录接口
export const login = {
  oauth: {
    method: 'post',
    url:'/oauth/token',
  }
}