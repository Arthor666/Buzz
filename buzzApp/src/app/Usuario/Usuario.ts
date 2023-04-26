export class Usuario {
  id: number;
  name: string;
  email: string;

  constructor(usuario:any) {
    this.id = usuario.id;
    this.name = usuario.name;
    this.email = usuario.email ;
  }
}
