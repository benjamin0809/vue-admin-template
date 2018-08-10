<template>
  <div style="padding:30px;">
    <el-alert title="menu 2" :closable="false" />

    <QR-code :url="url"></QR-code>
  </div>
</template>
<script>
import QRCode from '@/components/QRCode'
import md5 from 'js-md5'
export default {
  data() {
    return {
      url: 'https://www.baidu.com'
    }
  },
  components: { QRCode },
  methods: {
    qrcode() {
      console.log(md5('123'))
    }
  },
  mounted() {
    this.qrcode()
  }
}
</script>