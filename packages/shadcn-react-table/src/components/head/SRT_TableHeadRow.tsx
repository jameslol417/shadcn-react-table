// import TableRow, { type TableRowProps } from '@mui/material/TableRow';
// import { alpha } from '@mui/material/styles';
// import { SRT_TableHeadCell } from './SRT_TableHeadCell';
import {
  type SRT_ColumnVirtualizer,
  type SRT_Header,
  type SRT_HeaderGroup,
  type SRT_RowData,
  type SRT_TableInstance,
  type SRT_VirtualItem,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { TableRow } from '../ui/table';
import { SRT_TableHeadCell } from './SRT_TableHeadCell';

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export interface SRT_TableHeadRowProps<TData extends SRT_RowData>
  extends TableRowProps {
  columnVirtualizer?: SRT_ColumnVirtualizer;
  headerGroup: SRT_HeaderGroup<TData>;
  table: SRT_TableInstance<TData>;
}

export const SRT_TableHeadRow = <TData extends SRT_RowData>({
  columnVirtualizer,
  headerGroup,
  table,
  ...rest
}: SRT_TableHeadRowProps<TData>) => {
  const {
    options: {
    //   enableStickyHeader,
    //   layoutMode,
    //   mrtTheme: { baseBackgroundColor },
    //   muiTableHeadRowProps,
    },
  } = table;

  const { virtualColumns, virtualPaddingLeft, virtualPaddingRight } =
    columnVirtualizer ?? {};

  const tableRowProps = {
    // ...parseFromValuesOrFunc(muiTableHeadRowProps, {
    //   headerGroup,
    //   table,
    // }),
    ...rest,
  };

  return (
    <TableRow
      {...tableRowProps}
    //   sx={(theme) => ({
    //     backgroundColor: baseBackgroundColor,
    //     boxShadow: `4px 0 8px ${alpha(theme.palette.common.black, 0.1)}`,
    //     display: layoutMode?.startsWith('grid') ? 'flex' : undefined,
    //     position:
    //       enableStickyHeader && layoutMode === 'semantic'
    //         ? 'sticky'
    //         : 'relative',
    //     top: 0,
    //     ...(parseFromValuesOrFunc(tableRowProps?.sx, theme) as any),
    //   })}
    >
      {virtualPaddingLeft ? (
        <th style={{ display: 'flex', width: virtualPaddingLeft }} />
      ) : null}
      {(virtualColumns ?? headerGroup.headers).map(
        (headerOrVirtualHeader, staticColumnIndex) => {
          let header = headerOrVirtualHeader as SRT_Header<TData>;
          if (columnVirtualizer) {
            staticColumnIndex = (headerOrVirtualHeader as SRT_VirtualItem)
              .index;
            header = headerGroup.headers[staticColumnIndex];
          }

          return header ? (
            <SRT_TableHeadCell
              columnVirtualizer={columnVirtualizer}
              header={header}
              key={header.id}
              staticColumnIndex={staticColumnIndex}
              table={table}
            />
          ) : null;
        },
      )}
      {virtualPaddingRight ? (
        <th style={{ display: 'flex', width: virtualPaddingRight }} />
      ) : null}
    </TableRow>
  );
};
