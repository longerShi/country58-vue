import App from '../App'

const home = r => require.ensure([], () => r(require('@/page/home/Home')), 'home')
const layout = r => require.ensure([], () => r(require('@/page/layout/Layout')), 'layout')
const profile = r => require.ensure([], () => r(require('@/page/profile/Profile')), 'profile')
const userInfo = r => require.ensure([], () => r(require('@/page/profile/userinfo/Userinfo')), 'userInfo')

const techList = r => require.ensure([], () => r(require('@/page/tech/TechList')), 'techList')
const techDetail = r => require.ensure([], () => r(require('@/page/tech/TechDetail')), 'techDetail')

const signUp = r => require.ensure([], () => r(require('@/page/user/Signup')), 'signUp')
const login =  r => require.ensure([], () => r(require('@/page/user/Login')), 'login')

export default[{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      component: layout,
      redirect: 'home',
      children: [{
        path: 'home',
        component: home
      }, {
        path: 'profile',
        component: profile,
        children: [{
          path: 'userInfo',
          component: userInfo
        }]
      }]
    }, {
      path: 'signup',
      component: signUp
    }, {
      path: 'login',
      component: login
    }, {
      path: 'techs',
      component: techList,
      children: [{
        path: ':id',
        component: techDetail
      }]
    }
  ]
}]
