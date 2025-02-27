import {
  type SRT_Header,
  type SRT_RowData,
  type SRT_TableInstance,
} from '../../types';
import { cn } from '../../utils/tailwind';
export interface SRT_TableHeadCellResizeHandleProps<TData extends SRT_RowData> {
  //   extends DividerProps
  header: SRT_Header<TData>;
  table: SRT_TableInstance<TData>;
}

export const SRT_TableHeadCellResizeHandle = <TData extends SRT_RowData>({
  header,
  table,
  ...rest
}: SRT_TableHeadCellResizeHandleProps<TData>) => {
  const {
    getState,
    options: { columnResizeDirection, columnResizeMode },
    setColumnSizingInfo,
  } = table;
  // const { density } = getState();
  const { column } = header;

  const handler = header.getResizeHandler();

  // const mx =
  //   density === 'compact'
  //     ? '-8px'
  //     : density === 'comfortable'
  //       ? '-16px'
  //       : '-24px';
  const mx = '-16px'

  // const lr = column.columnDef.columnDefType === 'display' ? '4px' : '0';
  const lr = '0'

  return (
    <div
      onDoubleClick={() => {
        setColumnSizingInfo((old) => ({
          ...old,
          isResizingColumn: false,
        }));
        column.resetSize();
      }}
      onMouseDown={handler}
      onTouchStart={handler}
      style={{
        transform:
          column.getIsResizing() && columnResizeMode === 'onEnd'
            ? `translateX(${
                (columnResizeDirection === 'rtl' ? -1 : 1) *
                (getState().columnSizingInfo.deltaOffset ?? 0)
              }px)`
            : undefined,
      }}
      className={cn(
        'TableHeadCell-ResizeHandle-Wrapper px-1 cursor-col-resize absolute',
         columnResizeDirection === 'rtl' ? 'left-0 ml-[-16px]' : 'right-0 mr-[-16px]',
      )}
    >
      <div
        className={cn(
          'TableHeadCell-ResizeHandle-Divider',
          'flex h-6 border-2 rounded-sm touch-none select-none z-4 transition-all',
          {
            'translate-x-1': true, // Equivalent to `transform: translateX(4px)`
            'transition-none': column.getIsResizing(), // Disables transition when resizing
          },
        )}
      ></div>
      {/* <Divider
        flexItem
        orientation="vertical"
        sx={(theme) => ({
          borderRadius: '2px',
          ...(parseFromValuesOrFunc(rest?.sx, theme) as any),
        })}
      /> */}
    </div>
  );
};
