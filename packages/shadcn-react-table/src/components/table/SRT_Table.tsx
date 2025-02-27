import { useMemo } from 'react';
import { Table } from '../ui/table';
import { type SRT_RowData, type SRT_TableInstance } from '../../types';
import { parseCSSVarId } from '../../utils/style.utils';
import { Memo_SRT_TableBody, SRT_TableBody } from '../body/SRT_TableBody';
import { SRT_TableHead } from '../head/SRT_TableHead';
import { useSRT_ColumnVirtualizer } from '../../hooks/useSRT_ColumnVirtualizer';
import { cn } from '../../utils/tailwind';

type TableProps = React.HTMLAttributes<HTMLTableElement>;

export interface SRT_TableProps<TData extends SRT_RowData> extends TableProps {
  table: SRT_TableInstance<TData>;
}

export const SRT_Table = <TData extends SRT_RowData>({
  table,
  ...rest
}: SRT_TableProps<TData>) => {
  const {
    getFlatHeaders,
    getState,
    options: {
      columns,
      //   enableStickyHeader,
      //   enableTableFooter,
      enableTableHead,
      //   layoutMode,
      memoMode,
      //   muiTableProps,
      //   renderCaption,
    },
  } = table;
  const {
    columnSizing,
    columnSizingInfo,
    columnVisibility,
    // isFullScreen
  } = getState();

  const tableProps = {
    // ...parseFromValuesOrFunc(muiTableProps, { table }),
    ...rest,
  };

  //   const Caption = parseFromValuesOrFunc(renderCaption, { table });

  const columnSizeVars = useMemo(() => {
    const headers = getFlatHeaders();
    const colSizes: { [key: string]: number } = {};
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      const colSize = header.getSize();
      colSizes[`--header-${parseCSSVarId(header.id)}-size`] = colSize;
      colSizes[`--col-${parseCSSVarId(header.column.id)}-size`] = colSize;
    }
    return colSizes;
  }, [columns, columnSizing, columnSizingInfo, columnVisibility]);

  const columnVirtualizer = useSRT_ColumnVirtualizer(table);

  const commonTableGroupProps = {
    columnVirtualizer,
    table,
  };

  return (
    <Table
      //   stickyHeader={enableStickyHeader || isFullScreen}
      {...tableProps}
      style={{ ...columnSizeVars, ...tableProps?.style }} // TODO: apply styles
      className={cn(
        'relative border-separate',
        //layoutMode?.startsWith('grid') ? 'grid' : '',
        //...(parseFromValuesOrFunc(tableProps?.sx, theme) as any),
      )}
    >
      {/* {!!Caption && <caption>{Caption}</caption>} */}
      {enableTableHead && <SRT_TableHead {...commonTableGroupProps} />}
      {memoMode === 'table-body' || columnSizingInfo.isResizingColumn ? ( // memoization may break some functionality
        <Memo_SRT_TableBody {...commonTableGroupProps} />
      ) : (
        <SRT_TableBody {...commonTableGroupProps} />
      )}
      {/* {enableTableFooter && <SRT_TableFooter {...commonTableGroupProps} />} */}
    </Table>
  );
};
