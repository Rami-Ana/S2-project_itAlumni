import type { User } from "../models/User";

export class ProfileCard {
    private _user: User;

    constructor(user: User) {
        this._user = user;
    }

    get user(): User { return this._user; }
    set user(value: User) { this._user = value; }

    render(): string {
        return `
        <article class="profile-card">
            <p>Nombre: ${this.user.name}</p>
            <p>Habilidades: ${this.user.skills.join(", ")}</p>
            <p>Disponibilidad: ${this.user.employmentStatus}</p>
            <p>Localidad: ${this.user.location}</p>
        </article>
        `;
    }
}
