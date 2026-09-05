// export type EmploymentStatus =
//     | 'available'
//     | 'unavailable'
//     | 'specific-hours';

export type Seniority =
    | 'junior'
    | 'mid'
    | 'senior';


export interface IUser {
    name: string;
    classYear: number;
    position: string;
    location: string;
    employmentStatus: boolean;
    skills: string[];
    seniority: Seniority;
    isRecentlyActive: boolean;
}
