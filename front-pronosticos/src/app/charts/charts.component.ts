import { Component, OnInit } from '@angular/core';
import { PronosticoService } from 'app/services/pronostico.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public yieldPercent:number;
  chartData: any =  {
    'labels': [],
    'data':  [3, 5],
    'type': 'doughnut',
    'leyenda': 'Acierto'
  };
  constructor(
    private pronosticoService: PronosticoService
  ) { }

  ngOnInit() {
    this.pronosticoService.getStats().subscribe(
      (response:any)=>{                
        this.chartData.data[1] = response.ganados;
        this.chartData.data[0] = response.perdidos;        

        this.chartData.labels[1] = 'Apuestas ganadas ' +response.ganados;
        this.chartData.labels[0] = 'Apuestas perdidas ' +response.perdidos;  

        
      }
    );
    this.getYield();
  }

  getYield(){
    this.pronosticoService.getYield().subscribe(
      (response:any)=>{        
        this.yieldPercent = response.yield.toFixed(2);
      }
    )
  }

    /*función que calcula el yield del total de los pronosticos*/
  //   calcularYield = function(pronosticos:any []) {
  //     var beneficiosNetos = 0;            
  //     var ganadas = 0;
  //     var perdidas = 0;
  //     var nulos = 0;
  //     var cantidadTotalApostada = 0;   
  //     for (var index in pronosticos){
  //         if (pronosticos[index].finalizado && (pronosticos[index].resultado == 'Ganada' || pronosticos[index].resultado == 'ganada')) {
  //             cantidadTotalApostada = cantidadTotalApostada + 10;
  //             var beneficio = (10 * pronosticos[index].cuota - 10);
  //             beneficiosNetos = beneficiosNetos + beneficio;
  //             ganadas = ganadas + 1;
  //         } else if (pronosticos[index].resultado == 'cancelada' || pronosticos[index].resultado == 'cancelado' || !pronosticos[index].finalizado) {
  //             nulos = nulos + 1;
  //         } else {
  //             if(pronosticos[index].finalizado){
  //                 cantidadTotalApostada = cantidadTotalApostada +10;
  //                 beneficiosNetos = beneficiosNetos - 10;
  //                 perdidas = perdidas + 1;
  //             }
  //         }
  //     }      
  //     this.yield = beneficiosNetos / cantidadTotalApostada * 100; 
  // };
  
}


