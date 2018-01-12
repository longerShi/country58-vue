import App from '../App'

const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const tech = r => require.ensure([], () => r(require('@/page/tech/tech')), 'tech')
const layout = r => require.ensure([], () => r(require('@/page/layout/Layout')), 'layout')
const profile = r => require.ensure([], () => r(require('@/page/profile/Profile')), 'profile')
const userInfo = r => require.ensure([], () => r(require('@/page/profile/userinfo/Userinfo')), 'userInfo')

export default[{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: 'layout/home'
    }, {
      path: 'layout',
      component: layout,
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
    }
  ]
}]
