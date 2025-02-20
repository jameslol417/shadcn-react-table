import { SRT_TableHeadRow } from './SRT_TableHeadRow';
import {
  type SRT_ColumnVirtualizer,
  type SRT_RowData,
  type SRT_TableInstance,
} from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { TableHeader } from '../ui/table';
// import { SRT_ToolbarAlertBanner } from '../toolbar/SRT_ToolbarAlertBanner';

type TableHeadProps = React.ComponentProps<'thead'>;

export interface SRT_TableHeadProps<TData extends SRT_RowData>
  extends TableHeadProps {
  columnVirtualizer?: SRT_ColumnVirtualizer;
  table: SRT_TableInstance<TData>;
}

export const SRT_TableHead = <TData extends SRT_RowData>({
  columnVirtualizer,
  table,
  ...rest
}: SRT_TableHeadProps<TData>) => {
  const {
    getState,
    options: {
      //   enableStickyHeader,
      //   layoutMode,
      //   muiTableHeadProps,
      //   positionToolbarAlertBanner,
    },
    refs: { tableHeadRef },
  } = table;
  //   const { isFullScreen, showAlertBanner } = getState();

  const tableHeadProps = {
    // ...parseFromValuesOrFunc(muiTableHeadProps, { table }),
    ...rest,
  };

  //   const stickyHeader = enableStickyHeader || isFullScreen;

  return (
    <TableHeader
      {...tableHeadProps}
      ref={(ref: HTMLTableSectionElement) => {
        tableHeadRef.current = ref;
        if (tableHeadProps?.ref) {
          // @ts-expect-error
          tableHeadProps.ref.current = ref;
        }
      }}
      className={'opacity-95'}
      //   sx={(theme) => ({
      //     display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
      //     opacity: 0.97,
      //     position: stickyHeader ? 'sticky' : 'relative',
      //     top: stickyHeader && layoutMode?.startsWith('grid') ? 0 : undefined,
      //     zIndex: stickyHeader ? 2 : undefined,
      //     ...(parseFromValuesOrFunc(tableHeadProps?.sx, theme) as any),
      //   })}
    >
      {
        // positionToolbarAlertBanner === 'head-overlay' &&
        //    (showAlertBanner || table.getSelectedRowModel().rows.length > 0) ? (
        // <tr
        //   style={{
        //     display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
        //   }}
        // >
        //   <th
        //     colSpan={table.getVisibleLeafColumns().length}
        //     style={{
        //       display: layoutMode?.startsWith('grid') ? 'grid' : undefined,
        //       padding: 0,
        //     }}
        //   >
        //     <SRT_ToolbarAlertBanner table={table} />
        //   </th>
        // </tr>
        // ) : (
        table.getHeaderGroups().map((headerGroup) => (
          <SRT_TableHeadRow
            columnVirtualizer={columnVirtualizer}
            headerGroup={headerGroup as any}
            key={headerGroup.id}
            table={table}
          />
        ))
        //   )
      }
    </TableHeader>
  );
};
