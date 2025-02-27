import { useRef, useMemo, useState } from 'react';
import { useReactTable } from '@tanstack/react-table';
import {
  type SRT_RowData,
  type SRT_DefinedTableOptions,
  type SRT_TableInstance,
  type SRT_StatefulTableOptions,
  type SRT_ColumnDef,
  type SRT_ColumnSizingInfoState,
  type SRT_TableState,
} from '../types';
import {
  getAllLeafColumnDefs,
  getColumnId,
  prepareColumns,
} from '../utils/column.utils';
import { showRowSelectionColumn } from '../utils/displayColumn.utils';
import { useSRT_Effects } from './useSRT_Effects';

/**
 * The SRT hook that wraps the TanStack useReactTable hook and adds additional functionality
 * @param definedTableOptions - table options with proper defaults set
 * @returns the SRT table instance
 */
export const useSRT_TableInstance = <TData extends SRT_RowData>(
  definedTableOptions: SRT_DefinedTableOptions<TData>,
): SRT_TableInstance<TData> => {
  const lastSelectedRowId = useRef<null | string>(null);
  //   const actionCellRef = useRef<HTMLTableCellElement>(null);
  //   const bottomToolbarRef = useRef<HTMLDivElement>(null);
  //   const editInputRefs = useRef<Record<string, HTMLInputElement>>({});
  //   const filterInputRefs = useRef<Record<string, HTMLInputElement>>({});
  //   const searchInputRef = useRef<HTMLInputElement>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const tableHeadCellRefs = useRef<Record<string, HTMLTableCellElement>>({});
  const tablePaperRef = useRef<HTMLDivElement>(null);
  //   const topToolbarRef = useRef<HTMLDivElement>(null);
  const tableHeadRef = useRef<HTMLTableSectionElement>(null);
  //   const tableFooterRef = useRef<HTMLTableSectionElement>(null);

  //transform initial state with proper column order
  const initialState: Partial<SRT_TableState<TData>> = useMemo(() => {
    const initState = definedTableOptions.initialState ?? {};
    // initState.columnOrder =
    //   initState.columnOrder ??
    //   getDefaultColumnOrderIds({
    //     ...definedTableOptions,
    //     state: {
    //       ...definedTableOptions.initialState,
    //       ...definedTableOptions.state,
    //     },
    //   } as MRT_StatefulTableOptions<TData>);
    // initState.globalFilterFn = definedTableOptions.globalFilterFn ?? 'fuzzy';
    return initState;
  }, []);

  definedTableOptions.initialState = initialState;

  //   const [actionCell, setActionCell] = useState<MRT_Cell<TData> | null>(
  //     initialState.actionCell ?? null,
  //   );
  //   const [creatingRow, _setCreatingRow] = useState<MRT_Row<TData> | null>(
  //     initialState.creatingRow ?? null,
  //   );
  //   const [columnFilterFns, setColumnFilterFns] =
  //     useState<MRT_ColumnFilterFnsState>(() =>
  //       Object.assign(
  //         {},
  //         ...getAllLeafColumnDefs(
  //           definedTableOptions.columns as MRT_ColumnDef<TData>[],
  //         ).map((col) => ({
  //           [getColumnId(col)]:
  //             col.filterFn instanceof Function
  //               ? col.filterFn.name ?? 'custom'
  //               : col.filterFn ??
  //                 initialState?.columnFilterFns?.[getColumnId(col)] ??
  //                 getDefaultColumnFilterFn(col),
  //         })),
  //       ),
  //     );
  //   const [columnOrder, onColumnOrderChange] = useState<MRT_ColumnOrderState>(
  //     initialState.columnOrder ?? [],
  //   );
  const [columnSizingInfo, onColumnSizingInfoChange] =
    useState<SRT_ColumnSizingInfoState>(
      initialState.columnSizingInfo ?? ({} as SRT_ColumnSizingInfoState),
    );
  //   const [density, setDensity] = useState<MRT_DensityState>(
  //     initialState?.density ?? 'comfortable',
  //   );
  //   const [draggingColumn, setDraggingColumn] =
  //     useState<MRT_Column<TData> | null>(initialState.draggingColumn ?? null);
  //   const [draggingRow, setDraggingRow] = useState<MRT_Row<TData> | null>(
  //     initialState.draggingRow ?? null,
  //   );
  //   const [editingCell, setEditingCell] = useState<MRT_Cell<TData> | null>(
  //     initialState.editingCell ?? null,
  //   );
  //   const [editingRow, setEditingRow] = useState<MRT_Row<TData> | null>(
  //     initialState.editingRow ?? null,
  //   );
  //   const [globalFilterFn, setGlobalFilterFn] = useState<MRT_FilterOption>(
  //     initialState.globalFilterFn ?? 'fuzzy',
  //   );
  //   const [grouping, onGroupingChange] = useState<MRT_GroupingState>(
  //     initialState.grouping ?? [],
  //   );
  //   const [hoveredColumn, setHoveredColumn] = useState<Partial<
  //     MRT_Column<TData>
  //   > | null>(initialState.hoveredColumn ?? null);
  //   const [hoveredRow, setHoveredRow] = useState<Partial<MRT_Row<TData>> | null>(
  //     initialState.hoveredRow ?? null,
  //   );
  //   const [isFullScreen, setIsFullScreen] = useState<boolean>(
  //     initialState?.isFullScreen ?? false,
  //   );
  //   const [pagination, onPaginationChange] = useState<MRT_PaginationState>(
  //     initialState?.pagination ?? { pageIndex: 0, pageSize: 10 },
  //   );
  //   const [showAlertBanner, setShowAlertBanner] = useState<boolean>(
  //     initialState?.showAlertBanner ?? false,
  //   );
  //   const [showColumnFilters, setShowColumnFilters] = useState<boolean>(
  //     initialState?.showColumnFilters ?? false,
  //   );
  //   const [showGlobalFilter, setShowGlobalFilter] = useState<boolean>(
  //     initialState?.showGlobalFilter ?? false,
  //   );
  //   const [showToolbarDropZone, setShowToolbarDropZone] = useState<boolean>(
  //     initialState?.showToolbarDropZone ?? false,
  //   );

  definedTableOptions.state = {
    //     actionCell,
    //     columnFilterFns,
    //     columnOrder,
    columnSizingInfo,
    //     creatingRow,
    //     density,
    //     draggingColumn,
    //     draggingRow,
    //     editingCell,
    //     editingRow,
    //     globalFilterFn,
    //     grouping,
    //     hoveredColumn,
    //     hoveredRow,
    //     isFullScreen,
    //     pagination,
    //     showAlertBanner,
    //     showColumnFilters,
    //     showGlobalFilter,
    //     showToolbarDropZone,
    ...definedTableOptions.state,
  };

  //The table options now include all state needed to help determine column visibility and order logic
  const statefulTableOptions =
    definedTableOptions as SRT_StatefulTableOptions<TData>;

  //don't recompute columnDefs while resizing column or dragging column/row
  const columnDefsRef = useRef<SRT_ColumnDef<TData>[]>([]);
  statefulTableOptions.columns = statefulTableOptions.state.columnSizingInfo
    .isResizingColumn // ||
    ? // statefulTableOptions.state.draggingColumn ||
      // statefulTableOptions.state.draggingRow
      columnDefsRef.current
    : prepareColumns({
        columnDefs: [
          // ...([
          //   showRowPinningColumn(statefulTableOptions) &&
          //     getMRT_RowPinningColumnDef(statefulTableOptions),
          //   showRowDragColumn(statefulTableOptions) &&
          //     getMRT_RowDragColumnDef(statefulTableOptions),
          //   showRowActionsColumn(statefulTableOptions) &&
          //     getMRT_RowActionsColumnDef(statefulTableOptions),
          //   showRowExpandColumn(statefulTableOptions) &&
          //     getMRT_RowExpandColumnDef(statefulTableOptions),
          showRowSelectionColumn(statefulTableOptions) &&
            getSRT_RowSelectColumnDef(statefulTableOptions),
          //   showRowNumbersColumn(statefulTableOptions) &&
          //     getMRT_RowNumbersColumnDef(statefulTableOptions),
          // ].filter(Boolean) as MRT_ColumnDef<TData>[]),
          ...statefulTableOptions.columns,
          // ...([
          //   showRowSpacerColumn(statefulTableOptions) &&
          //     getMRT_RowSpacerColumnDef(statefulTableOptions),
          // ].filter(Boolean) as MRT_ColumnDef<TData>[]),
        ],
        tableOptions: statefulTableOptions,
      });
  columnDefsRef.current = statefulTableOptions.columns;

  //if loading, generate blank rows to show skeleton loaders
  statefulTableOptions.data = useMemo(
    () =>
      (statefulTableOptions.state.isLoading ||
        statefulTableOptions.state.showSkeletons) &&
      !statefulTableOptions.data.length
        ? [
            ...Array(
              Math.min(statefulTableOptions.state.pagination.pageSize, 20),
            ).fill(null),
          ].map(() =>
            Object.assign(
              {},
              ...getAllLeafColumnDefs(statefulTableOptions.columns).map(
                (col) => ({
                  [getColumnId(col)]: null,
                }),
              ),
            ),
          )
        : statefulTableOptions.data,
    [
      statefulTableOptions.data,
      statefulTableOptions.state.isLoading,
      statefulTableOptions.state.showSkeletons,
    ],
  );

  // @ts-expect-error
  const table = useReactTable({
    //     onColumnOrderChange,
    onColumnSizingInfoChange,
    //     onGroupingChange,
    //     onPaginationChange,
    ...statefulTableOptions,
    //     globalFilterFn: statefulTableOptions.filterFns?.[globalFilterFn ?? 'fuzzy'],
  }) as SRT_TableInstance<TData>;

  table.refs = {
    // actionCellRef,
    // bottomToolbarRef,
    // editInputRefs,
    // filterInputRefs,
    lastSelectedRowId,
    // searchInputRef,
    tableContainerRef,
    // tableFooterRef,
    tableHeadCellRefs,
    tableHeadRef,
    tablePaperRef,
    // topToolbarRef,
  };

  //   table.setActionCell =
  //     statefulTableOptions.onActionCellChange ?? setActionCell;
  //   table.setCreatingRow = (row: MRT_Updater<MRT_Row<TData> | null | true>) => {
  //     let _row = row;
  //     if (row === true) {
  //       _row = createRow(table);
  //     }
  //     statefulTableOptions?.onCreatingRowChange?.(
  //       _row as MRT_Row<TData> | null,
  //     ) ?? _setCreatingRow(_row as MRT_Row<TData> | null);
  //   };
  //   table.setColumnFilterFns =
  //     statefulTableOptions.onColumnFilterFnsChange ?? setColumnFilterFns;
  //   table.setDensity = statefulTableOptions.onDensityChange ?? setDensity;
  //   table.setDraggingColumn =
  //     statefulTableOptions.onDraggingColumnChange ?? setDraggingColumn;
  //   table.setDraggingRow =
  //     statefulTableOptions.onDraggingRowChange ?? setDraggingRow;
  //   table.setEditingCell =
  //     statefulTableOptions.onEditingCellChange ?? setEditingCell;
  //   table.setEditingRow =
  //     statefulTableOptions.onEditingRowChange ?? setEditingRow;
  //   table.setGlobalFilterFn =
  //     statefulTableOptions.onGlobalFilterFnChange ?? setGlobalFilterFn;
  //   table.setHoveredColumn =
  //     statefulTableOptions.onHoveredColumnChange ?? setHoveredColumn;
  //   table.setHoveredRow =
  //     statefulTableOptions.onHoveredRowChange ?? setHoveredRow;
  //   table.setIsFullScreen =
  //     statefulTableOptions.onIsFullScreenChange ?? setIsFullScreen;
  //   table.setShowAlertBanner =
  //     statefulTableOptions.onShowAlertBannerChange ?? setShowAlertBanner;
  //   table.setShowColumnFilters =
  //     statefulTableOptions.onShowColumnFiltersChange ?? setShowColumnFilters;
  //   table.setShowGlobalFilter =
  //     statefulTableOptions.onShowGlobalFilterChange ?? setShowGlobalFilter;
  //   table.setShowToolbarDropZone =
  //     statefulTableOptions.onShowToolbarDropZoneChange ?? setShowToolbarDropZone;

  useSRT_Effects(table);

  return table;
};
