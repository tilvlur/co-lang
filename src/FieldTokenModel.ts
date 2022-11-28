import { EFieldType } from './types';

export interface IFieldTokenModel<T = unknown> {
  id: string;
  parentId: string;
  fieldName: string;
  fieldValue: T;
  fieldType: EFieldType;
  children: IFieldTokenModel[];
}
export class FieldTokenModel<T = unknown> implements IFieldTokenModel<T> {
  constructor(
    public id: string,
    public parentId: string = '',
    public fieldName: string,
    public fieldValue: T,
    public fieldType: EFieldType,
    public children: FieldTokenModel[] = []
  ) {}
}
