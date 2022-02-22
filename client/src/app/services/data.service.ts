import  Car  from 'src/app/models/car.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataForm: FormGroup;
  carsArr;
  errorMsg:object;

  constructor(private http: HttpClient, public _r:Router) {}
  
  
  getData(){
    this.http.get('http://localhost:80/projectsphp/cars/server/index.php').subscribe(
        data => {
          this.carsArr = data;
          console.log(data);
        },
        error => {
            console.log('Error', error);
            this.errorMsg = error;
        }
    );
  }

  PostData(dataForm:FormGroup) {
    this.http.post('http://localhost:80/projectsphp/cars/server/post.php', dataForm).subscribe(
        data => {
            console.log('POST Request is successful ', data);
            this.getData();
            this._r.navigateByUrl('/home')
        },
        error => {
            console.log('Error', error);
            this.errorMsg = error;
        }
    );
  }

  DeleteData(id) {
    this.http.delete('http://localhost:80/projectsphp/cars/server/delete.php', {responseType:"text",body:id}).subscribe(
        data => {
            console.log(data);
            this.getData()
        },
        error => {
            console.log('Error', error);
            this.errorMsg = error;
        }
    );
  }




}
