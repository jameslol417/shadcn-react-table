import { Paper, type PaperProps } from '../ui/paper';
// import { useTheme } from '@mui/material/styles';
import { SRT_TableContainer } from './SRT_TableContainer';
import { type SRT_RowData, type SRT_TableInstance } from '../../types';
import { parseFromValuesOrFunc } from '../../utils/utils';
import { cn } from '../../utils/tailwind';
// import { MRT_BottomToolbar } from '../toolbar/MRT_BottomToolbar';
// import { MRT_TopToolbar } from '../toolbar/MRT_TopToolbar';

export interface SRT_TablePaperProps<TData extends SRT_RowData> extends PaperProps {
    table: SRT_TableInstance<TData>
}

export const SRT_TablePaper = <TData extends SRT_RowData>({
  table,
  ...rest
}: SRT_TablePaperProps<TData>) => {
  const {
    getState,
    options: {
    //   enableBottomToolbar,
    //   enableTopToolbar,
    //   mrtTheme: { baseBackgroundColor },
    //   muiTablePaperProps,
    //   renderBottomToolbar,
    //   renderTopToolbar,
    },
    refs: { tablePaperRef },
  } = table;
//   const { isFullScreen } = getState();

  const paperProps = {
    // ...parseFromValuesOrFunc(muiTablePaperProps, { table }),
    ...rest,
  };

//   const theme = useTheme();

  return (
    <Paper
    //   elevation={2}
    //   onKeyDown={(e) => e.key === 'Escape' && table.setIsFullScreen(false)}
    //   {...paperProps}
      ref={(ref: HTMLDivElement) => {
        tablePaperRef.current = ref;
        if (paperProps?.ref) {
          //@ts-expect-error
          paperProps.ref.current = ref;
        }
      }}
    //   style={{
    //     ...(isFullScreen
    //       ? {
    //           bottom: 0,
    //           height: '100dvh',
    //           left: 0,
    //           margin: 0,
    //           maxHeight: '100dvh',
    //           maxWidth: '100dvw',
    //           padding: 0,
    //           position: 'fixed',
    //           right: 0,
    //           top: 0,
    //           width: '100dvw',
    //           zIndex: theme.zIndex.modal,
    //         }
    //       : {}),
    //     ...paperProps?.style,
    //   }}
    className={cn('overflow-hidden')}
    //   sx={(theme) => ({
    //     backgroundColor: baseBackgroundColor,
    //     backgroundImage: 'unset',
    //     overflow: 'hidden',
    //     transition: 'all 100ms ease-in-out',
    //     ...(parseFromValuesOrFunc(paperProps?.sx, theme) as any),
    //   })}
    >
      {/* {enableTopToolbar &&
        (parseFromValuesOrFunc(renderTopToolbar, { table }) ?? (
          <MRT_TopToolbar table={table} />
        ))} */}
      <SRT_TableContainer table={table} />
      {/* {enableBottomToolbar &&
        (parseFromValuesOrFunc(renderBottomToolbar, { table }) ?? (
          <MRT_BottomToolbar table={table} />
        ))} */}
    </Paper>
  );
};