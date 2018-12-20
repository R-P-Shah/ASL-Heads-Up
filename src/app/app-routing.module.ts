import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'game/:difficulty/:timer/',
    loadChildren: './game/game.module#GamePageModule'
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'sets', loadChildren: './sets/sets.module#SetsPageModule' },
  { path: 'set/:title', loadChildren: './set/set.module#SetPageModule' },
  { path: 'class:/title', loadChildren: './class/class.module#ClassPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
