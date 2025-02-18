
import { useState } from 'react';
import { type SRT_TableInstance, type SRT_RowData } from '../../types';
import { cn } from '../../utils/tailwind';
import { SRT_TableLoadingOverlay } from './SRT_TableLoadingOverlay';
import { SRT_Table } from './SRT_Table';

// originally MUI TableContainer, Mantine Box
type TableContainerProps = React.ComponentProps<'div'>;

export interface SRT_TableContainerProps<TData extends SRT_RowData>
extends TableContainerProps {
    table: SRT_TableInstance<TData>;
}

// const useIsomorphicLayoutEffect =
//   typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const SRT_TableContainer = <TData extends SRT_RowData>({
  table,
  ...rest
}: SRT_TableContainerProps<TData>) => {
  const {
    getState,
    options: {
    //   createDisplayMode,
    //   editDisplayMode,
    //   enableCellActions,
    //   enableStickyHeader,
    //   tableContainerProps,
    },
    refs: {tableContainerRef}
    // refs: { bottomToolbarRef, tableContainerRef, topToolbarRef },
  } = table;
  const {
    // actionCell,
    // creatingRow,
    // editingRow,
    // isFullScreen,
    isLoading,
    showLoadingOverlay,
  } = getState();

  const loading =
    showLoadingOverlay !== false && (isLoading || showLoadingOverlay);

  const [totalToolbarHeight, setTotalToolbarHeight] = useState(0);

  const tableContainerProps = {
    // ...parseFromValuesOrFunc(muiTableContainerProps, {
    //   table,
    // }),
    ...rest,
  };

  // measure DOM elements to calculate totalToolbarHeight, in SSR environments this would lead to 
  // an error since document and window objects are unavailable
//   useIsomorphicLayoutEffect(() => {
//     const topToolbarHeight =
//       typeof document !== 'undefined'
//         ? topToolbarRef.current?.offsetHeight ?? 0 
//         : 0;

//     const bottomToolbarHeight =
//       typeof document !== 'undefined'
//         ? bottomToolbarRef?.current?.offsetHeight ?? 0
//         : 0;

//     setTotalToolbarHeight(topToolbarHeight + bottomToolbarHeight);
//   });

//   const createModalOpen = createDisplayMode === 'modal' && creatingRow;
//   const editModalOpen = editDisplayMode === 'modal' && editingRow;

  return (
    <div
      aria-busy={loading}
      aria-describedby={loading ? 'mrt-progress' : undefined}
      {...tableContainerProps}
      ref={(node: HTMLDivElement) => {
        if (node) {
          tableContainerRef.current = node;
          if (tableContainerProps?.ref) {
            //@ts-expect-error
            tableContainerProps.ref.current = node;
          }
        }
      }}
      className={cn('relative w-full overflow-auto')}
    //   style={{
    //     maxHeight: isFullScreen
    //       ? `calc(100vh - ${totalToolbarHeight}px)`
    //       : undefined,
    //     ...tableContainerProps?.style,
    //   }}
    //   sx={(theme) => ({
    //     maxHeight: enableStickyHeader
    //       ? `clamp(350px, calc(100vh - ${totalToolbarHeight}px), 9999px)`
    //       : undefined,
    //     maxWidth: '100%',
    //     overflow: 'auto',
    //     position: 'relative',
    //     ...(parseFromValuesOrFunc(tableContainerProps?.sx, theme) as any),
    //   })}
    >
      {loading ? <SRT_TableLoadingOverlay table={table} /> : null}
      <SRT_Table table={table} />
      {/* {(createModalOpen || editModalOpen) && (
        <MRT_EditRowModal open table={table} />
      )}
      {enableCellActions && actionCell && <MRT_CellActionMenu table={table} />} */}
    </div>
  );
};
