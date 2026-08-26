// src/manager/PageManager.ts RESPONSABILIDADES:
// limpie el DOM
// cargue HTML de páginas (HU3.1, HU3.2, HU3.3…)
// Activa los listeners de esa página
// inicialice componentes
// conecte navbar + páginas
// gestione navegación
// src/manager/PageManager.ts


import { generateDummyUsers } from "../mocks/mockUsers";

// HU3.1 — MemberSearch
import { renderMemberSearchPage } from "../pages/MemberSearch";

import {
  searchUsers,
  filterByActivity,
  filterBySeniority,
  filterByStack,
  filterByEmploymentStatus
} from "../services/UserService";

import type { EmploymentStatus, Seniority } from "../types/IUser";

export class PageManager {
  private root: HTMLElement;
  private users = generateDummyUsers();

  constructor(rootId: string) {
    this.root = document.getElementById(rootId)!;
  }

  // -----------------------------
  // MÉTODO PRINCIPAL DE NAVEGACIÓN
  // -----------------------------
  load(page: string): void {
      // if (page === "member-search") {
      // this.renderMemberSearch();
    switch (page) {
      case "member-search":
        this.renderMemberSearch();
        break;

      default:
        this.root.innerHTML = "<p>Página no encontrada</p>";
        break;
    }
  }

  // -----------------------------
  // HU3.1 — MemberSearch
  // -----------------------------
  private renderMemberSearch(): void {
    this.root.innerHTML = renderMemberSearchPage(this.users);
    this.attachMemberSearchEvents();
  }

  private attachMemberSearchEvents(): void {
    this.root.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      if (target.id === "searchUser") {this.handleSearch();}
      if (target.id === "applyFilter") {this.handleFilter();}
    });
  }

  private handleSearch(): void {
    const value = (document.getElementById("nameSearchUser") as HTMLInputElement).value;
    const filtered = searchUsers(value, this.users);
    this.root.innerHTML = renderMemberSearchPage(filtered);
  }

  private handleFilter(): void {
    let result = this.users;

    const level = (document.getElementById("levelOption") as HTMLSelectElement).value;
    if (level !== "") {
      result = filterBySeniority(result, level as Seniority);
    }

    const stack = (document.getElementById("stack") as HTMLInputElement).value;
    if (stack !== "") {
      result = filterByStack(result, stack);
    }

    const employment = (document.getElementById("employmentOption") as HTMLSelectElement).value;
    if (employment !== "") {
      result = filterByEmploymentStatus(result, employment as EmploymentStatus);
    }

    const onlyActive = (document.getElementById("activityOption") as HTMLInputElement).checked;
    result = filterByActivity(result, onlyActive);

    this.root.innerHTML = renderMemberSearchPage(result);
  }
}