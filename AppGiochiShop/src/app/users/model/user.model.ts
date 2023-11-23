export class User {
  id: number;
  nome: string;
  ruolo?: "admin" | "base" | "guest";

  constructor(id: number, nome: string, ruolo?: "admin" | "base" | "guest"){
    this.id = id;
    this.nome = nome;
    this.ruolo = ruolo;
  }
}
