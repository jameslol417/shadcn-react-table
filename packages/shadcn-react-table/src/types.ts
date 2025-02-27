import {
  type Dispatch,
  type ReactNode,
  type RefObject,
  type SetStateAction,
} from 'react';
import {
  type AccessorFn,
  type AggregationFn,
  type Cell,
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnOrderState,
  type ColumnPinningState,
  type ColumnSizingInfoState,
  type ColumnSizingState,
  type DeepKeys,
  type DeepValue,
  type ExpandedState,
  type FilterFn,
  type GroupingState,
  type Header,
  type HeaderGroup,
  type OnChangeFn,
  type PaginationState,
  type Row,
  type RowSelectionState,
  type SortingFn,
  type SortingState,
  type Table,
  type TableOptions,
  type TableState,
  type Updater,
  type VisibilityState,
} from '@tanstack/react-table';
import {
  type VirtualItem,
  type Virtualizer,
  type VirtualizerOptions,
} from '@tanstack/react-virtual';
//   import { type AlertProps } from '@mui/material/Alert';
//   import { type AutocompleteProps } from '@mui/material/Autocomplete';
//   import { type BoxProps } from '@mui/material/Box';
//   import { type ButtonProps } from '@mui/material/Button';
//   import { type CheckboxProps } from '@mui/material/Checkbox';
//   import { type ChipProps } from '@mui/material/Chip';
//   import { type CircularProgressProps } from '@mui/material/CircularProgress';
//   import { type DialogProps } from '@mui/material/Dialog';
//   import { type IconButtonProps } from '@mui/material/IconButton';
//   import { type LinearProgressProps } from '@mui/material/LinearProgress';
//   import { type PaginationProps } from '@mui/material/Pagination';
//   import { type PaperProps } from '@mui/material/Paper';
//   import { type RadioProps } from '@mui/material/Radio';
//   import { type SelectProps } from '@mui/material/Select';
//   import { type SkeletonProps } from '@mui/material/Skeleton';
//   import { type SliderProps } from '@mui/material/Slider';
//   import { type TableProps } from '@mui/material/Table';
//   import { type TableBodyProps } from '@mui/material/TableBody';
//   import { type TableCellProps } from '@mui/material/TableCell';
//   import { type TableContainerProps } from '@mui/material/TableContainer';
//   import { type TableFooterProps } from '@mui/material/TableFooter';
//   import { type TableHeadProps } from '@mui/material/TableHead';
//   import { type TableRowProps } from '@mui/material/TableRow';
//   import { type TextFieldProps } from '@mui/material/TextField';
//   import { type Theme } from '@mui/material/styles';
//   import {
//     type DatePickerProps,
//     type DateTimePickerProps,
//     type TimePickerProps,
//   } from '@mui/x-date-pickers';
//   import { type MRT_AggregationFns } from './fns/aggregationFns';
//   import { type MRT_FilterFns } from './fns/filterFns';
//   import { type MRT_SortingFns } from './fns/sortingFns';
//   import { type MRT_Icons } from './icons';

//   export type { MRT_Icons };
export type LiteralUnion<T extends U, U = string> =
  | T
  | (U & Record<never, never>);

export type Prettify<T> = { [K in keyof T]: T[K] } & unknown;

export type Xor<A, B> =
  | Prettify<A & { [k in keyof B]?: never }>
  | Prettify<B & { [k in keyof A]?: never }>;

//   export type DropdownOption =
//     | {
//         label?: string;
//         value: any;
//       }
//     | string;

//   export type MRT_DensityState = 'comfortable' | 'compact' | 'spacious';

//   export type MRT_ColumnFilterFnsState = Record<string, MRT_FilterOption>;

export type SRT_RowData = any;
//   export type MRT_RowData = Record<string, any>;

//   export type MRT_ColumnFiltersState = ColumnFiltersState;
//   export type MRT_ColumnOrderState = ColumnOrderState;
//   export type MRT_ColumnPinningState = ColumnPinningState;
export type SRT_ColumnSizingInfoState = ColumnSizingInfoState;
//   export type MRT_ColumnSizingState = ColumnSizingState;
//   export type MRT_ExpandedState = ExpandedState;
//   export type MRT_GroupingState = GroupingState;
//   export type MRT_PaginationState = PaginationState;
export type SRT_RowSelectionState = RowSelectionState;
//   export type MRT_SortingState = SortingState;
//   export type MRT_Updater<T> = Updater<T>;
export type SRT_VirtualItem = VirtualItem;
//   export type MRT_VisibilityState = VisibilityState;

//   export type MRT_VirtualizerOptions<
//     TScrollElement extends Element | Window = Element | Window,
//     TItemElement extends Element = Element,
//   > = VirtualizerOptions<TScrollElement, TItemElement>;

export type SRT_ColumnVirtualizer<
  TScrollElement extends Element | Window = HTMLDivElement,
  TItemElement extends Element = HTMLTableCellElement,
> = Virtualizer<TScrollElement, TItemElement> & {
  virtualColumns: SRT_VirtualItem[];
  virtualPaddingLeft?: number;
  virtualPaddingRight?: number;
};

export type SRT_RowVirtualizer<
  TScrollElement extends Element | Window = HTMLDivElement,
  TItemElement extends Element = HTMLTableRowElement,
> = Virtualizer<TScrollElement, TItemElement> & {
  virtualRows: SRT_VirtualItem[];
};

//   export type MRT_ColumnHelper<TData extends MRT_RowData> = {
//     accessor: <
//       TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
//       TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
//         ? TReturn
//         : TAccessor extends DeepKeys<TData>
//           ? DeepValue<TData, TAccessor>
//           : never,
//     >(
//       accessor: TAccessor,
//       column: MRT_DisplayColumnDef<TData, TValue>,
//     ) => MRT_ColumnDef<TData, TValue>;
//     display: (column: MRT_DisplayColumnDef<TData>) => MRT_ColumnDef<TData>;
//     group: (column: MRT_GroupColumnDef<TData>) => MRT_ColumnDef<TData>;
//   };

