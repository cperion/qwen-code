/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Mocha color palette
const base16MochaColors: ColorsTheme = {
  type: 'dark',
  Background: '#3B3228', // base00 - Default Background
  Foreground: '#d0c8c6', // base05 - Default Foreground
  LightBlue: '#8ab3b5', // base0D - blue (Functions, Methods)
  AccentBlue: '#8ab3b5', // base0D - blue (Functions, Methods)
  AccentPurple: '#a89bb9', // base0E - purple (Keywords, Storage)
  AccentCyan: '#7bbda4', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#beb55b', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#f4bc87', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#cb6077', // base08 - red (Variables, XML Tags)
  Comment: '#7e705a', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#b8afad', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#8ab3b5', '#beb55b'],
};

// Create the theme with syntax highlighting rules
export const Base16Mocha: Theme = new Theme(
  'Base16 Mocha',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16MochaColors.Background,
      color: base16MochaColors.Foreground,
    },
    'hljs-comment': {
      color: base16MochaColors.Comment,
    },
    'hljs-quote': {
      color: base16MochaColors.Comment,
    },
    'hljs-keyword': {
      color: base16MochaColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16MochaColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16MochaColors.AccentPurple,
    },
    'hljs-section': {
      color: base16MochaColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16MochaColors.AccentPurple,
    },
    'hljs-name': {
      color: base16MochaColors.AccentPurple,
    },
    'hljs-string': {
      color: base16MochaColors.AccentGreen,
    },
    'hljs-title': {
      color: base16MochaColors.AccentYellow,
    },
    'hljs-type': {
      color: base16MochaColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16MochaColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16MochaColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16MochaColors.AccentYellow,
    },
    'hljs-link': {
      color: base16MochaColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16MochaColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16MochaColors.AccentBlue,
    },
    'hljs-function': {
      color: base16MochaColors.AccentBlue,
    },
    'hljs-class': {
      color: base16MochaColors.AccentBlue,
    },
    'hljs-number': {
      color: base16MochaColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16MochaColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16MochaColors.AccentRed,
    },
    'hljs-meta': {
      color: base16MochaColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16MochaColors.AccentRed,
    },
    'hljs-subst': {
      color: base16MochaColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16MochaColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16MochaColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16MochaColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16MochaColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16MochaColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16MochaColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16MochaColors,
);