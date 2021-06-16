import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrls: ['./add-sprint.component.css'],
  providers: [NgbModalConfig, NgbModal, ]
})
export class AddSprintComponent implements OnInit {
  sprintName: string;
  fromDate: NgbDate;
  toDate: NgbDate;
  hoveredDate: NgbDate;

  constructor( config: NgbModalConfig, private modalService: NgbModal, calendar: NgbCalendar) {
// Model
    config.backdrop = 'static';
    config.keyboard = false;
// calendar
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onDateSelection(date: NgbDate) {
    console.log(this.fromDate)

    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    console.log(this.toDate)

  }
  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
}
