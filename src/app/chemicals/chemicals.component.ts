import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ChemicalsDataSource } from './chemicals-datasource';

@Component({
  selector: 'app-chemicals',
  templateUrl: './chemicals.component.html',
  styleUrls: ['./chemicals.component.css']
})
export class ChemicalsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ChemicalsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ChemicalsDataSource(this.paginator, this.sort);
  }
}
