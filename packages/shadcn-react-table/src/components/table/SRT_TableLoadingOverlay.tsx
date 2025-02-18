import { Spinner, SpinnerProps } from "../ui/spinner";
import { type SRT_RowData, type SRT_TableInstance } from "../../types";

export interface SRT_TableLoadingOverlayProps<TData extends SRT_RowData>
  extends SpinnerProps {
  table: SRT_TableInstance<TData>;
}

export const SRT_TableLoadingOverlay = <TData extends SRT_RowData>({
  table,
  ...rest
}: SRT_TableLoadingOverlayProps<TData>) => {
  const {
    options: {
      id,
    //   localization,
    //   mrtTheme: { baseBackgroundColor },
    //   muiCircularProgressProps,
    },
  } = table;

  const circularProgressProps = {
    // ...parseFromValuesOrFunc(muiCircularProgressProps, { table }),
    ...rest,
  };

  return (
    <div
    //   sx={{
    //     alignItems: 'center',
    //     backgroundColor: alpha(baseBackgroundColor, 0.5),
    //     bottom: 0,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     left: 0,
    //     maxHeight: '100vh',
    //     position: 'absolute',
    //     right: 0,
    //     top: 0,
    //     width: '100%',
    //     zIndex: 3,
    //   }}
    >
      {/* {circularProgressProps?.Component ?? ( */}
        <Spinner
        //   aria-label={localization.noRecordsToDisplay}
        //   id={`mrt-progress-${id}`}
          {...circularProgressProps}
        />
      {/* )} */}
    </div>
  );
};