import { type DragEvent, memo, useMemo, useRef } from 'react';
import { type VirtualItem } from '@tanstack/react-virtual';
// import {
//   type Theme,
//   alpha,
//   darken,
//   lighten,
//   useTheme,
// } from '@mui/material/styles';
// import { SRT_TableDetailPanel } from './SRT_TableDetailPanel';
import {
  type SRT_Cell,
  type SRT_ColumnVirtualizer,
  type SRT_Row,
  type SRT_RowData,
  type SRT_RowVirtualizer,
  type SRT_TableInstance,
  type SRT_VirtualItem,
} from '../../types';
import { TableRow } from '../ui/table';
import { getIsRowSelected } from '../../utils/row.utils';
import { Memo_SRT_TableBodyCell, SRT_TableBodyCell } from './SRT_TableBodyCell';
// import {
//   commonCellBeforeAfterStyles,
//   getCommonPinnedCellStyles,
// } from '../../utils/style.utils';
// import { parseFromValuesOrFunc } from '../../utils/utils';

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export interface SRT_TableBodyRowProps<TData extends SRT_RowData>
  extends TableRowProps {
  columnVirtualizer?: SRT_ColumnVirtualizer;
  numRows?: number;
  pinnedRowIds?: string[];
  row: SRT_Row<TData>;
  rowVirtualizer?: SRT_RowVirtualizer;
  staticRowIndex: number;
  table: SRT_TableInstance<TData>;
  virtualRow?: VirtualItem;
}