//   export interface MRT_Localization {
//     // language of the localization as BCP 47 language tag for number formatting
//     language: string;
//     actions: string;
//     and: string;
//     cancel: string;
//     changeFilterMode: string;
//     changeSearchMode: string;
//     clearFilter: string;
//     clearSearch: string;
//     clearSelection: string;
//     clearSort: string;
//     clickToCopy: string;
//     collapse: string;
//     collapseAll: string;
//     columnActions: string;
//     copiedToClipboard: string;
//     copy: string;
//     dropToGroupBy: string;
//     edit: string;
//     expand: string;
//     expandAll: string;
//     filterArrIncludes: string;
//     filterArrIncludesAll: string;
//     filterArrIncludesSome: string;
//     filterBetween: string;
//     filterBetweenInclusive: string;
//     filterByColumn: string;
//     filterContains: string;
//     filterEmpty: string;
//     filterEndsWith: string;
//     filterEquals: string;
//     filterEqualsString: string;
//     filterFuzzy: string;
//     filterGreaterThan: string;
//     filterGreaterThanOrEqualTo: string;
//     filterIncludesString: string;
//     filterIncludesStringSensitive: string;
//     filteringByColumn: string;
//     filterInNumberRange: string;
//     filterLessThan: string;
//     filterLessThanOrEqualTo: string;
//     filterMode: string;
//     filterNotEmpty: string;
//     filterNotEquals: string;
//     filterStartsWith: string;
//     filterWeakEquals: string;
//     goToFirstPage: string;
//     goToLastPage: string;
//     goToNextPage: string;
//     goToPreviousPage: string;
//     grab: string;
//     groupByColumn: string;
//     groupedBy: string;
//     hideAll: string;
//     hideColumn: string;
//     max: string;
//     min: string;
//     move: string;
//     noRecordsToDisplay: string;
//     noResultsFound: string;
//     of: string;
//     or: string;
//     pin: string;
//     pinToLeft: string;
//     pinToRight: string;
//     resetColumnSize: string;
//     resetOrder: string;
//     rowActions: string;
//     rowNumber: string;
//     rowNumbers: string;
//     rowsPerPage: string;
//     save: string;
//     search: string;
//     select: string;
//     selectedCountOfRowCountRowsSelected: string;
//     showAll: string;
//     showAllColumns: string;
//     showHideColumns: string;
//     showHideFilters: string;
//     showHideSearch: string;
//     sortByColumnAsc: string;
//     sortByColumnDesc: string;
//     sortedByColumnAsc: string;
//     sortedByColumnDesc: string;
//     thenBy: string;
//     toggleDensity: string;
//     toggleFullScreen: string;
//     toggleSelectAll: string;
//     toggleSelectRow: string;
//     toggleVisibility: string;
//     ungroupByColumn: string;
//     unpin: string;
//     unpinAll: string;
//   }

//   export interface MRT_Theme {
//     baseBackgroundColor: string;
//     cellNavigationOutlineColor: string;
//     draggingBorderColor: string;
//     matchHighlightColor: string;
//     menuBackgroundColor: string;
//     pinnedRowBackgroundColor: string;
//     selectedRowBackgroundColor: string;
//   }

export interface SRT_RowModel<TData extends SRT_RowData> {
  flatRows: SRT_Row<TData>[];
  rows: SRT_Row<TData>[];
  rowsById: { [key: string]: SRT_Row<TData> };
}

export type SRT_TableInstance<TData extends SRT_RowData> = Omit<
  Table<TData>,
  | 'getAllColumns'
  | 'getAllFlatColumns'
  | 'getAllLeafColumns'
  | 'getBottomRows'
  | 'getCenterLeafColumns'
  | 'getCenterRows'
  | 'getColumn'
  | 'getExpandedRowModel'
  | 'getFlatHeaders'
  | 'getFooterGroups'
  | 'getHeaderGroups'
  | 'getLeafHeaders'
  | 'getLeftLeafColumns'
  | 'getPaginationRowModel'
  | 'getPreFilteredRowModel'
  | 'getPrePaginationRowModel'
  | 'getRightLeafColumns'
  | 'getRowModel'
  | 'getSelectedRowModel'
  | 'getState'
  | 'getTopRows'
  | 'options'
