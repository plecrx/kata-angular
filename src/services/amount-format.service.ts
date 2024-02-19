import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AmountFormatService {
  formatAmount(amount: number): string {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  }
}
