import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/User/login',
    method: 'post',
    data: {
      account: username,
      password: password
    }
  })
}

export function getInfo(userid) {
  return request({
    url: '/User/getUserById/' + userid,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
