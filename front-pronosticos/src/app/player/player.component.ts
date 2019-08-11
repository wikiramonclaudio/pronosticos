import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
  public cancion;
  public botonActivo=null;
  constructor() { }

  ngOnInit() {
    this.cancion = new Audio('assets/cancion.mp3');
  }
  
  public reproducirMusica(){
    this.cancion.play();
    this.botonActivo = 2;
  }
  
  public pararMusica(){
    this.cancion.pause();
    this.botonActivo = 1;
  }

}
