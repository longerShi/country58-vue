import App from '../App'

const home = r => require.ensure([], () => r(require('@/page/home/Home')), 'home')
const layout = r => require.ensure([], () => r(require('@/page/layout/Layout')), 'layout')
const profile = r => require.ensure([], () => r(require('@/page/profile/Profile')), 'profile')
const userInfo = r => require.ensure([], () => r(require('@/page/profile/userinfo/Userinfo')), 'userInfo')

const techDetail = r => require.ensure([], () => r(require('@/page/tech/TechDetail')), 'techDetail')

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
      path: 'tech/:id',
      component: techDetail
    }
  ]
}]
