/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Cupcake color palette
const base16CupcakeColors: ColorsTheme = {
  type: 'light',
  Background: '#fbf1f2', // base00 - Default Background
  Foreground: '#8b8198', // base05 - Default Foreground
  LightBlue: '#7297B9', // base0D - blue (Functions, Methods)
  AccentBlue: '#7297B9', // base0D - blue (Functions, Methods)
  AccentPurple: '#BB99B4', // base0E - purple (Keywords, Storage)
  AccentCyan: '#69A9A7', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#A3B367', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#DCB16C', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#D57E85', // base08 - red (Variables, XML Tags)
  Comment: '#bfb9c6', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#a59daf', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#7297B9', '#A3B367'],
};

// Create the theme with syntax highlighting rules
export const Base16Cupcake: Theme = new Theme(
  'Base16 Cupcake',
  'light',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16CupcakeColors.Background,
      color: base16CupcakeColors.Foreground,
    },
    'hljs-comment': {
      color: base16CupcakeColors.Comment,
    },
    'hljs-quote': {
      color: base16CupcakeColors.Comment,
    },
    'hljs-keyword': {
      color: base16CupcakeColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16CupcakeColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16CupcakeColors.AccentPurple,
    },
    'hljs-section': {
      color: base16CupcakeColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16CupcakeColors.AccentPurple,
    },
    'hljs-name': {
      color: base16CupcakeColors.AccentPurple,
    },
    'hljs-string': {
      color: base16CupcakeColors.AccentGreen,
    },
    'hljs-title': {
      color: base16CupcakeColors.AccentYellow,
    },
    'hljs-type': {
      color: base16CupcakeColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16CupcakeColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16CupcakeColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16CupcakeColors.AccentYellow,
    },
    'hljs-link': {
      color: base16CupcakeColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16CupcakeColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16CupcakeColors.AccentBlue,
    },
    'hljs-function': {
      color: base16CupcakeColors.AccentBlue,
    },
    'hljs-class': {
      color: base16CupcakeColors.AccentBlue,
    },
    'hljs-number': {
      color: base16CupcakeColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16CupcakeColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16CupcakeColors.AccentRed,
    },
    'hljs-meta': {
      color: base16CupcakeColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16CupcakeColors.AccentRed,
    },
    'hljs-subst': {
      color: base16CupcakeColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16CupcakeColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16CupcakeColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16CupcakeColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16CupcakeColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16CupcakeColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16CupcakeColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16CupcakeColors,
);