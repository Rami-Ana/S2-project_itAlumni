import type { Seniority } from "./IUser";

export interface NetworkingFilters {
  query: string;
  level: Seniority | "";
  onlyActive: boolean;
  onlyAvailable: boolean;
}