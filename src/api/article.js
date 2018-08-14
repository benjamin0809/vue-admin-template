import request from '@/utils/request'

const article = {}
article.createArticle = function(object) {
  return request({
    url: 'Article/createArticle',
    method: 'post',
    data: object
  })
}

article.saveArticle = function(object) {
  if (object.id) {
    return article.publish(object)
  } else {
    return article.createArticle(object)
  }
}

article.list = function(object) {
  return request({
    url: '/Article/list',
    method: 'get'
  })
}

article.publish = function(object) {
  return request({
    url: 'Article/publish',
    method: 'post',
    data: object
  })
}

article.deleteArticle = function(id) {
  return request({
    url: 'Article/delete',
    method: 'post',
    data: {
      id: id
    }
  })
}

article.getArticle = function(id) {
  return request({
    url: 'Article/getArticle/' + id,
    method: 'get'
  })
}

export default article
