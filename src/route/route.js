import App from '../App'

const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const tech = r => require.ensure([], () => r(require('@/page/tech/tech')), 'tech')
const layout = r => require.ensure([], () => r(require('@/page/layout/Layout')), 'layout')

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
        path: 'tech',
        component: tech
      }]
    }
  ]
}]
