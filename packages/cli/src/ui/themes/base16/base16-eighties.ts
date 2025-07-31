/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Eighties color palette
const base16EightiesColors: ColorsTheme = {
  type: 'dark',
  Background: '#2d2d2d', // base00 - Default Background
  Foreground: '#d3d0c8', // base05 - Default Foreground
  LightBlue: '#6699cc', // base0D - blue (Functions, Methods)
  AccentBlue: '#6699cc', // base0D - blue (Functions, Methods)
  AccentPurple: '#cc99cc', // base0E - purple (Keywords, Storage)
  AccentCyan: '#66cccc', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#99cc99', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#ffcc66', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#f2777a', // base08 - red (Variables, XML Tags)
  Comment: '#747369', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#a09f93', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#6699cc', '#99cc99'],
};

// Create the theme with syntax highlighting rules
export const Base16Eighties: Theme = new Theme(
  'Base16 Eighties',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16EightiesColors.Background,
      color: base16EightiesColors.Foreground,
    },
    'hljs-comment': {
      color: base16EightiesColors.Comment,
    },
    'hljs-quote': {
      color: base16EightiesColors.Comment,
    },
    'hljs-keyword': {
      color: base16EightiesColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16EightiesColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16EightiesColors.AccentPurple,
    },
    'hljs-section': {
      color: base16EightiesColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16EightiesColors.AccentPurple,
    },
    'hljs-name': {
      color: base16EightiesColors.AccentPurple,
    },
    'hljs-string': {
      color: base16EightiesColors.AccentGreen,
    },
    'hljs-title': {
      color: base16EightiesColors.AccentYellow,
    },
    'hljs-type': {
      color: base16EightiesColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16EightiesColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16EightiesColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16EightiesColors.AccentYellow,
    },
    'hljs-link': {
      color: base16EightiesColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16EightiesColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16EightiesColors.AccentBlue,
    },
    'hljs-function': {
      color: base16EightiesColors.AccentBlue,
    },
    'hljs-class': {
      color: base16EightiesColors.AccentBlue,
    },
    'hljs-number': {
      color: base16EightiesColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16EightiesColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16EightiesColors.AccentRed,
    },
    'hljs-meta': {
      color: base16EightiesColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16EightiesColors.AccentRed,
    },
    'hljs-subst': {
      color: base16EightiesColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16EightiesColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16EightiesColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16EightiesColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16EightiesColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16EightiesColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16EightiesColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16EightiesColors,
);