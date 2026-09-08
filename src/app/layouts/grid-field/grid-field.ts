import { Component, input, output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

// PrimeNG Modules
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FilterField } from './extras/filter-field';

@Component({
  selector: 'app-grid-field',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    DatePickerModule,
    InputMaskModule,
    SelectButtonModule
  ],
  templateUrl: './grid-field.html',
  styleUrl: './grid-field.css',
})
export class GridField implements OnInit {

  fields = input.required<FilterField[]>();
  buttonLabel = input<string>('Pesquisar');
  accordionTitle = input<string>('Filtros de Pesquisa');
  isExpanded = input<boolean>(true);

  search = output<Record<string, any>>();

  form!: FormGroup;

  ngOnInit(): void {
    const group: Record<string, FormControl> = {};
    
    this.fields().forEach(field => {
      group[field.key] = new FormControl(field.defaultValue ?? null);
    });

    this.form = new FormGroup(group);
  }

  onSearch(): void {
    this.search.emit(this.form.value);
  }
}
