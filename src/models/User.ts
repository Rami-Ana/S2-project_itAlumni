import type {EmploymentStatus} from "../types/IUser";

export class User {
    private _name: string;
    private _location: string;
    private _employmentStatus: EmploymentStatus;
    private _skills: string[];

    constructor(name: string, location: string, employmentStatus: EmploymentStatus, skills: string[]) {
        this._name = name;
        this._employmentStatus = employmentStatus;
        this._location = location;
        this._skills = skills;
    }

    get name(): string { return this._name; }
    get employmentStatus(): EmploymentStatus { return this._employmentStatus; }
    get location(): string { return this._location; }
    get skills(): string[] { return this._skills; }


    set name(value: string) { this._name = value; }
    set employmentStatus(value: EmploymentStatus) { this._employmentStatus = value; }
    set location(value: string) { this._location = value; }
    set skills(value: string[]) { this._skills = value; }
}