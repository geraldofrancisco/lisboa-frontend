import { Component } from '@angular/core';
import { GridTitle } from '../../../../layouts/grid-title/grid-title';
import { GridField } from '../../../../layouts/grid-field/grid-field';
import { FilterField } from '../../../../layouts/grid-field/extras/filter-field';

@Component({
  selector: 'app-email-list',
  standalone: true,
  imports: [GridTitle, GridField],
  templateUrl: './email-list.html',
  styleUrl: './email-list.css',
})
export class EmailList {
  meusFiltros: FilterField[] = [
    {
      key: 'assunto',
      label: 'Assunto',
      kind: 'text',
      props: { placeholder: 'Pesquisar por título/assunto...' }
    },
    {
      key: 'cpf',
      label: 'CPF do Remetente',
      kind: 'mask',
      props: { mask: '999.999.999-99', placeholder: '000.000.000-00' }
    },
    {
      key: 'status',
      label: 'Status do E-mail',
      kind: 'select',
      props: {
        options: [
          { label: 'Enviado', value: 'ENVIADO' },
          { label: 'Pendente', value: 'PENDENTE' },
          { label: 'Erro', value: 'ERRO' }
        ],
        optionLabel: 'label',
        optionValue: 'value',
        placeholder: 'Todos os Status'
      }
    },
    {
      key: 'tipo',
      label: 'Prioridade',
      kind: 'selectbutton',
      props: {
        options: [
          { label: 'Baixa', value: 'LOW' },
          { label: 'Alta', value: 'HIGH' }
        ]
      }
    },
    {
      key: 'periodo',
      label: 'Período do Envio',
      kind: 'datepicker',
      props: {
        selectionMode: 'range',
        dateFormat: 'dd/mm/yy',
        showIcon: true,
        placeholder: 'Selecione o intervalo'
      }
    }
  ];

  conductResarch(valores: Record<string, any>): void {
    console.log('Filtros submetidos:', valores);
  }
}
