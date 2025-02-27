import {
  type SRT_RowData,
  type SRT_TableInstance,
  type SRT_TableOptions,
} from '../types';
import { useSRT_TableInstance } from './useSRT_TableInstance';
import { useSRT_TableOptions } from './useSRT_TableOptions';

export const useShadCnReactTable = <TData extends SRT_RowData>(
  tableOptions: SRT_TableOptions<TData>,
): SRT_TableInstance<TData> =>
  useSRT_TableInstance(useSRT_TableOptions(tableOptions));
