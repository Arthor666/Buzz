import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './Contacto/Contacto.component';
import { UsuarioComponent} from './Usuario/Usuario.component';

const routes: Routes = [
  { path: "", component: UsuarioComponent },
  { path: "contacto", component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
