import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  {path:'userlist',component:UserlistComponent},
  {path:'create',component:CreateComponent},
  {path:'',redirectTo:'userlist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
