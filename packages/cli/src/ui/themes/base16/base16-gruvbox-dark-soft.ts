/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Gruvbox Dark Soft color palette
const base16GruvboxDarkSoftColors: ColorsTheme = {
  type: 'dark',
  Background: '#32302f', // base00 - Default Background
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
export const Base16GruvboxDarkSoft: Theme = new Theme(
  'Base16 Gruvbox Dark Soft',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16GruvboxDarkSoftColors.Background,
      color: base16GruvboxDarkSoftColors.Foreground,
    },
    'hljs-comment': {
      color: base16GruvboxDarkSoftColors.Comment,
    },
    'hljs-quote': {
      color: base16GruvboxDarkSoftColors.Comment,
    },
    'hljs-keyword': {
      color: base16GruvboxDarkSoftColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16GruvboxDarkSoftColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16GruvboxDarkSoftColors.AccentPurple,
    },
    'hljs-section': {
      color: base16GruvboxDarkSoftColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16GruvboxDarkSoftColors.AccentPurple,
    },
    'hljs-name': {
      color: base16GruvboxDarkSoftColors.AccentPurple,
    },
    'hljs-string': {
      color: base16GruvboxDarkSoftColors.AccentGreen,
    },
    'hljs-title': {
      color: base16GruvboxDarkSoftColors.AccentYellow,
    },
    'hljs-type': {
      color: base16GruvboxDarkSoftColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16GruvboxDarkSoftColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16GruvboxDarkSoftColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16GruvboxDarkSoftColors.AccentYellow,
    },
    'hljs-link': {
      color: base16GruvboxDarkSoftColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16GruvboxDarkSoftColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16GruvboxDarkSoftColors.AccentBlue,
    },
    'hljs-function': {
      color: base16GruvboxDarkSoftColors.AccentBlue,
    },
    'hljs-class': {
      color: base16GruvboxDarkSoftColors.AccentBlue,
    },
    'hljs-number': {
      color: base16GruvboxDarkSoftColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16GruvboxDarkSoftColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16GruvboxDarkSoftColors.AccentRed,
    },
    'hljs-meta': {
      color: base16GruvboxDarkSoftColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16GruvboxDarkSoftColors.AccentRed,
    },
    'hljs-subst': {
      color: base16GruvboxDarkSoftColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16GruvboxDarkSoftColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16GruvboxDarkSoftColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16GruvboxDarkSoftColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16GruvboxDarkSoftColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16GruvboxDarkSoftColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16GruvboxDarkSoftColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16GruvboxDarkSoftColors,
);