import { type Range, defaultRangeExtractor } from '@tanstack/react-virtual';

export const extraIndexRangeExtractor = (
    range: Range,  // The virtualized range of visible items
    draggingIndex?: number,  // An optional index that may need to be included
  ) => {
    const newIndexes = defaultRangeExtractor(range); // Get the default list of indices within the range
  
    if (draggingIndex === undefined) return newIndexes; // If there's no dragging index, return the default range.
  
    // If draggingIndex is outside (above) the visible range, add it to the start
    if (
      draggingIndex >= 0 &&
      draggingIndex < Math.max(range.startIndex - range.overscan, 0)
    ) {
      newIndexes.unshift(draggingIndex);
    }
  
    // If draggingIndex is outside (below) the visible range, add it to the end
    if (draggingIndex >= 0 && draggingIndex > range.endIndex + range.overscan) {
      newIndexes.push(draggingIndex);
    }
  
    return newIndexes;
  };