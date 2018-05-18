import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../api/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-otheruserprofile',
  templateUrl: './otheruserprofile.component.html',
  styleUrls: ['./otheruserprofile.component.css']
})
export class OtheruserprofileComponent implements OnInit {
  @Input() user: User;

  constructor(private route: ActivatedRoute, private userService:UserService ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    let userId = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(userId).subscribe(user => this.user = user);
  }


}
