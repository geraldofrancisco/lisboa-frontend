import { FilterControlKind } from "./filter-control-kind";

export interface FilterField {
    key: string;
    label: string;
    kind?: FilterControlKind; // Default: 'text'
    defaultValue?: any;
    /**
     * Propriedades específicas do PrimeNG repassadas diretamente.
     * Ex: { options: [...], mask: '999.999.999-99', rows: 3, showIcon: true }
     */
    props?: Record<string, any>;
  }