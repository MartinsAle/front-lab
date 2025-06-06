import {Component, OnInit} from '@angular/core';
import {HeaderService} from "../../components/template/header/header.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '',
    }
  }


  ngOnInit() {}
}
