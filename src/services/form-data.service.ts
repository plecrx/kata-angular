import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EffyFormData } from "../types";

@Injectable({ providedIn: "root" })
export class FormDataService {
  private readonly formData: FormGroup;

  private readonly defaultFormData: EffyFormData = {
    civility: "",
    lastname: "",
    firstname: "",
    email: "",
    phoneNumber: "",
    isOwner: false,
    nbPeople: 0,
    incomes: 0,
    propertySize: 0,
  };

  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group(this.defaultFormData);
  }

  getForm(): FormGroup {
    return this.formData;
  }

  saveFormData(value: FormGroup): void {
    this.formData.patchValue(value);
  }

  resetForm(): void {
    this.formData.reset(this.defaultFormData);
  }
}
