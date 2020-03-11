<template>
  <div class="page-content-inner">
    <h3>{{ $t('global.register') }}</h3>
    <div>
      register page
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'Register',
  components: {
  },
  computed: {},
  watch: {},
  async asyncData({ app, store, params, req, res }) {
    return {}
  },
  mounted() {},
  methods: {},
  data() {
    return {}
  },
  head() {
    return {
      title: this.$t('global.register'),
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.$t('global.register') },
        { hid: 'description', name: 'description', content: this.$t('global.register') }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