export const SRT_TableBodyRow = <TData extends SRT_RowData>({
  columnVirtualizer,
  numRows,
  pinnedRowIds,
  row,
  rowVirtualizer,
  staticRowIndex,
  table,
  virtualRow,
  ...rest
}: SRT_TableBodyRowProps<TData>) => {
  //   const theme = useTheme();

  const {
    getState,
    options: {
      //   enableRowOrdering,
      enableRowPinning,
      //   enableStickyFooter,
      //   enableStickyHeader,
      //   layoutMode,
      memoMode,
      //   mrtTheme: {
      //     baseBackgroundColor,
      //     pinnedRowBackgroundColor,
      //     selectedRowBackgroundColor,
      //   },
      //   muiTableBodyRowProps,
      //   renderDetailPanel,
      rowPinningDisplayMode,
    },
    refs: {
      // tableFooterRef,
      tableHeadRef,
    },
    // setHoveredRow,
  } = table;

  // TODO: temp value
  const renderDetailPanel = null

  const {
    // density,
    // draggingColumn,
    // draggingRow,
    // editingCell,
    // editingRow,
    // hoveredRow,
    // isFullScreen,
    rowPinning,
  } = getState();

  const visibleCells = row.getVisibleCells();

  const { virtualColumns, virtualPaddingLeft, virtualPaddingRight } =
    columnVirtualizer ?? {};

  const isRowSelected = getIsRowSelected({ row, table });
  const isRowPinned = enableRowPinning && row.getIsPinned();
  //   const isDraggingRow = draggingRow?.id === row.id;
  //   const isHoveredRow = hoveredRow?.id === row.id;
  // TODO: modify later
  const isDraggingRow = false;
  const isHoveredRow = false;

  const tableRowProps = {
    // ...parseFromValuesOrFunc(muiTableBodyRowProps, {
    //   row,
    //   staticRowIndex,
    //   table,
    // }),
    ...rest,
  };

  const [bottomPinnedIndex, topPinnedIndex] = useMemo(() => {
    if (
      !enableRowPinning ||
      !rowPinningDisplayMode?.includes('sticky') ||
      !pinnedRowIds ||
      !row.getIsPinned()
    )
      return [];
    return [
      [...pinnedRowIds].reverse().indexOf(row.id),
      pinnedRowIds.indexOf(row.id),
    ];
  }, [pinnedRowIds, rowPinning]);

//   const tableHeadHeight =
//     ((enableStickyHeader || isFullScreen) &&
//       tableHeadRef.current?.clientHeight) ||
//     0;
//   const tableFooterHeight =
//     (enableStickyFooter && tableFooterRef.current?.clientHeight) || 0;

//   const sx = parseFromValuesOrFunc(tableRowProps?.sx, theme as any);

  // TODO: temp
  const defaultRowHeight = 53
//   const defaultRowHeight =
//     density === 'compact' ? 37 : density === 'comfortable' ? 53 : 69;

//   const customRowHeight =
//     // @ts-expect-error
//     parseInt(tableRowProps?.style?.height ?? sx?.height, 10) || undefined;

//   const rowHeight = customRowHeight || defaultRowHeight;

//   const handleDragEnter = (_e: DragEvent) => {
//     if (enableRowOrdering && draggingRow) {
//       setHoveredRow(row);
//     }
//   };

//   const handleDragOver = (e: DragEvent) => {
//     e.preventDefault();
//   };

  const rowRef = useRef<HTMLTableRowElement | null>(null);

//   const cellHighlightColor = isRowSelected
//     ? selectedRowBackgroundColor
//     : isRowPinned
//     ? pinnedRowBackgroundColor
//     : undefined;

//   const cellHighlightColorHover =
//     tableRowProps?.hover !== false
//       ? isRowSelected
//         ? cellHighlightColor
//         : theme.palette.mode === 'dark'
//         ? `${lighten(baseBackgroundColor, 0.3)}`
//         : `${darken(baseBackgroundColor, 0.3)}`
//       : undefined;

  return (
    <>
      <TableRow
        data-index={renderDetailPanel ? staticRowIndex * 2 : staticRowIndex}
        data-pinned={!!isRowPinned || undefined}
        data-selected={isRowSelected || undefined}
        // onDragEnter={handleDragEnter}
        // onDragOver={handleDragOver}
        ref={(node: HTMLTableRowElement) => {
          if (node) {
            rowRef.current = node;
            rowVirtualizer?.measureElement(node);
          }
        }}
        // selected={isRowSelected}
        {...tableRowProps}
        style={{
          transform: virtualRow
            ? `translateY(${virtualRow.start}px)`
            : undefined,
          ...tableRowProps?.style,
        }}
        // sx={(theme: Theme) => ({
        //   '&:hover td:after': cellHighlightColorHover
        //     ? {
        //         backgroundColor: alpha(cellHighlightColorHover, 0.3),
        //         ...commonCellBeforeAfterStyles,
        //       }
        //     : undefined,
        //   backgroundColor: `${baseBackgroundColor} !important`,
        //   bottom:
        //     !virtualRow && bottomPinnedIndex !== undefined && isRowPinned
        //       ? `${
        //           bottomPinnedIndex * rowHeight +
        //           (enableStickyFooter ? tableFooterHeight - 1 : 0)
        //         }px`
        //       : undefined,
        //   boxSizing: 'border-box',
        //   display: layoutMode?.startsWith('grid') ? 'flex' : undefined,
        //   opacity: isRowPinned ? 0.97 : isDraggingRow || isHoveredRow ? 0.5 : 1,
        //   position: virtualRow
        //     ? 'absolute'
        //     : rowPinningDisplayMode?.includes('sticky') && isRowPinned
        //     ? 'sticky'
        //     : 'relative',
        //   td: {
        //     ...getCommonPinnedCellStyles({ table, theme }),
        //   },
        //   'td:after': cellHighlightColor
        //     ? {
        //         backgroundColor: cellHighlightColor,
        //         ...commonCellBeforeAfterStyles,
        //       }
        //     : undefined,
        //   top: virtualRow
        //     ? 0
        //     : topPinnedIndex !== undefined && isRowPinned
        //     ? `${
        //         topPinnedIndex * rowHeight +
        //         (enableStickyHeader || isFullScreen ? tableHeadHeight - 1 : 0)
        //       }px`
        //     : undefined,
        //   transition: virtualRow ? 'none' : 'all 150ms ease-in-out',
        //   width: '100%',
        //   zIndex:
        //     rowPinningDisplayMode?.includes('sticky') && isRowPinned ? 2 : 0,
        //   ...(sx as any),
        // })}
      >
        {virtualPaddingLeft ? (
          <td style={{ display: 'flex', width: virtualPaddingLeft }} />
        ) : null}
        {(virtualColumns ?? visibleCells).map(
          (cellOrVirtualCell, staticColumnIndex) => {
            let cell = cellOrVirtualCell as SRT_Cell<TData>;
            if (columnVirtualizer) {
              staticColumnIndex = (cellOrVirtualCell as SRT_VirtualItem).index;
              cell = visibleCells[staticColumnIndex];
            }
            const props = {
              cell,
              numRows,
              rowRef,
              staticColumnIndex,
              staticRowIndex,
              table,
            };
            const key = `${cell.id}-${staticRowIndex}`;
            return cell ? (
              memoMode === 'cells' 
            //   &&
            //   cell.column.columnDef.columnDefType === 'data' &&
            //   !draggingColumn &&
            //   !draggingRow &&
            //   editingCell?.id !== cell.id &&
            //   editingRow?.id !== row.id 
              ? (
                <Memo_SRT_TableBodyCell key={key} {...props} />
              ) : (
                <SRT_TableBodyCell key={key} {...props} />
              )
            ) : null;
          },
        )}
        {virtualPaddingRight ? (
          <td style={{ display: 'flex', width: virtualPaddingRight }} />
        ) : null}
      </TableRow>
      {/* {renderDetailPanel && !row.getIsGrouped() && (
        <SRT_TableDetailPanel
          parentRowRef={rowRef}
          row={row}
          rowVirtualizer={rowVirtualizer}
          staticRowIndex={staticRowIndex}
          table={table}
          virtualRow={virtualRow}
        />
      )} */}
    </>
  );
};

export const Memo_SRT_TableBodyRow = memo(
  SRT_TableBodyRow,
  (prev, next) =>
    prev.row === next.row && prev.staticRowIndex === next.staticRowIndex,
) as typeof SRT_TableBodyRow;
