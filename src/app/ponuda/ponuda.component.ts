import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {
  ponude = [
    {
      naziv: "Wellness & Spa",
      opis: "Uživajte u našem vrhunskom spa centru...",
      slikaUrl: "./assets/img/slika1.jpg"
    },
    {
      naziv: "Romantični vikend",
      opis: "Provedite nezaboravne trenutke...",
      slikaUrl: "./assets/img/slika2.jpg"
    },
    {
      naziv: "Avantura vikend",
      opis: "Provedite nezaboravne trenutke...",
      slikaUrl: "./assets/img/slika3.jpg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}