<template>
  <header>
    <div class="header-container">
      <nuxt-link to="/" :class="{ 'active' : $route.name === 'index' }">{{ $t('headerNav.home') }}</nuxt-link> |
      <nuxt-link to="/users" :class="{ 'active' : $route.name.includes('users') }">{{ $t('headerNav.users') }}</nuxt-link>
    </div>
    <div class="language">
      <a href="javascript:;" :class="{ 'active' : locale === 'zh' }" @click="chooseLanguage('zh')">简体中文</a>
      <a href="javascript:;" :class="{ 'active' : locale === 'hk' }" @click="chooseLanguage('hk')">繁体中文</a>
      <a href="javascript:;" :class="{ 'active' : locale === 'en' }" @click="chooseLanguage('en')">English</a>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BaseFooter',
  computed: {
    ...mapState({
      locale: state => state.locales.locale
    })
  },
  methods: {
    chooseLanguage(language) {
      this.$store.commit('locales/SET_LANGUAGE', language)
      this.$i18n.locale = language
    }
  }
}
</script>

<style lang="stylus" scoped>
  header {
    height: 64px
    box-shadow: rgb(18, 11, 50) 2px 0px 10px 1px;
    clip-path: polygon(0px 0px, 100% 0px, 100% 2000%, 0px 2000%);
    transition: left 200ms cubic-bezier(0.4, 0, 0.6, 1) 0s, width 200ms ease 0s;
    border-bottom: 1px solid rgb(37, 30, 71);
    background: #150E31;
    display: flex;
    justify-content: space-between;

    .header-container {
      max-width: 990px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      position: relative;

      a {
        margin:0 15px;
        text-decoration: none;
        outline: 0;
        color: #aaacc8;
        font-size: 14px;

        &:hover, &.active {
          color: #efb860;
        }

        &:visited {
          outline: 0;
        }
      }
    }

    .language {
      display: flex;
      align-items: center;

      a{
        margin: 0 10px;
        color: #a8a8a8;

        &.active {
          color: #f5f5f5;
        }
      }
    }
  }
</style>
