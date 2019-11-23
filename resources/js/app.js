require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import Vuetify from 'vuetify';
import Routes from './routes/master';
// Common files
import App from './views/App';

Vue.use(Vuetify);


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    vuetify: new Vuetify(),
    router: Routes,
    el: '#app',
    render: h=> h(App),
});
export default app;