> & {
  getAllColumns: () => SRT_Column<TData>[];
  getAllFlatColumns: () => SRT_Column<TData>[];
  getAllLeafColumns: () => SRT_Column<TData>[];
  getBottomRows: () => SRT_Row<TData>[];
  getCenterLeafColumns: () => SRT_Column<TData>[];
  getCenterRows: () => SRT_Row<TData>[];
  getColumn: (columnId: string) => SRT_Column<TData>;
  getExpandedRowModel: () => SRT_RowModel<TData>;
  getFlatHeaders: () => SRT_Header<TData>[];
  getFooterGroups: () => SRT_HeaderGroup<TData>[];
  getHeaderGroups: () => SRT_HeaderGroup<TData>[];
  getLeafHeaders: () => SRT_Header<TData>[];
  getLeftLeafColumns: () => SRT_Column<TData>[];
  getPaginationRowModel: () => SRT_RowModel<TData>;
  getPreFilteredRowModel: () => SRT_RowModel<TData>;
  getPrePaginationRowModel: () => SRT_RowModel<TData>;
  getRightLeafColumns: () => SRT_Column<TData>[];
  getRowModel: () => SRT_RowModel<TData>;
  getSelectedRowModel: () => SRT_RowModel<TData>;
  getState: () => SRT_TableState<TData>;
  getTopRows: () => SRT_Row<TData>[];
  options: SRT_StatefulTableOptions<TData>;
  refs: {
    //       actionCellRef: RefObject<HTMLTableCellElement | null>;
    //       bottomToolbarRef: RefObject<HTMLDivElement | null>;
    //       editInputRefs: RefObject<Record<string, HTMLInputElement> | null>;
    //       filterInputRefs: RefObject<Record<string, HTMLInputElement> | null>;
    lastSelectedRowId: RefObject<null | string>;
    //       searchInputRef: RefObject<HTMLInputElement | null>;
    tableContainerRef: RefObject<HTMLDivElement | null>;
    //       tableFooterRef: RefObject<HTMLTableSectionElement | null>;
    tableHeadCellRefs: RefObject<Record<string, HTMLTableCellElement> | null>;
    tableHeadRef: RefObject<HTMLTableSectionElement | null>;
    tablePaperRef: RefObject<HTMLDivElement | null>;
    //       topToolbarRef: RefObject<HTMLDivElement | null>;
  };
  //     setActionCell: Dispatch<SetStateAction<MRT_Cell<TData> | null>>;
  //     setColumnFilterFns: Dispatch<SetStateAction<MRT_ColumnFilterFnsState>>;
  //     setCreatingRow: Dispatch<SetStateAction<MRT_Row<TData> | null | true>>;
  //     setDensity: Dispatch<SetStateAction<MRT_DensityState>>;
  //     setDraggingColumn: Dispatch<SetStateAction<MRT_Column<TData> | null>>;
  //     setDraggingRow: Dispatch<SetStateAction<MRT_Row<TData> | null>>;
  //     setEditingCell: Dispatch<SetStateAction<MRT_Cell<TData> | null>>;
  //     setEditingRow: Dispatch<SetStateAction<MRT_Row<TData> | null>>;
  //     setGlobalFilterFn: Dispatch<SetStateAction<MRT_FilterOption>>;
  //     setHoveredColumn: Dispatch<SetStateAction<Partial<MRT_Column<TData>> | null>>;
  //     setHoveredRow: Dispatch<SetStateAction<Partial<MRT_Row<TData>> | null>>;
  //     setIsFullScreen: Dispatch<SetStateAction<boolean>>;
  //     setShowAlertBanner: Dispatch<SetStateAction<boolean>>;
  //     setShowColumnFilters: Dispatch<SetStateAction<boolean>>;
  //     setShowGlobalFilter: Dispatch<SetStateAction<boolean>>;
  // setShowToolbarDropZone: Dispatch<SetStateAction<boolean>>;
};

export type SRT_DefinedTableOptions<TData extends SRT_RowData> =
  SRT_TableOptions<TData>;
//   export type MRT_DefinedTableOptions<TData extends MRT_RowData> = Omit<
//     MRT_TableOptions<TData>,
//     'icons' | 'localization' | 'mrtTheme'
//   > & {
//     icons: MRT_Icons;
//     localization: MRT_Localization;
//     mrtTheme: Required<MRT_Theme>;
//   };

export type SRT_StatefulTableOptions<TData extends SRT_RowData> =
  SRT_DefinedTableOptions<TData> & {
    state: Pick<
      SRT_TableState<TData>,
      //         | 'columnFilterFns'
      | 'columnOrder'
      | 'columnSizingInfo'
      // | 'creatingRow'
      // | 'density'
      // | 'draggingColumn'
      // | 'draggingRow'
      // | 'editingCell'
      // | 'editingRow'
      // | 'globalFilterFn'
      | 'grouping'
      // | 'hoveredColumn'
      // | 'hoveredRow'
      // | 'isFullScreen'
      | 'pagination'
      // | 'showAlertBanner'
      // | 'showColumnFilters'
      // | 'showGlobalFilter'
      // | 'showToolbarDropZone'
    >;
  };

// additional states that don't exist in Tanstack Table
export interface SRT_TableState<TData extends SRT_RowData> extends TableState {
  //     actionCell?: MRT_Cell<TData> | null;
  //     columnFilterFns: MRT_ColumnFilterFnsState;
  //     creatingRow: MRT_Row<TData> | null;
  //     density: MRT_DensityState;
  //     draggingColumn: MRT_Column<TData> | null;
  //     draggingRow: MRT_Row<TData> | null;
  //     editingCell: MRT_Cell<TData> | null;
  //     editingRow: MRT_Row<TData> | null;
  // globalFilterFn: SRT_FilterOption;
  //     hoveredColumn: Partial<MRT_Column<TData>> | null;
  //     hoveredRow: Partial<MRT_Row<TData>> | null;
  //     isFullScreen: boolean;
  isLoading: boolean;
  //     isSaving: boolean;
  //     showAlertBanner: boolean;
  //     showColumnFilters: boolean;
  //     showGlobalFilter: boolean;
  showLoadingOverlay: boolean;
  //     showProgressBars: boolean;
  showSkeletons: boolean;
  //     showToolbarDropZone: boolean;
}

