import { Component, Input } from '@angular/core';
import { SpecificTime } from '../../interfaces/specific-time';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  @Input() data: SpecificTime | undefined;
  @Input() previous = '';
}
