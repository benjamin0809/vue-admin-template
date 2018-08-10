<template>
  <div class="qrcode-container">
      <img :src="complieUrl" :style="styleObject" />
  </div>
</template>
<script>

import QRCode from 'qrcode'
export default {
  name: 'chiuCode',
  components: { QRCode },
  props: {
    url: {
      type: String,
      default: '1'
    },
    height: {
      type: Number,
      default: 128
    },
    width: {
      type: Number,
      default: 128
    }
  },
  data() {
    return {
      styleObject: {
        height: this.height + 'px',
        width: this.width + 'px'
      },
      complieUrl: this.url
    }
  },
  mounted() {
    this.qrcode()
  },
  methods: {
    qrcode() {
      QRCode.toDataURL(this.url)
        .then(url => {
          this.complieUrl = url
          console.log(url)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>