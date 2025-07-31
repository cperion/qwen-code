/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Codeschool color palette
const base16CodeschoolColors: ColorsTheme = {
  type: 'dark',
  Background: '#232c31', // base00 - Default Background
  Foreground: '#9ea7a6', // base05 - Default Foreground
  LightBlue: '#484d79', // base0D - blue (Functions, Methods)
  AccentBlue: '#484d79', // base0D - blue (Functions, Methods)
  AccentPurple: '#c59820', // base0E - purple (Keywords, Storage)
  AccentCyan: '#b02f30', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#237986', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#a03b1e', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#2a5491', // base08 - red (Variables, XML Tags)
  Comment: '#3f4944', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#84898c', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#484d79', '#237986'],
};

// Create the theme with syntax highlighting rules
export const Base16Codeschool: Theme = new Theme(
  'Base16 Codeschool',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16CodeschoolColors.Background,
      color: base16CodeschoolColors.Foreground,
    },
    'hljs-comment': {
      color: base16CodeschoolColors.Comment,
    },
    'hljs-quote': {
      color: base16CodeschoolColors.Comment,
    },
    'hljs-keyword': {
      color: base16CodeschoolColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16CodeschoolColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16CodeschoolColors.AccentPurple,
    },
    'hljs-section': {
      color: base16CodeschoolColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16CodeschoolColors.AccentPurple,
    },
    'hljs-name': {
      color: base16CodeschoolColors.AccentPurple,
    },
    'hljs-string': {
      color: base16CodeschoolColors.AccentGreen,
    },
    'hljs-title': {
      color: base16CodeschoolColors.AccentYellow,
    },
    'hljs-type': {
      color: base16CodeschoolColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16CodeschoolColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16CodeschoolColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16CodeschoolColors.AccentYellow,
    },
    'hljs-link': {
      color: base16CodeschoolColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16CodeschoolColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16CodeschoolColors.AccentBlue,
    },
    'hljs-function': {
      color: base16CodeschoolColors.AccentBlue,
    },
    'hljs-class': {
      color: base16CodeschoolColors.AccentBlue,
    },
    'hljs-number': {
      color: base16CodeschoolColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16CodeschoolColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16CodeschoolColors.AccentRed,
    },
    'hljs-meta': {
      color: base16CodeschoolColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16CodeschoolColors.AccentRed,
    },
    'hljs-subst': {
      color: base16CodeschoolColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16CodeschoolColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16CodeschoolColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16CodeschoolColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16CodeschoolColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16CodeschoolColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16CodeschoolColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16CodeschoolColors,
);