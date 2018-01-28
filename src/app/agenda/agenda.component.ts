import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor() { }
  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: 'agenda',
          message: 'Teste</b> Teste.'

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          }
      });
  }
  showNotification2(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: 'agenda',
        message: 'Adicionado</b> Cadastrado mais uma repetição.'

    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        }
    });
}
  ngOnInit() {
  }

}