export interface SRT_ColumnDef<TData extends SRT_RowData, TValue = unknown>
  extends Omit<
    ColumnDef<TData, TValue>,
    | 'accessorKey'
    //       | 'aggregatedCell'
    //       | 'aggregationFn'
    | 'cell'
    | 'columns'
    //       | 'filterFn'
    //       | 'footer'
    | 'header'
    | 'id'
    //       | 'sortingFn'
  > {
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify a function here to point to the correct property in the data object.
   *
   * @example accessorFn: (row) => row.username
   */
  accessorFn?: (originalRow: TData) => TValue;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   * Specify which key in the row this column should use to access the correct data.
   * Also supports Deep Key Dot Notation.
   *
   * @example accessorKey: 'username' //simple
   * @example accessorKey: 'name.firstName' //deep key dot notation
   */
  accessorKey?: DeepKeys<TData> | (string & {});
  //     AggregatedCell?: (props: {
  //       cell: MRT_Cell<TData, TValue>;
  //       column: MRT_Column<TData, TValue>;
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //       staticColumnIndex?: number;
  //       staticRowIndex?: number;
  //     }) => ReactNode;
  //     aggregationFn?: Array<MRT_AggregationFn<TData>> | MRT_AggregationFn<TData>;
  //     Cell?: (props: {
  // cell: SRT_Cell<TData, TValue>;
  // column: SRT_Column<TData, TValue>;
  //       renderedCellValue: ReactNode;
  //       row: MRT_Row<TData>;
  //       rowRef?: RefObject<HTMLTableRowElement | null>;
  //       staticColumnIndex?: number;
  //       staticRowIndex?: number;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     /**
  //      * Specify what type of column this is. Either `data`, `display`, or `group`. Defaults to `data`.
  //      * Leave this blank if you are just creating a normal data column.
  //      *
  //      * @default 'data'
  //      *
  //      * @example columnDefType: 'display'
  //      */
  //     columnDefType?: 'data' | 'display' | 'group';
  //     columnFilterModeOptions?: Array<
  //       LiteralUnion<string & MRT_FilterOption>
  //     > | null;
  columns?: SRT_ColumnDef<TData, TValue>[];
  //     Edit?: (props: {
  //       cell: MRT_Cell<TData, TValue>;
  //       column: MRT_Column<TData, TValue>;
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     editSelectOptions?:
  //       | ((props: {
  //           cell: MRT_Cell<TData, TValue>;
  //           column: MRT_Column<TData>;
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => DropdownOption[])
  //       | DropdownOption[];
  //     editVariant?: 'select' | 'text';
  //     enableClickToCopy?:
  //       | 'context-menu'
  //       | ((cell: MRT_Cell<TData>) => 'context-menu' | boolean)
  //       | boolean;
  //     enableColumnActions?: boolean;
  //     enableColumnDragging?: boolean;
  //     enableColumnFilterModes?: boolean;
  //     enableColumnOrdering?: boolean;
  //     enableEditing?: ((row: MRT_Row<TData>) => boolean) | boolean;
  //     enableFilterMatchHighlighting?: boolean;
  //     Filter?: (props: {
  //       column: MRT_Column<TData, TValue>;
  //       header: MRT_Header<TData>;
  //       rangeFilterIndex?: number;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     filterFn?: MRT_FilterFn<TData>;
  //     filterSelectOptions?: DropdownOption[];
  //     filterVariant?:
  //       | 'autocomplete'
  //       | 'checkbox'
  //       | 'date'
  //       | 'date-range'
  //       | 'datetime'
  //       | 'datetime-range'
  //       | 'multi-select'
  //       | 'range'
  //       | 'range-slider'
  //       | 'select'
  //       | 'text'
  //       | 'time'
  //       | 'time-range';
  //     /**
  //      * footer must be a string. If you want custom JSX to render the footer, you can also specify a `Footer` option. (Capital F)
  //      */
  //     footer?: string;
  //     Footer?:
  //       | ((props: {
  //           column: MRT_Column<TData, TValue>;
  //           footer: MRT_Header<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => ReactNode)
  //       | ReactNode;
  //     GroupedCell?: (props: {
  //       cell: MRT_Cell<TData, TValue>;
  //       column: MRT_Column<TData, TValue>;
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //       staticColumnIndex?: number;
  //       staticRowIndex?: number;
  //     }) => ReactNode;
  //     /**
  //      * If `layoutMode` is `'grid'` or `'grid-no-grow'`, you can specify the flex grow value for individual columns to still grow and take up remaining space, or set to `false`/0 to not grow.
  //      */
  //     grow?: boolean | number;
  /**
   * header must be a string. If you want custom JSX to render the header, you can also specify a `Header` option. (Capital H)
   */
  header: string;
  //     Header?:
  //       | ((props: {
  //           column: MRT_Column<TData, TValue>;
  //           header: MRT_Header<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => ReactNode)
  //       | ReactNode;
  /**
   * Either an `accessorKey` or a combination of an `accessorFn` and `id` are required for a data column definition.
   *
   * If you have also specified an `accessorFn`, SRT still needs to have a valid `id` to be able to identify the column uniquely.
   *
   * `id` defaults to the `accessorKey` or `header` if not specified.
   *
   * @default gets set to the same value as `accessorKey` by default
   */
  id?: LiteralUnion<string & keyof TData>;
  //     muiColumnActionsButtonProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => IconButtonProps)
  //       | IconButtonProps;
  //     muiColumnDragHandleProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => IconButtonProps)
  //       | IconButtonProps;
  //     muiCopyButtonProps?:
  //       | ((props: {
  //           cell: MRT_Cell<TData, TValue>;
  //           column: MRT_Column<TData>;
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => ButtonProps)
  //       | ButtonProps;
  //     muiEditTextFieldProps?:
  //       | ((props: {
  //           cell: MRT_Cell<TData, TValue>;
  //           column: MRT_Column<TData>;
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TextFieldProps)
  //       | TextFieldProps;
  //     muiFilterAutocompleteProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => AutocompleteProps<any, any, any, any>)
  //       | AutocompleteProps<any, any, any, any>;
  //     muiFilterCheckboxProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => CheckboxProps)
  //       | CheckboxProps;
  //     muiFilterDatePickerProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           rangeFilterIndex?: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => DatePickerProps<never>)
  //       | DatePickerProps<never>;
  //     muiFilterDateTimePickerProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           rangeFilterIndex?: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => DateTimePickerProps<never>)
  //       | DateTimePickerProps<never>;
  //     muiFilterSliderProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => SliderProps)
  //       | SliderProps;
  //     muiFilterTextFieldProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           rangeFilterIndex?: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => TextFieldProps)
  //       | TextFieldProps;
  //     muiFilterTimePickerProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           rangeFilterIndex?: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => TimePickerProps<never>)
  //       | TimePickerProps<never>;
  //     muiTableBodyCellProps?:
  //       | ((props: {
  //           cell: MRT_Cell<TData, TValue>;
  //           column: MRT_Column<TData>;
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TableCellProps)
  //       | TableCellProps;
  //     muiTableFooterCellProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TableCellProps)
  //       | TableCellProps;
  //     muiTableHeadCellProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TableCellProps)
  //       | TableCellProps;
  //     PlaceholderCell?: (props: {
  //       cell: MRT_Cell<TData, TValue>;
  //       column: MRT_Column<TData, TValue>;
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     renderCellActionMenuItems?: (props: {
  //       cell: MRT_Cell<TData>;
  //       closeMenu: () => void;
  //       column: MRT_Column<TData>;
  //       internalMenuItems: ReactNode[];
  //       row: MRT_Row<TData>;
  //       staticColumnIndex?: number;
  //       staticRowIndex?: number;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode[];
  //     renderColumnActionsMenuItems?: (props: {
  //       closeMenu: () => void;
  //       column: MRT_Column<TData>;
  //       internalColumnMenuItems: ReactNode[];
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode[];
  //     renderColumnFilterModeMenuItems?: (props: {
  //       column: MRT_Column<TData>;
  //       internalFilterOptions: MRT_InternalFilterOption[];
  //       onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode[];
  //     sortingFn?: MRT_SortingFn<TData>;
  //     visibleInShowHideMenu?: boolean;
}

//   export type MRT_DisplayColumnDef<
//     TData extends MRT_RowData,
//     TValue = unknown,
//   > = Omit<MRT_ColumnDef<TData, TValue>, 'accessorFn' | 'accessorKey'>;

//   export type MRT_GroupColumnDef<TData extends MRT_RowData> =
//     MRT_DisplayColumnDef<TData, any> & {
//       columns: MRT_ColumnDef<TData>[];
//     };

export type SRT_DefinedColumnDef<
  TData extends SRT_RowData,
  TValue = unknown,
> = Omit<SRT_ColumnDef<TData, TValue>, 'id'> & {
  id: string;
};
//   export type MRT_DefinedColumnDef<
//     TData extends MRT_RowData,
//     TValue = unknown,
//   > = Omit<MRT_ColumnDef<TData, TValue>, 'defaultDisplayColumn' | 'id'> & {
//     _filterFn: MRT_FilterOption;
//     defaultDisplayColumn: Partial<MRT_ColumnDef<TData, TValue>>;
//     id: string;
//   };

export type SRT_Column<TData extends SRT_RowData, TValue = unknown> = Omit<
  Column<TData, TValue>,
  'columnDef' | 'columns' // | 'filterFn' | 'footer' | 'header'
> & {
  columnDef: SRT_DefinedColumnDef<TData, TValue>;
  columns?: SRT_Column<TData, TValue>[];
};

//   export type MRT_Column<TData extends MRT_RowData, TValue = unknown> = Omit<
//     Column<TData, TValue>,
//     'columnDef' | 'columns' | 'filterFn' | 'footer' | 'header'
//   > & {
//     columnDef: MRT_DefinedColumnDef<TData, TValue>;
//     columns?: MRT_Column<TData, TValue>[];
//     filterFn?: MRT_FilterFn<TData>;
//     footer: string;
//     header: string;
//   };

export type SRT_Header<TData extends SRT_RowData> = Omit<
  Header<TData, unknown>,
  'column'
> & {
  column: SRT_Column<TData>;
};

export type SRT_HeaderGroup<TData extends SRT_RowData> = Omit<
  HeaderGroup<TData>,
  'headers'
> & {
  headers: SRT_Header<TData>[];
};

export type SRT_Row<TData extends SRT_RowData> = Omit<
  Row<TData>,
  | '_valuesCache'
  | 'getAllCells'
  | 'getParentRow'
  | 'getParentRows'
  | 'getRow'
  | 'getVisibleCells'
  | 'subRows'
> & {
  _valuesCache: Record<LiteralUnion<string & DeepKeys<TData>>, any>;
  getAllCells: () => SRT_Cell<TData>[];
  getParentRow: () => SRT_Row<TData> | null;
  getParentRows: () => SRT_Row<TData>[];
  getRow: () => SRT_Row<TData>;
  getVisibleCells: () => SRT_Cell<TData>[];
  subRows?: SRT_Row<TData>[];
};

export type SRT_Cell<TData extends SRT_RowData, TValue = unknown> = Omit<
  Cell<TData, TValue>,
  'column' | 'row'
> & {
  column: SRT_Column<TData, TValue>;
  row: SRT_Row<TData>;
};

//   export type MRT_AggregationOption = string & keyof typeof MRT_AggregationFns;

//   export type MRT_AggregationFn<TData extends MRT_RowData> =
//     | AggregationFn<TData>
//     | MRT_AggregationOption;

//   export type MRT_SortingOption = LiteralUnion<
//     string & keyof typeof MRT_SortingFns
//   >;

//   export type MRT_SortingFn<TData extends MRT_RowData> =
//     | MRT_SortingOption
//     | SortingFn<TData>;

//   export type MRT_FilterOption = LiteralUnion<
//     string & keyof typeof MRT_FilterFns
//   >;

//   export type MRT_FilterFn<TData extends MRT_RowData> =
//     | FilterFn<TData>
//     | MRT_FilterOption;

//   export type MRT_InternalFilterOption = {
//     divider: boolean;
//     label: string;
//     option: string;
//     symbol: string;
//   };

//   export type MRT_DisplayColumnIds =
//     | 'mrt-row-actions'
//     | 'mrt-row-drag'
//     | 'mrt-row-expand'
//     | 'mrt-row-numbers'
//     | 'mrt-row-pin'
//     | 'mrt-row-select'
//     | 'mrt-row-spacer';

//   /**
//    * `columns` and `data` props are the only required props, but there are over 170 other optional props.
//    *
//    * See more info on creating columns and data on the official docs site:
//    * @link https://www.material-react-table.com/docs/getting-started/usage
//    *
//    * See the full props list on the official docs site:
//    * @link https://www.material-react-table.com/docs/api/props
//    */
export interface SRT_TableOptions<TData extends SRT_RowData>
  extends Omit<
    Partial<TableOptions<TData>>,
    | 'columns'
    | 'data'
    //       | 'defaultColumn'
    | 'enableRowSelection'
    //       | 'expandRowsFn'
    | 'getRowId'
    //       | 'globalFilterFn'
    | 'initialState'
    | 'onStateChange'
    | 'state'
  > {
  //     columnFilterDisplayMode?: 'custom' | 'popover' | 'subheader';
  //     columnFilterModeOptions?: Array<
  //       LiteralUnion<string & MRT_FilterOption>
  //     > | null;
  columns: SRT_ColumnDef<TData, any>[];
  columnVirtualizerInstanceRef?: RefObject<SRT_ColumnVirtualizer | null>;
  columnVirtualizerOptions?:
    | ((props: {
        table: SRT_TableInstance<TData>;
      }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>)
    | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableCellElement>>;
  //     createDisplayMode?: 'custom' | 'modal' | 'row';
  data: TData[];
  //     /**
  //      * Instead of specifying a bunch of the same options for each column, you can just change an option in the `defaultColumn` table option to change a default option for all columns.
  //      */
  //     defaultColumn?: Partial<MRT_ColumnDef<TData>>;
  //     /**
  //      * Change the default options for display columns.
  //      */
  //     defaultDisplayColumn?: Partial<MRT_DisplayColumnDef<TData>>;
  //     displayColumnDefOptions?: Partial<{
  //       [key in MRT_DisplayColumnIds]: Partial<MRT_DisplayColumnDef<TData>>;
  //     }>;
  //     editDisplayMode?: 'cell' | 'custom' | 'modal' | 'row' | 'table';
  //     enableBatchRowSelection?: boolean;
  //     enableBottomToolbar?: boolean;
  //     enableCellActions?: ((cell: MRT_Cell<TData>) => boolean) | boolean;
  //     enableClickToCopy?:
  //       | 'context-menu'
  //       | ((cell: MRT_Cell<TData>) => 'context-menu' | boolean)
  //       | boolean;
  //     enableColumnActions?: boolean;
  //     enableColumnDragging?: boolean;
  //     enableColumnFilterModes?: boolean;
  //     enableColumnOrdering?: boolean;
  enableColumnVirtualization?: boolean;
  //     enableDensityToggle?: boolean;
  //     enableEditing?: ((row: MRT_Row<TData>) => boolean) | boolean;
  //     enableExpandAll?: boolean;
  //     enableFacetedValues?: boolean;
  //     enableFilterMatchHighlighting?: boolean;
  //     enableFullScreenToggle?: boolean;
  //     enableGlobalFilterModes?: boolean;
  //     enableGlobalFilterRankedResults?: boolean;
  //     enableKeyboardShortcuts?: boolean;
  //     enablePagination?: boolean;
  //     enableRowActions?: boolean;
  //     enableRowDragging?: boolean;
  //     enableRowNumbers?: boolean;
  //     enableRowOrdering?: boolean;
  enableRowSelection?: ((row: SRT_Row<TData>) => boolean) | boolean;
  enableRowVirtualization?: boolean;
  //     enableSelectAll?: boolean;
  //     enableStickyFooter?: boolean;
  //     enableStickyHeader?: boolean;
  //     enableTableFooter?: boolean;
  enableTableHead?: boolean;
  //     enableToolbarInternalActions?: boolean;
  //     enableTopToolbar?: boolean;
  //     expandRowsFn?: (dataRow: TData) => TData[];
  getRowId?: (
    originalRow: TData,
    index: number,
    parentRow: SRT_Row<TData>,
  ) => string;
  //     globalFilterFn?: MRT_FilterOption;
  //     globalFilterModeOptions?: MRT_FilterOption[] | null;
  //     icons?: Partial<MRT_Icons>;
  id?: string;
  initialState?: Partial<SRT_TableState<TData>>;
  //     /**
  //      * Changes which kind of CSS layout is used to render the table. `semantic` uses default semantic HTML elements, while `grid` adds CSS grid and flexbox styles
  //      */
  //     layoutMode?: 'grid' | 'grid-no-grow' | 'semantic';
  //     /**
  //      * Pass in either a locale imported from `material-react-table/locales/*` or a custom locale object.
  //      *
  //      * See the localization (i18n) guide for more info:
  //      * @link https://www.material-react-table.com/docs/guides/localization
  //      */
  //     localization?: Partial<MRT_Localization>;
  /**
   * Memoize cells, rows, or the entire table body to potentially improve render performance.
   *
   * @warning This will break some dynamic rendering features. See the memoization guide for more info:
   * @link https://www.material-react-table.com/docs/guides/memoize-components
   */
  memoMode?: 'cells' | 'rows' | 'table-body';
  //     mrtTheme?: ((theme: Theme) => Partial<MRT_Theme>) | Partial<MRT_Theme>;
  //     muiBottomToolbarProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => BoxProps)
  //       | BoxProps;
  //     muiCircularProgressProps?:
  //       | ((props: {
  //           table: MRT_TableInstance<TData>;
  //         }) => CircularProgressProps & { Component?: ReactNode })
  //       | (CircularProgressProps & { Component?: ReactNode });
  //     muiColumnActionsButtonProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => IconButtonProps)
  //       | IconButtonProps;
  //     muiColumnDragHandleProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => IconButtonProps)
  //       | IconButtonProps;
  //     muiCopyButtonProps?:
  //       | ((props: {
  //           cell: MRT_Cell<TData>;
  //           column: MRT_Column<TData>;
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => ButtonProps)
  //       | ButtonProps;
  //     muiCreateRowModalProps?:
  //       | ((props: {
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => DialogProps)
  //       | DialogProps;
  //     muiDetailPanelProps?:
  //       | ((props: {
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TableCellProps)
  //       | TableCellProps;
  //     muiEditRowDialogProps?:
  //       | ((props: {
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => DialogProps)
  //       | DialogProps;
  //     muiEditTextFieldProps?:
  //       | ((props: {
  //           cell: MRT_Cell<TData>;
  //           column: MRT_Column<TData>;
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TextFieldProps)
  //       | TextFieldProps;
  //     muiExpandAllButtonProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => IconButtonProps)
  //       | IconButtonProps;
  //     muiExpandButtonProps?:
  //       | ((props: {
  //           row: MRT_Row<TData>;
  //           staticRowIndex?: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => IconButtonProps)
  //       | IconButtonProps;
  //     muiFilterAutocompleteProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => AutocompleteProps<any, any, any, any>)
  //       | AutocompleteProps<any, any, any, any>;
  //     muiFilterCheckboxProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => CheckboxProps)
  //       | CheckboxProps;
  //     muiFilterDatePickerProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           rangeFilterIndex?: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => DatePickerProps<never>)
  //       | DatePickerProps<never>;
  //     muiFilterDateTimePickerProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           rangeFilterIndex?: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => DateTimePickerProps<never>)
  //       | DateTimePickerProps<never>;
  //     muiFilterSliderProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => SliderProps)
  //       | SliderProps;
  //     muiFilterTextFieldProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           rangeFilterIndex?: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => TextFieldProps)
  //       | TextFieldProps;
  //     muiFilterTimePickerProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           rangeFilterIndex?: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => TimePickerProps<never>)
  //       | TimePickerProps<never>;
  //     muiLinearProgressProps?:
  //       | ((props: {
  //           isTopToolbar: boolean;
  //           table: MRT_TableInstance<TData>;
  //         }) => LinearProgressProps)
  //       | LinearProgressProps;
  //     muiPaginationProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => Partial<
  //           PaginationProps & {
  //             SelectProps?: Partial<SelectProps>;
  //             disabled?: boolean;
  //             rowsPerPageOptions?: { label: string; value: number }[] | number[];
  //             showRowsPerPage?: boolean;
  //           }
  //         >)
  //       | Partial<
  //           PaginationProps & {
  //             SelectProps?: Partial<SelectProps>;
  //             disabled?: boolean;
  //             rowsPerPageOptions?: { label: string; value: number }[] | number[];
  //             showRowsPerPage?: boolean;
  //           }
  //         >;
  //     muiRowDragHandleProps?:
  //       | ((props: {
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => IconButtonProps)
  //       | IconButtonProps;
  //     muiSearchTextFieldProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => TextFieldProps)
  //       | TextFieldProps;
  //     muiSelectAllCheckboxProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => CheckboxProps)
  //       | CheckboxProps;
  //     muiSelectCheckboxProps?:
  //       | ((props: {
  //           row: MRT_Row<TData>;
  //           staticRowIndex?: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => CheckboxProps | RadioProps)
  //       | (CheckboxProps | RadioProps);
  //     muiSkeletonProps?:
  //       | ((props: {
  //           cell: MRT_Cell<TData>;
  //           column: MRT_Column<TData>;
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => SkeletonProps)
  //       | SkeletonProps;
  //     muiTableBodyCellProps?:
  //       | ((props: {
  //           cell: MRT_Cell<TData>;
  //           column: MRT_Column<TData>;
  //           row: MRT_Row<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TableCellProps)
  //       | TableCellProps;
  //     muiTableBodyProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => TableBodyProps)
  //       | TableBodyProps;
  //     muiTableBodyRowProps?:
  //       | ((props: {
  //           isDetailPanel?: boolean;
  //           row: MRT_Row<TData>;
  //           staticRowIndex: number;
  //           table: MRT_TableInstance<TData>;
  //         }) => TableRowProps)
  //       | TableRowProps;
  //     muiTableContainerProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => TableContainerProps)
  //       | TableContainerProps;
  //     muiTableFooterCellProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TableCellProps)
  //       | TableCellProps;
  //     muiTableFooterProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => TableFooterProps)
  //       | TableFooterProps;
  //     muiTableFooterRowProps?:
  //       | ((props: {
  //           footerGroup: MRT_HeaderGroup<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TableRowProps)
  //       | TableRowProps;
  //     muiTableHeadCellProps?:
  //       | ((props: {
  //           column: MRT_Column<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TableCellProps)
  //       | TableCellProps;
  //     muiTableHeadProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => TableHeadProps)
  //       | TableHeadProps;
  //     muiTableHeadRowProps?:
  //       | ((props: {
  //           headerGroup: MRT_HeaderGroup<TData>;
  //           table: MRT_TableInstance<TData>;
  //         }) => TableRowProps)
  //       | TableRowProps;
  //     muiTablePaperProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => PaperProps)
  //       | PaperProps;
  //     muiTableProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => TableProps)
  //       | TableProps;
  //     muiToolbarAlertBannerChipProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => ChipProps)
  //       | ChipProps;
  //     muiToolbarAlertBannerProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => AlertProps)
  //       | AlertProps;
  //     muiTopToolbarProps?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => BoxProps)
  //       | BoxProps;
  //     onActionCellChange?: OnChangeFn<MRT_Cell<TData> | null>;
  //     onColumnFilterFnsChange?: OnChangeFn<{ [key: string]: MRT_FilterOption }>;
  //     onCreatingRowCancel?: (props: {
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //     }) => void;
  //     onCreatingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
  //     onCreatingRowSave?: (props: {
  //       exitCreatingMode: () => void;
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //       values: Record<LiteralUnion<string & DeepKeys<TData>>, any>;
  //     }) => Promise<void> | void;
  //     onDensityChange?: OnChangeFn<MRT_DensityState>;
  //     onDraggingColumnChange?: OnChangeFn<MRT_Column<TData> | null>;
  //     onDraggingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
  //     onEditingCellChange?: OnChangeFn<MRT_Cell<TData> | null>;
  //     onEditingRowCancel?: (props: {
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //     }) => void;
  //     onEditingRowChange?: OnChangeFn<MRT_Row<TData> | null>;
  //     onEditingRowSave?: (props: {
  //       exitEditingMode: () => void;
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //       values: Record<LiteralUnion<string & DeepKeys<TData>>, any>;
  //     }) => Promise<void> | void;
  //     onGlobalFilterFnChange?: OnChangeFn<MRT_FilterOption>;
  //     onHoveredColumnChange?: OnChangeFn<Partial<MRT_Column<TData>> | null>;
  //     onHoveredRowChange?: OnChangeFn<Partial<MRT_Row<TData>> | null>;
  //     onIsFullScreenChange?: OnChangeFn<boolean>;
  //     onShowAlertBannerChange?: OnChangeFn<boolean>;
  //     onShowColumnFiltersChange?: OnChangeFn<boolean>;
  //     onShowGlobalFilterChange?: OnChangeFn<boolean>;
  //     onShowToolbarDropZoneChange?: OnChangeFn<boolean>;
  //     paginationDisplayMode?: 'custom' | 'default' | 'pages';
  //     positionActionsColumn?: 'first' | 'last';
  //     positionCreatingRow?: 'bottom' | 'top' | number;
  //     positionExpandColumn?: 'first' | 'last';
  //     positionGlobalFilter?: 'left' | 'none' | 'right';
  //     positionPagination?: 'both' | 'bottom' | 'none' | 'top';
  //     positionToolbarAlertBanner?: 'bottom' | 'head-overlay' | 'none' | 'top';
  //     positionToolbarDropZone?: 'both' | 'bottom' | 'none' | 'top';
  //     renderBottomToolbar?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => ReactNode)
  //       | ReactNode;
  //     renderBottomToolbarCustomActions?: (props: {
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     renderCaption?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => ReactNode)
  //       | ReactNode;
  //     renderCellActionMenuItems?: (props: {
  //       cell: MRT_Cell<TData>;
  //       closeMenu: () => void;
  //       column: MRT_Column<TData>;
  //       internalMenuItems: ReactNode[];
  //       row: MRT_Row<TData>;
  //       staticColumnIndex?: number;
  //       staticRowIndex?: number;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode[];
  //     renderColumnActionsMenuItems?: (props: {
  //       closeMenu: () => void;
  //       column: MRT_Column<TData>;
  //       internalColumnMenuItems: ReactNode[];
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode[];
  //     renderColumnFilterModeMenuItems?: (props: {
  //       column: MRT_Column<TData>;
  //       internalFilterOptions: MRT_InternalFilterOption[];
  //       onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode[];
  //     renderCreateRowDialogContent?: (props: {
  //       internalEditComponents: ReactNode[];
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     renderDetailPanel?: (props: {
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     renderEditRowDialogContent?: (props: {
  //       internalEditComponents: ReactNode[];
  //       row: MRT_Row<TData>;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  renderEmptyRowsFallback?: (props: {
    table: SRT_TableInstance<TData>;
  }) => ReactNode;
  //     renderGlobalFilterModeMenuItems?: (props: {
  //       internalFilterOptions: MRT_InternalFilterOption[];
  //       onSelectFilterMode: (filterMode: MRT_FilterOption) => void;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode[];
  //     renderRowActionMenuItems?: (props: {
  //       closeMenu: () => void;
  //       row: MRT_Row<TData>;
  //       staticRowIndex?: number;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode[] | undefined;
  //     renderRowActions?: (props: {
  //       cell: MRT_Cell<TData>;
  //       row: MRT_Row<TData>;
  //       staticRowIndex?: number;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     renderToolbarAlertBannerContent?: (props: {
  //       groupedAlert: ReactNode | null;
  //       selectedAlert: ReactNode | null;
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     renderToolbarInternalActions?: (props: {
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     renderTopToolbar?:
  //       | ((props: { table: MRT_TableInstance<TData> }) => ReactNode)
  //       | ReactNode;
  //     renderTopToolbarCustomActions?: (props: {
  //       table: MRT_TableInstance<TData>;
  //     }) => ReactNode;
  //     rowNumberDisplayMode?: 'original' | 'static';
  rowPinningDisplayMode?:
    | 'bottom'
    | 'select-bottom'
    | 'select-sticky'
    | 'select-top'
    | 'sticky'
    | 'top'
    | 'top-and-bottom';
  rowVirtualizerInstanceRef?: RefObject<SRT_RowVirtualizer | null>;
  rowVirtualizerOptions?:
    | ((props: {
        table: SRT_TableInstance<TData>;
      }) => Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>)
    | Partial<VirtualizerOptions<HTMLDivElement, HTMLTableRowElement>>;
  selectAllMode?: 'all' | 'page';
  /**
   * Manage state externally any way you want, then pass it back into MRT.
   */
  state?: Partial<SRT_TableState<TData>>;
}
