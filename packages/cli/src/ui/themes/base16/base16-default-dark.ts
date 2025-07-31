/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Default Dark color palette
const base16DefaultDarkColors: ColorsTheme = {
  type: 'dark',
  Background: '#181818', // base00 - Default Background
  Foreground: '#d8d8d8', // base05 - Default Foreground
  LightBlue: '#7cafc2', // base0D - blue (Functions, Methods)
  AccentBlue: '#7cafc2', // base0D - blue (Functions, Methods)
  AccentPurple: '#ba8baf', // base0E - purple (Keywords, Storage)
  AccentCyan: '#86c1b9', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#a1b56c', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#f7ca88', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#ab4642', // base08 - red (Variables, XML Tags)
  Comment: '#585858', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#b8b8b8', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#7cafc2', '#a1b56c'],
};

// Create the theme with syntax highlighting rules
export const Base16DefaultDark: Theme = new Theme(
  'Base16 Default Dark',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16DefaultDarkColors.Background,
      color: base16DefaultDarkColors.Foreground,
    },
    'hljs-comment': {
      color: base16DefaultDarkColors.Comment,
    },
    'hljs-quote': {
      color: base16DefaultDarkColors.Comment,
    },
    'hljs-keyword': {
      color: base16DefaultDarkColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16DefaultDarkColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16DefaultDarkColors.AccentPurple,
    },
    'hljs-section': {
      color: base16DefaultDarkColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16DefaultDarkColors.AccentPurple,
    },
    'hljs-name': {
      color: base16DefaultDarkColors.AccentPurple,
    },
    'hljs-string': {
      color: base16DefaultDarkColors.AccentGreen,
    },
    'hljs-title': {
      color: base16DefaultDarkColors.AccentYellow,
    },
    'hljs-type': {
      color: base16DefaultDarkColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16DefaultDarkColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16DefaultDarkColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16DefaultDarkColors.AccentYellow,
    },
    'hljs-link': {
      color: base16DefaultDarkColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16DefaultDarkColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16DefaultDarkColors.AccentBlue,
    },
    'hljs-function': {
      color: base16DefaultDarkColors.AccentBlue,
    },
    'hljs-class': {
      color: base16DefaultDarkColors.AccentBlue,
    },
    'hljs-number': {
      color: base16DefaultDarkColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16DefaultDarkColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16DefaultDarkColors.AccentRed,
    },
    'hljs-meta': {
      color: base16DefaultDarkColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16DefaultDarkColors.AccentRed,
    },
    'hljs-subst': {
      color: base16DefaultDarkColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16DefaultDarkColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16DefaultDarkColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16DefaultDarkColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16DefaultDarkColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16DefaultDarkColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16DefaultDarkColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16DefaultDarkColors,
);