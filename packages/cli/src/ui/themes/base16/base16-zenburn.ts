/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Zenburn color palette
const base16ZenburnColors: ColorsTheme = {
  type: 'dark',
  Background: '#383838', // base00 - Default Background
  Foreground: '#dcdccc', // base05 - Default Foreground
  LightBlue: '#7cb8bb', // base0D - blue (Functions, Methods)
  AccentBlue: '#7cb8bb', // base0D - blue (Functions, Methods)
  AccentPurple: '#dc8cc3', // base0E - purple (Keywords, Storage)
  AccentCyan: '#93e0e3', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#5f7f5f', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#e0cf9f', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#dca3a3', // base08 - red (Variables, XML Tags)
  Comment: '#6f6f6f', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#808080', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#7cb8bb', '#5f7f5f'],
};

// Create the theme with syntax highlighting rules
export const Base16Zenburn: Theme = new Theme(
  'Base16 Zenburn',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16ZenburnColors.Background,
      color: base16ZenburnColors.Foreground,
    },
    'hljs-comment': {
      color: base16ZenburnColors.Comment,
    },
    'hljs-quote': {
      color: base16ZenburnColors.Comment,
    },
    'hljs-keyword': {
      color: base16ZenburnColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16ZenburnColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16ZenburnColors.AccentPurple,
    },
    'hljs-section': {
      color: base16ZenburnColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16ZenburnColors.AccentPurple,
    },
    'hljs-name': {
      color: base16ZenburnColors.AccentPurple,
    },
    'hljs-string': {
      color: base16ZenburnColors.AccentGreen,
    },
    'hljs-title': {
      color: base16ZenburnColors.AccentYellow,
    },
    'hljs-type': {
      color: base16ZenburnColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16ZenburnColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16ZenburnColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16ZenburnColors.AccentYellow,
    },
    'hljs-link': {
      color: base16ZenburnColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16ZenburnColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16ZenburnColors.AccentBlue,
    },
    'hljs-function': {
      color: base16ZenburnColors.AccentBlue,
    },
    'hljs-class': {
      color: base16ZenburnColors.AccentBlue,
    },
    'hljs-number': {
      color: base16ZenburnColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16ZenburnColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16ZenburnColors.AccentRed,
    },
    'hljs-meta': {
      color: base16ZenburnColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16ZenburnColors.AccentRed,
    },
    'hljs-subst': {
      color: base16ZenburnColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16ZenburnColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16ZenburnColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16ZenburnColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16ZenburnColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16ZenburnColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16ZenburnColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16ZenburnColors,
);