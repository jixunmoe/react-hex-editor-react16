import { css } from 'styled-components';

import { HexEditorTheme } from '../types';

import defaultTheme from '../themes/default';

export const hexEditorTheme = <K extends keyof HexEditorTheme>(key: K) =>
  ({ theme: { hexEditor = defaultTheme } }: { theme: { hexEditor: HexEditorTheme } }): HexEditorTheme[K] => {
    const value = hexEditor[key] || defaultTheme[key];
    return typeof value === 'number' ? `${value}px` : value;
  };
export default css`
  font-family: ${hexEditorTheme('fontFamily')};
  font-size: ${hexEditorTheme('fontSize')};

  color: ${hexEditorTheme('colorText')};
  background-color: ${hexEditorTheme('colorBackground')};

  &::selection {
    background-color: transparent;
  }

  *::selection {
    background-color: transparent;
  }

  /* Layout & Sizing */
  .gutter,
  .gutterHeader {
    width: ${hexEditorTheme('gutterWidth')};
    padding-top: ${hexEditorTheme('rowPaddingY')};
    padding-bottom: ${hexEditorTheme('rowPaddingY')};
  }

  .hexEditorHeader,
  .hexEditorBody {
    min-width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: auto;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${hexEditorTheme('colorScrollbackThumb')};

      &:hover {
        background-color: ${hexEditorTheme('colorScrollbackThumbHover')};
      }
    }

    &::-webkit-scrollbar-track {
      background-color: ${hexEditorTheme('colorScrollbackTrack')};
    }

    &::-webkit-scrollbar-button {
      background-color: ${hexEditorTheme('colorScrollbackThumb')};
      height: 0;
    }
  }

  .hexEditorRow,
  .hexEditorRowHeader {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .byteValues,
  .asciiValues {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .asciiValue,
  .asciiHeader,
  .byteValue,
  .byteHeader,
  .gutter,
  .gutterHeader,
  .offsetLabel,
  .offsetLabelHeader {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .offsetLabel,
  .offsetLabelHeader {
    padding: ${hexEditorTheme('rowPaddingY')} ${hexEditorTheme('labelPaddingX')};
  }

  .byteValue,
  .byteHeader {
    text-transform: ${hexEditorTheme('textTransform')};

    > .nybbleHighValue,
    > .nybbleLowValue {
      padding-top: ${hexEditorTheme('rowPaddingY')};
      padding-bottom: ${hexEditorTheme('rowPaddingY')};
    }

    > .nybbleHighValue {
      padding-left: ${hexEditorTheme('bytePaddingX')};
    }

    > .nybbleLowValue {
      padding-right: ${hexEditorTheme('bytePaddingX')};
    }
  }

  .asciiValue,
  .asciiHeader {
    padding: ${hexEditorTheme('rowPaddingY')} ${hexEditorTheme('asciiPaddingX')};
  }

  /* Colors */
  .gutter,
  .gutterHeader {
    background-color: ${hexEditorTheme('colorBackground')};
  }

  .offsetLabel,
  .offsetLabelHeader {
    background-color: ${hexEditorTheme('colorBackgroundLabel')};
    color: ${hexEditorTheme('colorTextLabel')};

    &.currentRow {
      background-color: ${hexEditorTheme('colorBackgroundLabelCurrent')};
      color: ${hexEditorTheme('colorTextLabelCurrent')};
    }
  }

  .byteHeader {
    background-color: ${hexEditorTheme('colorBackgroundLabel')};
    color: ${hexEditorTheme('colorTextLabel')};

    &.currentColumn {
      background-color: ${hexEditorTheme('colorBackgroundLabelCurrent')};
      color: ${hexEditorTheme('colorTextLabelCurrent')};
    }
  }

  .asciiHeader {
    background-color: ${hexEditorTheme('colorBackgroundLabel')};
    color: ${hexEditorTheme('colorTextLabel')};
  }

  .byteValue {
    &.even {
      background-color: ${hexEditorTheme('colorBackgroundEven')};
      color: ${hexEditorTheme('colorTextEven')};

      &.currentColumn {
        background-color: ${hexEditorTheme('colorBackgroundColumnEven')};
        color: ${hexEditorTheme('colorTextColumnEven')};
      }

      &.currentRow {
        background-color: ${hexEditorTheme('colorBackgroundRowEven')};
        color: ${hexEditorTheme('colorTextRowEven')};
      }
    }

    &.odd {
      background-color: ${hexEditorTheme('colorBackgroundOdd')};
      color: ${hexEditorTheme('colorTextOdd')};

      &.currentColumn {
        background-color: ${hexEditorTheme('colorBackgroundColumnOdd')};
        color: ${hexEditorTheme('colorTextColumnOdd')};
      }

      &.currentRow {
        background-color: ${hexEditorTheme('colorBackgroundRowOdd')};
        color: ${hexEditorTheme('colorTextRowOdd')};
      }
    }

    &.cursor > .nybbleHighValue,
    &.cursor > .nybbleLowValue {
      background-color: ${hexEditorTheme('colorBackgroundCursor')};
      color: ${hexEditorTheme('colorTextCursor')};
    }

    &.cursorHigh.highlight > .nybbleHighValue,
    &.cursorLow.highlight > .nybbleLowValue {
      background-color: ${hexEditorTheme('colorBackgroundCursorHighlight')};
      color: ${hexEditorTheme('colorTextCursorHighlight')};
    }

    &.selection > .nybbleHighValue,
    &.selection > .nybbleLowValue {
      background-color: ${hexEditorTheme('colorBackgroundSelection')};
      color: ${hexEditorTheme('colorTextSelection')};
    }

    &.selectionCursor > .nybbleHighValue,
    &.selectionCursor > .nybbleLowValue {
      background-color: ${hexEditorTheme('colorBackgroundSelectionCursor')};
      color: ${hexEditorTheme('colorTextSelectionCursor')};
    }
  }

  &.editAscii .byteValue,
  &.notFocused .byteValue {
    &.cursor > .nybbleHighValue,
    &.cursor > .nybbleLowValue {
      background-color: ${hexEditorTheme('colorBackgroundInactiveCursor')};
      color: ${hexEditorTheme('colorTextInactiveCursor')};
    }

    &.cursorHigh.highlight > .nybbleHighValue,
    &.cursorLow.highlight > .nybbleLowValue {
      background-color: ${hexEditorTheme('colorBackgroundInactiveCursorHighlight')};
      color: ${hexEditorTheme('colorTextInactiveCursorHighlight')};
    }

    &.selection > .nybbleHighValue,
    &.selection > .nybbleLowValue {
      background-color: ${hexEditorTheme('colorBackgroundInactiveSelection')};
      color: ${hexEditorTheme('colorTextInactiveSelection')};
    }

    &.selectionCursor > .nybbleHighValue,
    &.selectionCursor > .nybbleLowValue {
      background-color: ${hexEditorTheme('colorBackgroundInactiveSelectionCursor')};
      color: ${hexEditorTheme('colorTextInactiveSelectionCursor')};
    }
  }

  .asciiValue {
    &.cursor {
      background-color: ${hexEditorTheme('colorBackgroundCursor')};
      color: ${hexEditorTheme('colorTextCursor')};
    }

    &.cursor.highlight {
      background-color: ${hexEditorTheme('colorBackgroundCursorHighlight')};
      color: ${hexEditorTheme('colorTextCursorHighlight')};
    }

    &.selection {
      background-color: ${hexEditorTheme('colorBackgroundSelection')};
      color: ${hexEditorTheme('colorTextSelection')};
    }

    &.selectionCursor {
      background-color: ${hexEditorTheme('colorBackgroundSelectionCursor')};
      color: ${hexEditorTheme('colorTextSelectionCursor')};
    }
  }

  &.editHex .asciiValue,
  &.notFocused .asciiValue {
    &.cursor {
      background-color: ${hexEditorTheme('colorBackgroundInactiveCursor')};
      color: ${hexEditorTheme('colorTextInactiveCursor')};
    }

    &.cursor.highlight {
      background-color: ${hexEditorTheme('colorBackgroundInactiveCursorHighlight')};
      color: ${hexEditorTheme('colorTextInactiveCursorHighlight')};
    }

    &.selection {
      background-color: ${hexEditorTheme('colorBackgroundInactiveSelection')};
      color: ${hexEditorTheme('colorTextInactiveSelection')};
    }

    &.selectionCursor {
      background-color: ${hexEditorTheme('colorBackgroundInactiveSelectionCursor')};
      color: ${hexEditorTheme('colorTextInactiveSelectionCursor')};
    }
  }
`;
