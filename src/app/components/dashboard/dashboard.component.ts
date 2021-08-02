import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  inputData: any = {};
  inputText = '';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.checkData();
  }
  checkData(): void {
    this.dataService.getDataStash()
      .subscribe((res) => {
        this.inputData = Object.keys(res).length > 0 ? res : JSON.parse(sessionStorage.getItem('userInput') as any);
        this.inputText = Object.keys(res).length > 0 ? 'Fetched from data service!!!' : 'Fetched from session storage!!!';
        console.log(res);
      });
  }

}
