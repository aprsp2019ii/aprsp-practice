import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porudzbina',
  templateUrl: './porudzbina.component.html',
  styleUrls: ['./porudzbina.component.css']
})
export class PorudzbinaComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
  selektovanaPorudzbina: Porudzbina;

  dataSource: Observable<Porudzbina[]>;

  constructor(public porudzbinaService: PorudzbinaService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public selectRow(row) {
    this.selektovanaPorudzbina = row;
}

  public loadData() {
    this.dataSource = this.porudzbinaService.getAllPorudzbina();
  }

  public openDialog(flag: number, id: number, datum: Date, isporuceno: Date, placeno: boolean, iznos: number, dobavljac: Dobavljac ) {
    const dialogRef = this.dialog.open(PorudzbinaDialogComponent,
      { data: { id: id, datum: datum, isporuceno: isporuceno, placeno: placeno, iznos: iznos, dobavljac: dobavljac  } });
    dialogRef.componentInstance.flag = flag;
    console.log('objekat? ' + dobavljac);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
>>>>>>> newbranch
  }

}
