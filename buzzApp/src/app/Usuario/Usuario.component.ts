import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Usuario } from "./Usuario";
import { UsuarioService } from "./Usuario.service";

@Component({
  
  templateUrl: "./Usuario.component.html",
  styleUrls: ["./Usuario.component.scss"]
})
export class UsuarioComponent implements OnInit {
  option: number = 1;
  usuarioList: Array<Usuario>;
  usuarioListCopy: Array<Usuario>;
  nameOrEmail: string = "";  
  userForm: FormGroup;
  constructor(private usuarioService: UsuarioService, private snackBar: MatSnackBar) {
    this.usuarioList = [];
    this.usuarioListCopy = [];    
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }

  ngOnInit(): void {
    this.usuarioService.getAllUsers().subscribe(data => this.usuarioList = data);
  }

  getUserByNameOrEmail() {
    this.usuarioListCopy = this.usuarioList;
    this.usuarioService.getUsersByNameOrCorreo(this.nameOrEmail).subscribe(data => this.usuarioList = data);
  }

  deleteFilter() {
    if (this.nameOrEmail == "") {
      this.usuarioList = this.usuarioListCopy;
    }
  }

  saveUser() {
    let newUser = new Usuario({ name: this.name?.value, email: this.email?.value });
    this.usuarioService.addUsuario(newUser).subscribe(data => this.usuarioList.push(data));
  }

  deleteUser(usuario: Usuario) {
    this.usuarioService.deleteUsuario(usuario.id).subscribe(data => {
      if (data.success) {
        this.usuarioList.forEach((user, index) => {
          if (user.id == usuario.id) {
            this.usuarioList.splice(index, 1);
          }
        });                
      }      
    });    
  }

  getUsers() {
    this.usuarioService.getAllUsers().subscribe(data => this.usuarioList = data);
    this.option = 1;
  }

}
