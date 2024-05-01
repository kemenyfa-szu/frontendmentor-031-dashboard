import { Component, ElementRef, inject } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { SpecificTime } from '../interfaces/specific-time';
import { ActivityComponent } from './activity/activity.component';
import { NgFor, NgStyle, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ActivityComponent, NgFor, NgStyle, TitleCasePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  getDataService: GetDataService = inject(GetDataService);
  specificData: SpecificTime[] = [];
  currView = '';
  previous = '';
  views = ['daily', 'weekly', 'monthly'];

  constructor() {
    this.changeView('weekly');
  }

  getSpecificData(period: string) {
    this.specificData = this.getDataService.getSpecificData(period);
  }

  previousLabel(period: string) {
    switch (period) {
      case 'daily':
        return 'Yesterday';
      case 'weekly':
        return 'Last Week';
      case 'monthly':
        return 'Last Month';
    }
    return '';
  }

  changeView(period: string) {
    if (period != this.currView) {
      this.currView = period;
      this.specificData = this.getDataService.getSpecificData(this.currView);
      this.previous = this.previousLabel(this.currView);
    }
  }
}
