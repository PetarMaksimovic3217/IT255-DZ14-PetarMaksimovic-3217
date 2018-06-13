import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { map,share } from 'rxjs/operators';
@Component({
  selector: 'app-detalji-sobe',
  templateUrl: './detalji-sobe.component.html',
  styleUrls: ['./detalji-sobe.component.css']
})
export class DetaljiSobeComponent {

    public sobe: any = [];
  http: Http;
  router: Router;
  route: ActivatedRoute;
  data:any;
  public id: any;

  constructor(route: ActivatedRoute, http: Http, router: Router, private fb: FormBuilder) {
  this.http = http;
  this.router = router;
  this.route = route;

  }
  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
    let id = +params['id'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append("token",localStorage.getItem("token"));
    this.http.get('http://localhost/it255/getroom.php?id='+id,{headers:headers}).pipe(map(res => res.json()),share()).subscribe(data=>{
this.data = data.data;
console.log(this.data.roomname);


},err => {
this.router.navigate(['./']);
})
    });
    }


    }
