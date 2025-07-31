/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Gruvbox Dark Hard color palette
const base16GruvboxDarkHardColors: ColorsTheme = {
  type: 'dark',
  Background: '#1d2021', // base00 - Default Background
  Foreground: '#d5c4a1', // base05 - Default Foreground
  LightBlue: '#83a598', // base0D - blue (Functions, Methods)
  AccentBlue: '#83a598', // base0D - blue (Functions, Methods)
  AccentPurple: '#d3869b', // base0E - purple (Keywords, Storage)
  AccentCyan: '#8ec07c', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#b8bb26', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#fabd2f', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#fb4934', // base08 - red (Variables, XML Tags)
  Comment: '#665c54', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#bdae93', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#83a598', '#b8bb26'],
};

// Create the theme with syntax highlighting rules
export const Base16GruvboxDarkHard: Theme = new Theme(
  'Base16 Gruvbox Dark Hard',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16GruvboxDarkHardColors.Background,
      color: base16GruvboxDarkHardColors.Foreground,
    },
    'hljs-comment': {
      color: base16GruvboxDarkHardColors.Comment,
    },
    'hljs-quote': {
      color: base16GruvboxDarkHardColors.Comment,
    },
    'hljs-keyword': {
      color: base16GruvboxDarkHardColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16GruvboxDarkHardColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16GruvboxDarkHardColors.AccentPurple,
    },
    'hljs-section': {
      color: base16GruvboxDarkHardColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16GruvboxDarkHardColors.AccentPurple,
    },
    'hljs-name': {
      color: base16GruvboxDarkHardColors.AccentPurple,
    },
    'hljs-string': {
      color: base16GruvboxDarkHardColors.AccentGreen,
    },
    'hljs-title': {
      color: base16GruvboxDarkHardColors.AccentYellow,
    },
    'hljs-type': {
      color: base16GruvboxDarkHardColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16GruvboxDarkHardColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16GruvboxDarkHardColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16GruvboxDarkHardColors.AccentYellow,
    },
    'hljs-link': {
      color: base16GruvboxDarkHardColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16GruvboxDarkHardColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16GruvboxDarkHardColors.AccentBlue,
    },
    'hljs-function': {
      color: base16GruvboxDarkHardColors.AccentBlue,
    },
    'hljs-class': {
      color: base16GruvboxDarkHardColors.AccentBlue,
    },
    'hljs-number': {
      color: base16GruvboxDarkHardColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16GruvboxDarkHardColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16GruvboxDarkHardColors.AccentRed,
    },
    'hljs-meta': {
      color: base16GruvboxDarkHardColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16GruvboxDarkHardColors.AccentRed,
    },
    'hljs-subst': {
      color: base16GruvboxDarkHardColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16GruvboxDarkHardColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16GruvboxDarkHardColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16GruvboxDarkHardColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16GruvboxDarkHardColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16GruvboxDarkHardColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16GruvboxDarkHardColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16GruvboxDarkHardColors,
);