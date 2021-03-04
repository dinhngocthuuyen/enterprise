import { Observable } from 'rxjs';

export interface Contribution {
  _id: string;
  file: string;
  date: Date;
  status: string;
  _facultyId: string;
  _userId: string;
}

export abstract class ContributionData {
  abstract getContributionData(period: string): Observable<Contribution[]>;
}



