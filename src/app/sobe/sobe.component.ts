import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import {SearchPipe} from '../search.pipe';
import {SearchKVPipe} from '../search-kv.pipe';
import {DataService} from '../data.service';

@Component({
  selector: 'app-sobe',
  templateUrl: './sobe.component.html',
  styleUrls: ['./sobe.component.css'],
  providers: [SearchPipe, SearchKVPipe]

})
export class SobeComponent implements OnInit {
  private data;
  public sobe: any = [];
  constructor(private _http: Http, private _router: Router, private dataService: DataService) { }

  ngOnInit() {
    const headers = new Headers();
   headers.append('Content-Type', 'application/x-www-form-urlencoded');
   headers.append('token', localStorage.getItem('token'));
   this._http.get('http://localhost/it255/getrooms.php', {headers: headers})
     .subscribe(data => {
         this.sobe = JSON.parse(data['_body']).rooms;


       },
       err => {
         this._router.navigate(['']);
       }
     );
  }
  public removeItem(item: Number) {
     console.log("Remove: ", item);
   var headers = new Headers();
   headers.append('Content-Type', 'application/x-www-form-urlencoded');
   headers.append('token', localStorage.getItem('token'));
   this._http.get('http://localhost/it255/deleteroom.php?id='+item,{headers:headers})  .subscribe( data => {
this.data = JSON.parse(data['_body']);
//   console.log(obj);
    alert("Uspesno obrisana soba");
    location.reload();

},
err=> {  alert("Nije obrisana soba");});

  }

  public viewItem(item: Number){
         console.log(item);
         	this._router.navigate(['./detalji_sobe',item])
         }
   public editItem(item: Number){

this._router.navigate(['./izmeni_sobu',item]);

                }

}
