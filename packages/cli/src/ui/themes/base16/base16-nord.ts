/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Nord color palette
const base16NordColors: ColorsTheme = {
  type: 'dark',
  Background: '#2E3440', // base00 - Default Background
  Foreground: '#E5E9F0', // base05 - Default Foreground
  LightBlue: '#EBCB8B', // base0D - blue (Functions, Methods)
  AccentBlue: '#EBCB8B', // base0D - blue (Functions, Methods)
  AccentPurple: '#A3BE8C', // base0E - purple (Keywords, Storage)
  AccentCyan: '#D08770', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#BF616A', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#5E81AC', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#88C0D0', // base08 - red (Variables, XML Tags)
  Comment: '#4C566A', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#D8DEE9', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#EBCB8B', '#BF616A'],
};

// Create the theme with syntax highlighting rules
export const Base16Nord: Theme = new Theme(
  'Base16 Nord',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16NordColors.Background,
      color: base16NordColors.Foreground,
    },
    'hljs-comment': {
      color: base16NordColors.Comment,
    },
    'hljs-quote': {
      color: base16NordColors.Comment,
    },
    'hljs-keyword': {
      color: base16NordColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16NordColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16NordColors.AccentPurple,
    },
    'hljs-section': {
      color: base16NordColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16NordColors.AccentPurple,
    },
    'hljs-name': {
      color: base16NordColors.AccentPurple,
    },
    'hljs-string': {
      color: base16NordColors.AccentGreen,
    },
    'hljs-title': {
      color: base16NordColors.AccentYellow,
    },
    'hljs-type': {
      color: base16NordColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16NordColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16NordColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16NordColors.AccentYellow,
    },
    'hljs-link': {
      color: base16NordColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16NordColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16NordColors.AccentBlue,
    },
    'hljs-function': {
      color: base16NordColors.AccentBlue,
    },
    'hljs-class': {
      color: base16NordColors.AccentBlue,
    },
    'hljs-number': {
      color: base16NordColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16NordColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16NordColors.AccentRed,
    },
    'hljs-meta': {
      color: base16NordColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16NordColors.AccentRed,
    },
    'hljs-subst': {
      color: base16NordColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16NordColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16NordColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16NordColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16NordColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16NordColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16NordColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16NordColors,
);