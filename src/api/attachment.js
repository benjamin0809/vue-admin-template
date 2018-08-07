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

export function deleteAttachmentById(ids) {
  return request({
    url: 'Attachment/deleteAttachmentById',
    method: 'post',
    data: {
      ids: ids
    }
  })
}

export function deleteAttachmentByBizId(bizid) {
  return request({
    url: 'Attachment/deleteAttachmentByBizId',
    method: 'post',
    data: {
      bizId: bizid
    }
  })
}
