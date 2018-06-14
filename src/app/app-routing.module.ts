import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PostsComponent} from './posts/posts.component';
const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'userdetails/:id',
    component: UserdetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
