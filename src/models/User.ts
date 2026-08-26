import type { EmploymentStatus } from "../types/IUser";
import type { Seniority } from '../types/IUser';

export class User {
    private _name: string;
    private _location: string;
    private _employmentStatus: EmploymentStatus;
    private _skills: string[];
    private _seniority: Seniority;
    private _isRecentlyActive: boolean;

    constructor(name: string, location: string, employmentStatus: EmploymentStatus, skills: string[], seniority: Seniority, isRecentlyActive: boolean) {
        this._name = name;
        this._employmentStatus = employmentStatus;
        this._location = location;
        this._skills = skills;
        this._seniority = seniority;
        this._isRecentlyActive = isRecentlyActive;
    }

    get name(): string { return this._name; }
    get employmentStatus(): EmploymentStatus { return this._employmentStatus; }
    get location(): string { return this._location; }
    get skills(): string[] { return this._skills; }
    get seniority(): Seniority { return this._seniority; }
    get isRecentlyActive(): boolean { return this._isRecentlyActive; }

    set name(value: string) { this._name = value; }
    set employmentStatus(value: EmploymentStatus) { this._employmentStatus = value; }
    set location(value: string) { this._location = value; }
    set skills(value: string[]) { this._skills = value; }
    set seniority(value: Seniority) { this._seniority = value; }
    set isRecentlyActive(value: boolean) { this._isRecentlyActive = value; }
}