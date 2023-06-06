import { createRouter,  createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import SearchByName from '../views/SearchByName.vue'
import SearchByIngredients from '../views/SearchByIngredients.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDeatails from '../views/MealDeatails.vue'
const routes = [
    {
        path:'/',
        component: DefaultLayout,
        children:[
            {
                path:'/',
                name: 'home',
                component: HomePage
            },
            {
                path:'/letter/:letter?',
                name: 'byLetter',
                component: SearchByLetter
            },
            {
                path:'/name/:name?',
                name: 'ByName',
                component: SearchByName
            },
            {
                path:'/ingredient/:ingredient?',
                name: 'byIngredient',
                component: SearchByIngredients
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component:MealDeatails
            }
        ]
    },
    {
        path:'/auth',
        component: GuestLayout,
    }
    
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;