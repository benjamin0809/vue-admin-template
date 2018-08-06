import request from '@/utils/request'

export function getAttachmentList() {
  return request({
    url: 'Attachment/list',
    method: 'post'
  })
}

export function getAttachmentById(id) {
  return request({
    url: 'Attachment/getAttachmentById',
    method: 'post',
    data: {
      id: id
    }
  })
}

export function getAttachmentByBizId(bizid) {
  return request({
    url: 'Attachment/getAttachmentByBizId',
    method: 'post',
    data: {
      bizId: bizid
    }
  })
}
