import { type SRT_RowData, type SRT_TableInstance, type SRT_TableOptions } from "../types"

export const useShadCnReactTable = <TData extends SRT_RowData>(tableOptions: SRT_TableOptions<TData>,): SRT_TableInstance<TData> => use