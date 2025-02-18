import { useShadCnReactTable } from '../hooks/useShadCnReactTable';
import {
  type SRT_RowData,
  type SRT_TableOptions,
  type SRT_TableInstance,
  type Xor,
} from '../types';
import { SRT_TablePaper } from './table/SRT_TablePaper';

type TableInstanceProp<TData extends SRT_RowData> = {
  table: SRT_TableInstance<TData>;
};

export type ShadCnReactTableProps<TData extends SRT_RowData> = Xor<
  TableInstanceProp<TData>,
  SRT_TableOptions<TData>
>;

  const isTableInstanceProp = <TData extends SRT_RowData>(
    props: ShadCnReactTableProps<TData>,
  ): props is TableInstanceProp<TData> =>
    (props as TableInstanceProp<TData>).table !== undefined;

export const ShadCnReactTable = <TData extends SRT_RowData>(
  props: ShadCnReactTableProps<TData>,
) => {
  let table: SRT_TableInstance<TData>;

  if (isTableInstanceProp(props)) {
    table = props.table;
  } else {
    table = useShadCnReactTable(props);
  }

  return <SRT_TablePaper table={table} />;
};
