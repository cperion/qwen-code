/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 OneDark color palette
const base16OneDarkColors: ColorsTheme = {
  type: 'dark',
  Background: '#282c34', // base00 - Default Background
  Foreground: '#abb2bf', // base05 - Default Foreground
  LightBlue: '#61afef', // base0D - blue (Functions, Methods)
  AccentBlue: '#61afef', // base0D - blue (Functions, Methods)
  AccentPurple: '#c678dd', // base0E - purple (Keywords, Storage)
  AccentCyan: '#56b6c2', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#98c379', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#e5c07b', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#e06c75', // base08 - red (Variables, XML Tags)
  Comment: '#545862', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#565c64', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#61afef', '#98c379'],
};

// Create the theme with syntax highlighting rules
export const Base16OneDark: Theme = new Theme(
  'Base16 OneDark',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16OneDarkColors.Background,
      color: base16OneDarkColors.Foreground,
    },
    'hljs-comment': {
      color: base16OneDarkColors.Comment,
    },
    'hljs-quote': {
      color: base16OneDarkColors.Comment,
    },
    'hljs-keyword': {
      color: base16OneDarkColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16OneDarkColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16OneDarkColors.AccentPurple,
    },
    'hljs-section': {
      color: base16OneDarkColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16OneDarkColors.AccentPurple,
    },
    'hljs-name': {
      color: base16OneDarkColors.AccentPurple,
    },
    'hljs-string': {
      color: base16OneDarkColors.AccentGreen,
    },
    'hljs-title': {
      color: base16OneDarkColors.AccentYellow,
    },
    'hljs-type': {
      color: base16OneDarkColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16OneDarkColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16OneDarkColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16OneDarkColors.AccentYellow,
    },
    'hljs-link': {
      color: base16OneDarkColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16OneDarkColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16OneDarkColors.AccentBlue,
    },
    'hljs-function': {
      color: base16OneDarkColors.AccentBlue,
    },
    'hljs-class': {
      color: base16OneDarkColors.AccentBlue,
    },
    'hljs-number': {
      color: base16OneDarkColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16OneDarkColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16OneDarkColors.AccentRed,
    },
    'hljs-meta': {
      color: base16OneDarkColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16OneDarkColors.AccentRed,
    },
    'hljs-subst': {
      color: base16OneDarkColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16OneDarkColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16OneDarkColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16OneDarkColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16OneDarkColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16OneDarkColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16OneDarkColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16OneDarkColors,
);