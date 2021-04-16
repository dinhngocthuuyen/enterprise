import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { Contribution, ContributionData } from 'src/app/models';
import { PeriodsService } from './periods.service';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Injectable()
export class ConsService extends ContributionData {

  data = {};

  constructor(private periods: PeriodsService,
    private WebReqService: WebRequestService) {
    super();
    this.data = {
      // week: this.getDataWeek(),
      // month: this.getDataMonth(),
      year: this.getDataYear(),
    };
  }
  private generateContributionData(date) {
    return {
      date,
      file: "aa",
      status: "aa",
      _facultyId: "sdsd",
      _userId: "saasd",
      _id: "scjsb"
    };
  }

  private getDataWeek(): Contribution[] {
      return this.periods.getWeeks().map((week) => {
        return this.generateContributionData(week);
      })
  }

  private getDataMonth(): Contribution[] {
    const currentDate = new Date();
    const days = currentDate.getDate();
    const month = this.periods.getMonths()[currentDate.getMonth()];

    return Array.from(Array(days)).map((_, index) => {
      const date = `${index + 1} ${month}`;

      return this.generateContributionData(date);
    });
  }

  private getDataYear(): Contribution[] {
    return this.periods.getYears().map((year) => {
      return this.generateContributionData(year);
    });
  }

  getContributionData(period: string): Observable<Contribution[]> {
    return observableOf(this.data[period]);
  }
}
