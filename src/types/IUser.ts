export type EmploymentStatus = 
|"available" 
| "unavailable" 
| "specific-hours";

export interface IUser {
    name: string;
    location: string;
    employmentStatus: EmploymentStatus;
    skills: string[];
}
