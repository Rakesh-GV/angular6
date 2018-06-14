import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  user$: Object;

  constructor(private _data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params=>this.user$ = params.id);
  }

  ngOnInit() {
    this._data.getUserDetails(this.user$).subscribe(
      data => this.user$ = data
    );
  }

}
