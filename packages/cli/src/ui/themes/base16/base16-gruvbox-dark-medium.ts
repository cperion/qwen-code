/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Gruvbox Dark Medium color palette
const base16GruvboxDarkMediumColors: ColorsTheme = {
  type: 'dark',
  Background: '#282828', // base00 - Default Background
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
export const Base16GruvboxDarkMedium: Theme = new Theme(
  'Base16 Gruvbox Dark Medium',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16GruvboxDarkMediumColors.Background,
      color: base16GruvboxDarkMediumColors.Foreground,
    },
    'hljs-comment': {
      color: base16GruvboxDarkMediumColors.Comment,
    },
    'hljs-quote': {
      color: base16GruvboxDarkMediumColors.Comment,
    },
    'hljs-keyword': {
      color: base16GruvboxDarkMediumColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16GruvboxDarkMediumColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16GruvboxDarkMediumColors.AccentPurple,
    },
    'hljs-section': {
      color: base16GruvboxDarkMediumColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16GruvboxDarkMediumColors.AccentPurple,
    },
    'hljs-name': {
      color: base16GruvboxDarkMediumColors.AccentPurple,
    },
    'hljs-string': {
      color: base16GruvboxDarkMediumColors.AccentGreen,
    },
    'hljs-title': {
      color: base16GruvboxDarkMediumColors.AccentYellow,
    },
    'hljs-type': {
      color: base16GruvboxDarkMediumColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16GruvboxDarkMediumColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16GruvboxDarkMediumColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16GruvboxDarkMediumColors.AccentYellow,
    },
    'hljs-link': {
      color: base16GruvboxDarkMediumColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16GruvboxDarkMediumColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16GruvboxDarkMediumColors.AccentBlue,
    },
    'hljs-function': {
      color: base16GruvboxDarkMediumColors.AccentBlue,
    },
    'hljs-class': {
      color: base16GruvboxDarkMediumColors.AccentBlue,
    },
    'hljs-number': {
      color: base16GruvboxDarkMediumColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16GruvboxDarkMediumColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16GruvboxDarkMediumColors.AccentRed,
    },
    'hljs-meta': {
      color: base16GruvboxDarkMediumColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16GruvboxDarkMediumColors.AccentRed,
    },
    'hljs-subst': {
      color: base16GruvboxDarkMediumColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16GruvboxDarkMediumColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16GruvboxDarkMediumColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16GruvboxDarkMediumColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16GruvboxDarkMediumColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16GruvboxDarkMediumColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16GruvboxDarkMediumColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16GruvboxDarkMediumColors,
);