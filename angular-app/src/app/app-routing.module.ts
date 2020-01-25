import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdcutComponent } from './prodcut/prodcut.component';


const routes: Routes = [

  { path: 'product', component: ProdcutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
