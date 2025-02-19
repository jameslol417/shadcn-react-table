import { memo, useMemo } from 'react';
import { type VirtualItem } from '@tanstack/react-virtual';
import { TableBody, TableCell, TableRow } from '../ui/table';
import {
  type SRT_TableInstance,
  type SRT_ColumnVirtualizer,
  type SRT_RowData,
  type SRT_Row,
} from '../../types';
import { useSRT_Rows } from '../../hooks/useSRT_Rows';
import { useSRT_RowVirtualizer } from '../../hooks/useSRT_RowVirtualizer';
import { Memo_SRT_TableBodyRow, SRT_TableBodyRow } from './SRT_TableBodyRow';

type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

export interface SRT_TableBodyProps<TData extends SRT_RowData>
  extends TableBodyProps {
  columnVirtualizer?: SRT_ColumnVirtualizer;
  table: SRT_TableInstance<TData>;
}

export const SRT_TableBody = <TData extends SRT_RowData>({
  columnVirtualizer,
  table,
  ...rest
}: SRT_TableBodyProps<TData>) => {
  const {
    getBottomRows,
    getIsSomeRowsPinned,
    getRowModel,
    getState,
    getTopRows,
    options: {
      //   enableStickyFooter,
      //   enableStickyHeader,
      //   layoutMode,
      //   localization,
      memoMode,
      //   muiTableBodyProps,
      //   renderDetailPanel,
      renderEmptyRowsFallback,
      rowPinningDisplayMode,
    },
    refs: {
      // tableFooterRef,
      tableHeadRef,
      tablePaperRef,
    },
  } = table;

  //TODO: temp
  const renderDetailPanel = null;

  const {
    columnFilters,
    globalFilter,
    // isFullScreen,
    rowPinning,
  } = getState();

  const tableBodyProps = {
    // ...parseFromValuesOrFunc(muiTableBodyProps, { table }),
    ...rest,
  };

  //   const tableHeadHeight =
  //     ((enableStickyHeader || isFullScreen) &&
  //       tableHeadRef.current?.clientHeight) ||
  //     0;
  //   const tableFooterHeight =
  //     (enableStickyFooter && tableFooterRef.current?.clientHeight) || 0;

  const pinnedRowIds = useMemo(() => {
    if (!rowPinning.bottom?.length && !rowPinning.top?.length) return [];
    return getRowModel()
      .rows.filter((row) => row.getIsPinned())
      .map((r) => r.id);
  }, [rowPinning, getRowModel().rows]);

  const rows = useSRT_Rows(table);

  const rowVirtualizer = useSRT_RowVirtualizer(table, rows);

  const { virtualRows } = rowVirtualizer ?? {};

  const commonRowProps = {
    columnVirtualizer,
    numRows: rows.length,
    table,
  };

  return (
    <>
      {!rowPinningDisplayMode?.includes('sticky') &&
        getIsSomeRowsPinned('top') && (
          <TableBody
            {...tableBodyProps}
            // sx={(theme) => ({
            //   display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
            //   position: 'sticky',
            //   top: tableHeadHeight - 1,
            //   zIndex: 1,
            //   ...(parseFromValuesOrFunc(tableBodyProps?.sx, theme) as any),
            // })}
          >
            {getTopRows().map((row, staticRowIndex) => {
              const props = {
                ...commonRowProps,
                row,
                staticRowIndex,
              };
              return memoMode === 'rows' ? (
                <Memo_SRT_TableBodyRow key={row.id} {...props} />
              ) : (
                <SRT_TableBodyRow key={row.id} {...props} />
              );
            })}
          </TableBody>
        )}
      <TableBody
        {...tableBodyProps}
        // sx={(theme) => ({
        // //   display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
        //   height: rowVirtualizer
        //     ? `${rowVirtualizer.getTotalSize()}px`
        //     : undefined,
        //   minHeight: !rows.length ? '100px' : undefined,
        //   position: 'relative',
        // //   ...(parseFromValuesOrFunc(tableBodyProps?.sx, theme) as any),
        // })}
      >
        {tableBodyProps?.children ??
          (!rows.length ? (
            <TableRow
            // style={{
            //   display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
            // }}
            >
              <TableCell
                colSpan={table.getVisibleLeafColumns().length}
                className="text-center" // from ShadCn DataTable
                // style={{
                //   display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
                // }}
              >
                {renderEmptyRowsFallback?.({ table }) ?? (
                  // {globalFilter || columnFilters.length
                  //   ? localization.noResultsFound
                  //   : localization.noRecordsToDisplay}
                  <>No Results.</>
                )}
              </TableCell>
            </TableRow>
          ) : (
            <>
              {(virtualRows ?? rows).map((rowOrVirtualRow, staticRowIndex) => {
                let row = rowOrVirtualRow as SRT_Row<TData>;
                if (rowVirtualizer) {
                  if (renderDetailPanel) {
                    if (rowOrVirtualRow.index % 2 === 1) {
                      return null;
                    } else {
                      staticRowIndex = rowOrVirtualRow.index / 2;
                    }
                  } else {
                    staticRowIndex = rowOrVirtualRow.index;
                  }
                  row = rows[staticRowIndex];
                }
                const props = {
                  ...commonRowProps,
                  pinnedRowIds,
                  row,
                  rowVirtualizer,
                  staticRowIndex,
                  virtualRow: rowVirtualizer
                    ? (rowOrVirtualRow as VirtualItem)
                    : undefined,
                };
                const key = `${row.id}-${row.index}`;
                return memoMode === 'rows' ? (
                  <Memo_SRT_TableBodyRow key={key} {...props} />
                ) : (
                  <SRT_TableBodyRow key={key} {...props} />
                );
              })}
            </>
          ))}
      </TableBody>
      {!rowPinningDisplayMode?.includes('sticky') &&
        getIsSomeRowsPinned('bottom') && (
          <TableBody
            {...tableBodyProps}
            // sx={(theme) => ({
            //   bottom: tableFooterHeight - 1,
            //   display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
            //   position: 'sticky',
            //   zIndex: 1,
            //   ...(parseFromValuesOrFunc(tableBodyProps?.sx, theme) as any),
            // })}
          >
            {getBottomRows().map((row, staticRowIndex) => {
              const props = {
                ...commonRowProps,
                row,
                staticRowIndex,
              };
              return memoMode === 'rows' ? (
                <Memo_SRT_TableBodyRow key={row.id} {...props} />
              ) : (
                <SRT_TableBodyRow key={row.id} {...props} />
              );
            })}
          </TableBody>
        )}
    </>
  );
};

export const Memo_SRT_TableBody = memo(
  SRT_TableBody,
  (prev, next) => prev.table.options.data === next.table.options.data,
) as typeof SRT_TableBody;
