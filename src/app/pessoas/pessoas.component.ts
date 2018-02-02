import { Component, OnInit } from '@angular/core';
import {PessoasService} from 'app/services/pessoas.service';
import {Pessoas} from 'app/model/pessoas';
declare var $: any;

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  public pessoas: Pessoas[] = [];

  constructor(private pessoasService: PessoasService) { }

  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: 'notifications',
        message: 'Após cadastrar os dados click no Botão Salvar e Sair </b> OK ?'

    }, {
        type: type[color],
        timer: 3000,
        placement: {
            from: from,
            align: align
        }
    });
}

  ngOnInit() {
   this.pessoasService.getPessoas()
   .subscribe(data =>
    this.pessoas = data);
  }

//  deleteLeitor(leitor) {
//       let index = this.leitores.indexOf(leitor);
//       this.leitores.splice(index, 1);
//       this.leitoresService.deleteLeitor(leitor.id)
//         .subscribe(null,
//           err => {
//             alert('Não é possível deletar !');
//             this.leitores.splice(index, 0, leitor);
//           });
//     }
   }
