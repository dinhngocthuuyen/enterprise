import { EmailValidator } from "@angular/forms";

export interface Coordinator {
  _id: string;
  name: string;
  address: string;
  phone: number;
  dob?: Date;
  email: string;
}

