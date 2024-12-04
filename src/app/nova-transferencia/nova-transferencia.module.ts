import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: '././nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss'] // Corrigido de styleUrl para styleUrls
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor!:number;

  destino!:number


  transferir(){
    console.log("Solicitada nova transferência")
    console.log('Valor:',this.valor)
    console.log('destino', this.destino)
  }
}
