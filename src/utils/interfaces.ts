export interface IEntries {
  entries: IEntry[];
}

export interface IEntry {
  id: string;
  description: string;
  value: number;
  isExpense?: boolean;
}

export interface IModal {
  isOpen: boolean;
  id?: string;
}
