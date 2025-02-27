import { useId, useMemo } from 'react';
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import {
  type SRT_TableOptions,
  type SRT_RowData,
  type SRT_DefinedTableOptions,
} from '../types';

// export const MRT_DefaultColumn = {
//     filterVariant: 'text',
//     maxSize: 1000,
//     minSize: 40,
//     size: 180,
//   } as const;

//   export const MRT_DefaultDisplayColumn = {
//     columnDefType: 'display',
//     enableClickToCopy: false,
//     enableColumnActions: false,
//     enableColumnDragging: false,
//     enableColumnFilter: false,
//     enableColumnOrdering: false,
//     enableEditing: false,
//     enableGlobalFilter: false,
//     enableGrouping: false,
//     enableHiding: false,
//     enableResizing: false,
//     enableSorting: false,
//   } as const;

export const useSRT_TableOptions: <TData extends SRT_RowData>(
  tableOptions: SRT_TableOptions<TData>,
) => SRT_DefinedTableOptions<TData> = <TData extends SRT_RowData>({
  // aggregationFns,
  // autoResetExpanded = false,
  // columnFilterDisplayMode = 'subheader',
  columnResizeDirection,
  columnResizeMode = 'onChange',
  // createDisplayMode = 'modal',
  // defaultColumn,
  // defaultDisplayColumn,
  // editDisplayMode = 'modal',
  // enableBatchRowSelection = true,
  // enableBottomToolbar = true,
  // enableColumnActions = true,
  // enableColumnFilters = true,
  // enableColumnOrdering = false,
  // enableColumnPinning = false,
  enableColumnResizing = true, // different from MRT
  enableColumnVirtualization,
  // enableDensityToggle = true,
  // enableExpandAll = true,
  // enableExpanding,
  // enableFacetedValues = false,
  // enableFilterMatchHighlighting = true,
  // enableFilters = true,
  // enableFullScreenToggle = true,
  // enableGlobalFilter = true,
  // enableGlobalFilterRankedResults = true,
  // enableGrouping = false,
  // enableHiding = true,
  // enableKeyboardShortcuts = true,
  // enableMultiRowSelection = true,
  // enableMultiSort = true,
  // enablePagination = true,
  // enableRowPinning = false,
  enableRowSelection = true, // different from MRT
  enableRowVirtualization,
  // enableSelectAll = true,
  // enableSorting = true,
  // enableStickyHeader = false,
  // enableTableFooter = true,
  enableTableHead = true,
  // enableToolbarInternalActions = true,
  // enableTopToolbar = true,
  // filterFns,
  // icons,
  id = useId(),
  // layoutMode,
  // localization,
  // manualFiltering,
  // manualGrouping,
  // manualPagination,
  // manualSorting,
  // mrtTheme,
  // paginationDisplayMode = 'default',
  // positionActionsColumn = 'first',
  // positionCreatingRow = 'top',
  // positionExpandColumn = 'first',
  // positionGlobalFilter = 'right',
  // positionPagination = 'bottom',
  // positionToolbarAlertBanner = 'top',
  // positionToolbarDropZone = 'top',
  // rowNumberDisplayMode = 'static',
  // rowPinningDisplayMode = 'sticky',
  // selectAllMode = 'page',
  // sortingFns,
  ...rest
}: SRT_TableOptions<TData>) => {
  //   const theme = useTheme();

  //   icons = useMemo(() => ({ ...MRT_Default_Icons, ...icons }), [icons]);
  //   localization = useMemo(
  //     () => ({
  //       ...MRT_Localization_EN,
  //       ...localization,
  //     }),
  //     [localization],
  //   );
  //   mrtTheme = useMemo(() => getMRTTheme(mrtTheme, theme), [mrtTheme, theme]);
  //   aggregationFns = useMemo(
  //     () => ({ ...MRT_AggregationFns, ...aggregationFns }),
  //     [],
  //   );
  //   filterFns = useMemo(() => ({ ...MRT_FilterFns, ...filterFns }), []);
  //   sortingFns = useMemo(() => ({ ...MRT_SortingFns, ...sortingFns }), []);
  //   defaultColumn = useMemo(
  //     () => ({ ...MRT_DefaultColumn, ...defaultColumn }),
  //     [defaultColumn],
  //   );
  //   defaultDisplayColumn = useMemo(
  //     () => ({
  //       ...MRT_DefaultDisplayColumn,
  //       ...defaultDisplayColumn,
  //     }),
  //     [defaultDisplayColumn],
  //   );
  //cannot be changed after initialization
  [enableColumnVirtualization, enableRowVirtualization] = useMemo(
    () => [enableColumnVirtualization, enableRowVirtualization],
    [],
  );

  //   if (!columnResizeDirection) {
  //     columnResizeDirection = theme.direction || 'ltr';
  //   }

  //   layoutMode =
  //     layoutMode || (enableColumnResizing ? 'grid-no-grow' : 'semantic');
  //   if (
  //     layoutMode === 'semantic' &&
  //     (enableRowVirtualization || enableColumnVirtualization)
  //   ) {
  //     layoutMode = 'grid';
  //   }

  //   if (enableRowVirtualization) {
  //     enableStickyHeader = true;
  //   }

  //   if (enablePagination === false && manualPagination === undefined) {
  //     manualPagination = true;
  //   }

  //   if (!rest.data?.length) {
  //     manualFiltering = true;
  //     manualGrouping = true;
  //     manualPagination = true;
  //     manualSorting = true;
  //   }

  return {
    // aggregationFns,
    // autoResetExpanded,
    // columnFilterDisplayMode,
    columnResizeDirection,
    columnResizeMode,
    // createDisplayMode,
    // defaultColumn,
    // defaultDisplayColumn,
    // editDisplayMode,
    // enableBatchRowSelection,
    // enableBottomToolbar,
    // enableColumnActions,
    // enableColumnFilters,
    // enableColumnOrdering,
    // enableColumnPinning,
    enableColumnResizing,
    enableColumnVirtualization,
    // enableDensityToggle,
    // enableExpandAll,
    // enableExpanding,
    // enableFacetedValues,
    // enableFilterMatchHighlighting,
    // enableFilters,
    // enableFullScreenToggle,
    // enableGlobalFilter,
    // enableGlobalFilterRankedResults,
    // enableGrouping,
    // enableHiding,
    // enableKeyboardShortcuts,
    // enableMultiRowSelection,
    // enableMultiSort,
    // enablePagination,
    // enableRowPinning,
    enableRowSelection,
    enableRowVirtualization,
    // enableSelectAll,
    // enableSorting,
    // enableStickyHeader,
    // enableTableFooter,
    enableTableHead,
    // enableToolbarInternalActions,
    // enableTopToolbar,
    // filterFns,
    getCoreRowModel: getCoreRowModel(),
    // getExpandedRowModel:
    //   enableExpanding || enableGrouping ? getExpandedRowModel() : undefined,
    // getFacetedMinMaxValues: enableFacetedValues
    //   ? getFacetedMinMaxValues()
    //   : undefined,
    // getFacetedRowModel: enableFacetedValues ? getFacetedRowModel() : undefined,
    // getFacetedUniqueValues: enableFacetedValues
    //   ? getFacetedUniqueValues()
    //   : undefined,
    // getFilteredRowModel:
    //   (enableColumnFilters || enableGlobalFilter || enableFilters) &&
    //   !manualFiltering
    //     ? getFilteredRowModel()
    //     : undefined,
    // getGroupedRowModel:
    //   enableGrouping && !manualGrouping ? getGroupedRowModel() : undefined,
    // getPaginationRowModel:
    //   enablePagination && !manualPagination
    //     ? getPaginationRowModel()
    //     : undefined,
    // getSortedRowModel:
    //   enableSorting && !manualSorting ? getSortedRowModel() : undefined,
    // getSubRows: (row) => row?.subRows,
    // icons,
    id,
    // layoutMode,
    // localization,
    // manualFiltering,
    // manualGrouping,
    // manualPagination,
    // manualSorting,
    // mrtTheme,
    // paginationDisplayMode,
    // positionActionsColumn,
    // positionCreatingRow,
    // positionExpandColumn,
    // positionGlobalFilter,
    // positionPagination,
    // positionToolbarAlertBanner,
    // positionToolbarDropZone,
    // rowNumberDisplayMode,
    // rowPinningDisplayMode,
    // selectAllMode,
    // sortingFns,
    ...rest,
  } as SRT_DefinedTableOptions<TData>;
};
