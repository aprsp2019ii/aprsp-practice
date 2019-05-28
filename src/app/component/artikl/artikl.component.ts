<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { ArtiklDialogComponent } from './../dialog/artikl-dialog/artikl-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
>>>>>>> newbranch
import { Observable } from 'rxjs';
import { Artikl } from 'src/app/model/artikl.model';
import { HttpClient } from '@angular/common/http';
import { ArtiklService } from 'src/app/service/artikl.service';
<<<<<<< HEAD
=======
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
>>>>>>> newbranch

@Component({
  selector: 'app-artikl',
  templateUrl: './artikl.component.html',
  styleUrls: ['./artikl.component.css']
})
export class ArtiklComponent implements OnInit {

displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions'];
// dataSource: Observable<Artikl[]>;

<<<<<<< HEAD
 constructor(public httpClient: HttpClient, public artiklService: ArtiklService) {
=======
dataSource: MatTableDataSource<Artikl>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

constructor(public httpClient: HttpClient, public artiklService: ArtiklService, public dialog: MatDialog) {}

public openDialog(flag: number, id: number, naziv: string, proizvodjac: string) {
  const dialogRef = this.dialog.open(ArtiklDialogComponent, { data: { id: id, naziv: naziv, proizvodjac: proizvodjac } });
  dialogRef.componentInstance.flag = flag;
  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      this.loadData();
    }
  });
>>>>>>> newbranch
}

ngOnInit() {
  this.loadData();
}

public loadData() {
  this.artiklService.getAllArtikl().subscribe(data =>{
    this.dataSource = new MatTableDataSource(data);
    //ignoriši mala/velika slova pri sortiranju ali za id nemoj da prebacuješ u mala slova
    this.dataSource.sortingDataAccessor = (data, property) => {
      switch (property) {
        case 'id': return data[property];
        default: return data[property].toLocaleLowerCase();
      }
    };

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}

}
