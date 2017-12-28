import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
const tech = r => require.ensure([], () => r(require('../page/tech/tech.vue')), 'tech')

export default[{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      component: home
    },
    {
      path: 'tech',
      component: tech
    }
  ]
}]
