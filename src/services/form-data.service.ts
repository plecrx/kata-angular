import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EffyFormData } from "../types";

@Injectable({ providedIn: "root" })
export class FormDataService {
  private readonly formData: FormGroup;

  private readonly defaultFormData: EffyFormData = {
    civility: "",
    lastName: "",
    firstName: "",
    email: "",
    phoneNumber: "",
    isOwner: false,
    numPeople: 0,
    income: 0,
    propertySize: 0,
  };

  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group(this.defaultFormData);
  }

  getForm(): FormGroup {
    return this.formData;
  }

  resetForm(): void {
    this.formData.reset(this.defaultFormData);
  }
}
