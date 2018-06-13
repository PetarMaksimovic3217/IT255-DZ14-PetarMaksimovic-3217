import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { map,share } from 'rxjs/operators';


@Component({
  selector: 'app-izmeni-sobu',
  templateUrl: './izmeni-sobu.component.html',
  styleUrls: ['./izmeni-sobu.component.css'],

})
export class IzmeniSobuComponent {

  izmeniSobuForm = new FormGroup({
  id:new FormControl(),
  roomname: new FormControl(),
  beds: new FormControl(),
  tv: new FormControl()


});

http: Http;
router: Router;
route: ActivatedRoute;
data: any;
public id: any;
roomname: String;
id1:Number;
beds:any;
tv:Number;
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
  this.http.get('http://localhost/it255/getroom.php?id='+id, {headers: headers}).pipe(map(res => res.json()),share()).subscribe(data=>{
this.data = data.data;
console.log(this.data.beds);


this.izmeniSobuForm.controls['id'].setValue(+this.data.id);
this.izmeniSobuForm.controls['roomname'].setValue(this.data.roomname);
this.izmeniSobuForm.controls['beds'].setValue(+this.data.beds);
this.izmeniSobuForm.controls['tv'].setValue(+this.data.tv);

},err => {
this.router.navigate(['./']);
})
  });

}


onModifyRoom(): void {

	var data1 = 'roomName=' +this.izmeniSobuForm.value.roomname+ '&hasTV=' +this.izmeniSobuForm.value.tv +'&beds='+this.izmeniSobuForm.value.beds+'&id=' +this.izmeniSobuForm.value.id;
  
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
   headers.append('token',localStorage.getItem('token'));
  this.http.post('http://localhost/it255/updateroom.php', data1, {headers: headers}).subscribe((result) => {
    this.router.navigateByUrl('sobe');
    alert("Uspešno uneta soba")
  }, (error) => {
    this.router.navigateByUrl('onama');
  });

}












}
