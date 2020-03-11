// import { fetchMemberInfo } from '~/api/system'

export default {
  async fetch({ app, store, params }) {
  },
  // 系统初始化时(context上下文对象在第二个参数中)
  async nuxtServerInit({ commit, state }, { app, req }) {
    // 在系统初始化时，可以在这里请求某些接口，写入vuex，然后可以在客户端获取vuex数据
    // await fetchMemberInfo().then((res) => {
    //   console.log(res)
    // })
  }
}
