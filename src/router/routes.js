
export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home')
    },
    {
        path: '/hotteok',
        name: 'Hotteok',
        component: () => import('../components/Articles/HotteokArticle')
    }
]
