import VueRouter from "vue-router";
import Vue from "vue";
import StartScreen from '@/components/StartScreen/StartScreen.vue';
import QuestionPage from '@/components/Question/QuestionPage.vue';
import Result from '@/components/Result/Result.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: StartScreen
    },
    {
        path: '/question/:id',
        component: QuestionPage
    },
    {
        path: '/result',
        component: Result
    }

]

export default new VueRouter({routes})