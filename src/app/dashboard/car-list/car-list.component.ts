import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from 'src/app/model/car';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/service/car.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  dataSource = new MatTableDataSource();

  cars: any[] = [];

  
  constructor(private carService:CarService, private toastr: ToastrService) {

    
   }

  ngOnInit(): void {
    this.getCars();
    
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //obtener los autos de la base para mostrar en el listado principal
  getCars() {
    this.carService.getCars().subscribe(data => {
      this.cars = [];
      data.forEach((element: any) => {
        this.cars.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.cars);
    });
    
  
  }

  deleteCar(id: string) {
    this.carService.deleteCar(id).then(() => {
      console.log('auto eliminado con exito');
      this.toastr.error('El auto fue eliminado con exito', 'Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }

}
