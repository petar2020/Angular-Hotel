import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-nama',
  templateUrl: './o-nama.component.html',
  styleUrls: ['./o-nama.component.css']
})
export class ONamaComponent implements OnInit {
  tim = [
    {
      ime: "Petar Arsic",
      pozicija: "CEO",
      biografija: "Doktor pre svega...",
      slikaUrl: "./assets/img/slika4.jpg"
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
