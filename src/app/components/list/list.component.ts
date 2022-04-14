import { Component, OnInit } from '@angular/core';
import { ListServiceService } from 'src/app/services/list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dividirPorGenero: boolean = false;

  constructor(
    private listService: ListServiceService
  ) { }

  ngOnInit(): void {
    this.listService.filtros.valueChanges.subscribe(filtros => {
      this.dividirPorGenero = filtros.dividirPorGenero;
    });
  }

}
