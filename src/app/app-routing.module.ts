import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { BlogComponent } from './components/blog/blog.component';
import { DesignComponent } from './components/design/design.component';
import { WebDevComponent } from './components/web-dev/web-dev.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'blog',
    component:HomeComponent
  },
  {
    path:'design',
    component:HomeComponent
  },
  {
    path:'webdevelopment',
    component:HomeComponent
  },
  {
    path:'about',
    component:HomeComponent
  },
  {
    path:'blog/:id',
    component: ContentComponent
  },
  {
    path:'learn/:id',
    component: ContentComponent
  },
  {
    path:'learn/:id',
    component: ContentComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
