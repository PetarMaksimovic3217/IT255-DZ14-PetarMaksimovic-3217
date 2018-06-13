import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Object;
  	sendData(item: Object){

  		this.data = item;
  	}
  	getData(){

  		return this.data;
  }
}
