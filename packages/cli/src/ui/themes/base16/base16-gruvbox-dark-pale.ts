/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Gruvbox Dark Pale color palette
const base16GruvboxDarkPaleColors: ColorsTheme = {
  type: 'dark',
  Background: '#262626', // base00 - Default Background
  Foreground: '#dab997', // base05 - Default Foreground
  LightBlue: '#83adad', // base0D - blue (Functions, Methods)
  AccentBlue: '#83adad', // base0D - blue (Functions, Methods)
  AccentPurple: '#d485ad', // base0E - purple (Keywords, Storage)
  AccentCyan: '#85ad85', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#afaf00', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#ffaf00', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#d75f5f', // base08 - red (Variables, XML Tags)
  Comment: '#8a8a8a', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#949494', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#83adad', '#afaf00'],
};

// Create the theme with syntax highlighting rules
export const Base16GruvboxDarkPale: Theme = new Theme(
  'Base16 Gruvbox Dark Pale',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16GruvboxDarkPaleColors.Background,
      color: base16GruvboxDarkPaleColors.Foreground,
    },
    'hljs-comment': {
      color: base16GruvboxDarkPaleColors.Comment,
    },
    'hljs-quote': {
      color: base16GruvboxDarkPaleColors.Comment,
    },
    'hljs-keyword': {
      color: base16GruvboxDarkPaleColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16GruvboxDarkPaleColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16GruvboxDarkPaleColors.AccentPurple,
    },
    'hljs-section': {
      color: base16GruvboxDarkPaleColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16GruvboxDarkPaleColors.AccentPurple,
    },
    'hljs-name': {
      color: base16GruvboxDarkPaleColors.AccentPurple,
    },
    'hljs-string': {
      color: base16GruvboxDarkPaleColors.AccentGreen,
    },
    'hljs-title': {
      color: base16GruvboxDarkPaleColors.AccentYellow,
    },
    'hljs-type': {
      color: base16GruvboxDarkPaleColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16GruvboxDarkPaleColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16GruvboxDarkPaleColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16GruvboxDarkPaleColors.AccentYellow,
    },
    'hljs-link': {
      color: base16GruvboxDarkPaleColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16GruvboxDarkPaleColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16GruvboxDarkPaleColors.AccentBlue,
    },
    'hljs-function': {
      color: base16GruvboxDarkPaleColors.AccentBlue,
    },
    'hljs-class': {
      color: base16GruvboxDarkPaleColors.AccentBlue,
    },
    'hljs-number': {
      color: base16GruvboxDarkPaleColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16GruvboxDarkPaleColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16GruvboxDarkPaleColors.AccentRed,
    },
    'hljs-meta': {
      color: base16GruvboxDarkPaleColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16GruvboxDarkPaleColors.AccentRed,
    },
    'hljs-subst': {
      color: base16GruvboxDarkPaleColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16GruvboxDarkPaleColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16GruvboxDarkPaleColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16GruvboxDarkPaleColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16GruvboxDarkPaleColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16GruvboxDarkPaleColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16GruvboxDarkPaleColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16GruvboxDarkPaleColors,
);