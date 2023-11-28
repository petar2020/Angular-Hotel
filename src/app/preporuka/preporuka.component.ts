import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.css']
})
export class PreporukaComponent implements OnInit {
  preporuke = [
    {
      naziv: "Koncert Klasične Muzike",
      opis: "Uživajte u večeri klasične muzike...",
      slikaUrl: "link-do-slike-koncert.jpg"
    },
    {
      naziv: "Izložba Modernih Skulptura",
      opis: "Posetite izložbu modernih skulptura...",
      slikaUrl: "link-do-slike-izlozba.jpg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}