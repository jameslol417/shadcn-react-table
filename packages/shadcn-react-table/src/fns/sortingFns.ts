import { type RankingInfo, compareItems } from '@tanstack/match-sorter-utils';
import { type Row, sortingFns } from '@tanstack/react-table';
import { type SRT_Row, type SRT_RowData } from '../types';

// Custom fuzzy sorting function
const fuzzy = <TData extends SRT_RowData>(
  rowA: Row<TData>,
  rowB: Row<TData>,
  columnId: string,
) => {
  let dir = 0;
  // Check if the column has fuzzy ranking metadata
  if (rowA.columnFiltersMeta[columnId]) {
    // Compare ranking metadata of both rows for the specified column
    dir = compareItems(
      rowA.columnFiltersMeta[columnId] as RankingInfo,
      rowB.columnFiltersMeta[columnId] as RankingInfo,
    );
  }
  // Provide a fallback for when the item ranks are equal
  return dir === 0
    ? sortingFns.alphanumeric(rowA as Row<any>, rowB as Row<any>, columnId)
    : dir;
};

// Extend the default sorting functions with the custom fuzzy sorting function
export const SRT_SortingFns = {
  ...sortingFns,
  fuzzy,
};

// Function to rank rows globally based on their best fuzzy match score
export const rankGlobalFuzzy = <TData extends SRT_RowData>(
  rowA: SRT_Row<TData>,
  rowB: SRT_Row<TData>,
) =>
  // Extract the highest ranking score from all columns in `columnFiltersMeta`
  Math.max(...Object.values(rowB.columnFiltersMeta).map((v: any) => v.rank)) -
  Math.max(...Object.values(rowA.columnFiltersMeta).map((v: any) => v.rank));
