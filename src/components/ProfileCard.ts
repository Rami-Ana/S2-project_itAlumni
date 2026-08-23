import type { User } from "../models/User";

export class ProfileCard {
    private _user: User;


    constructor(user: User) {
        this._user = user;
    }

    get user(): User { return this._user; }
    set user(value: User) { this._user = value; }

    render(): string {
        return `<div>Nombre: ${this.user.name}
  Habilidades: ${this.user.skills.join(", ")}
  Disponibilidad: ${this.user.employmentStatus}
  Localidad: ${this.user.location}
  </div>`;
    }
}
