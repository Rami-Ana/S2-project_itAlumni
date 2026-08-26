export type EmploymentStatus =
    | 'available'
    | 'unavailable'
    | 'specific-hours';

export type Seniority =
    | 'junior'
    | 'mid'
    | 'senior';


export interface IUser {
    name: string;
    location: string;
    employmentStatus: EmploymentStatus;
    skills: string[];
    seniority: Seniority;
    isRecentlyActive: boolean;
}
