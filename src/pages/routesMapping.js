import HomePage from './HomePage';
import Category from './Category';


export default [
    {
        path: '/',
        component: HomePage
    },
    {
         path: 'category',
         component: Category
    },
    {
        // path: 'todos/:id',
        // component: SingleTodoItemPage
    },
    {
        // path: '*',
        // component: PageNotFound
    },
]
