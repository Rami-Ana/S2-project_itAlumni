import type { EmploymentStatus } from "../types/IUser";
import type { Seniority } from '../types/IUser';

// interface IUser

export class User {
    private _name: string;
    private _classYear: number;
    private _position: string;
    private _location: string;
    private _employmentStatus: EmploymentStatus;
    private _skills: string[];
    private _seniority: Seniority;
    private _isRecentlyActive: boolean;

    constructor(name: string, classYear: number, position:string, location: string, employmentStatus: EmploymentStatus, skills: string[], seniority: Seniority, isRecentlyActive: boolean) {
        this._name = name;
        this._classYear = classYear;
        this._position = position;
        this._employmentStatus = employmentStatus;
        this._location = location;
        this._skills = skills;
        this._seniority = seniority;
        this._isRecentlyActive = isRecentlyActive;
        //filter? 
    }

    get name(): string { return this._name; }
    get classYear(): number { return this._classYear; }
    get position(): string { return this._position; }
    get employmentStatus(): EmploymentStatus { return this._employmentStatus; }
    get location(): string { return this._location; }
    get skills(): string[] { return this._skills; }
    get seniority(): Seniority { return this._seniority; }
    get isRecentlyActive(): boolean { return this._isRecentlyActive; }

    set name(value: string) { this._name = value; }
    set classYear(value: number) { this._classYear = value; }
    set position(value: string) { this._position = value; }
    set employmentStatus(value: EmploymentStatus) { this._employmentStatus = value; }
    set location(value: string) { this._location = value; }
    set skills(value: string[]) { this._skills = value; }
    set seniority(value: Seniority) { this._seniority = value; }
    set isRecentlyActive(value: boolean) { this._isRecentlyActive = value; }
}