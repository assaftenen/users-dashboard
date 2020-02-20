// src/app/components/posts/posts.routes.ts
import { Route } from '@angular/router';
import { UsersListComponent } from './users-list.component'
export const UserListRoutes: Route[] = [
    {
        path: '',
        component: UsersListComponent
    }
]