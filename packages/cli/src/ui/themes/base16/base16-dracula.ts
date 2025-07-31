/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Dracula color palette
const base16DraculaColors: ColorsTheme = {
  type: 'dark',
  Background: '#282936', // base00 - Default Background
  Foreground: '#e9e9f4', // base05 - Default Foreground
  LightBlue: '#62d6e8', // base0D - blue (Functions, Methods)
  AccentBlue: '#62d6e8', // base0D - blue (Functions, Methods)
  AccentPurple: '#b45bcf', // base0E - purple (Keywords, Storage)
  AccentCyan: '#a1efe4', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#ebff87', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#00f769', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#ea51b2', // base08 - red (Variables, XML Tags)
  Comment: '#626483', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#62d6e8', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#62d6e8', '#ebff87'],
};

// Create the theme with syntax highlighting rules
export const Base16Dracula: Theme = new Theme(
  'Base16 Dracula',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16DraculaColors.Background,
      color: base16DraculaColors.Foreground,
    },
    'hljs-comment': {
      color: base16DraculaColors.Comment,
    },
    'hljs-quote': {
      color: base16DraculaColors.Comment,
    },
    'hljs-keyword': {
      color: base16DraculaColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16DraculaColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16DraculaColors.AccentPurple,
    },
    'hljs-section': {
      color: base16DraculaColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16DraculaColors.AccentPurple,
    },
    'hljs-name': {
      color: base16DraculaColors.AccentPurple,
    },
    'hljs-string': {
      color: base16DraculaColors.AccentGreen,
    },
    'hljs-title': {
      color: base16DraculaColors.AccentYellow,
    },
    'hljs-type': {
      color: base16DraculaColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16DraculaColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16DraculaColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16DraculaColors.AccentYellow,
    },
    'hljs-link': {
      color: base16DraculaColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16DraculaColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16DraculaColors.AccentBlue,
    },
    'hljs-function': {
      color: base16DraculaColors.AccentBlue,
    },
    'hljs-class': {
      color: base16DraculaColors.AccentBlue,
    },
    'hljs-number': {
      color: base16DraculaColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16DraculaColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16DraculaColors.AccentRed,
    },
    'hljs-meta': {
      color: base16DraculaColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16DraculaColors.AccentRed,
    },
    'hljs-subst': {
      color: base16DraculaColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16DraculaColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16DraculaColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16DraculaColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16DraculaColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16DraculaColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16DraculaColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16DraculaColors,
);