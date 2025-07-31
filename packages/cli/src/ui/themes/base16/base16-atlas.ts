/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Atlas color palette
const base16AtlasColors: ColorsTheme = {
  type: 'dark',
  Background: '#002635', // base00 - Default Background
  Foreground: '#a1a19a', // base05 - Default Foreground
  LightBlue: '#14747e', // base0D - blue (Functions, Methods)
  AccentBlue: '#14747e', // base0D - blue (Functions, Methods)
  AccentPurple: '#9a70a4', // base0E - purple (Keywords, Storage)
  AccentCyan: '#5dd7b9', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#7fc06e', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#ffcc1b', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#ff5a67', // base08 - red (Variables, XML Tags)
  Comment: '#6C8B91', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#869696', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#14747e', '#7fc06e'],
};

// Create the theme with syntax highlighting rules
export const Base16Atlas: Theme = new Theme(
  'Base16 Atlas',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16AtlasColors.Background,
      color: base16AtlasColors.Foreground,
    },
    'hljs-comment': {
      color: base16AtlasColors.Comment,
    },
    'hljs-quote': {
      color: base16AtlasColors.Comment,
    },
    'hljs-keyword': {
      color: base16AtlasColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16AtlasColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16AtlasColors.AccentPurple,
    },
    'hljs-section': {
      color: base16AtlasColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16AtlasColors.AccentPurple,
    },
    'hljs-name': {
      color: base16AtlasColors.AccentPurple,
    },
    'hljs-string': {
      color: base16AtlasColors.AccentGreen,
    },
    'hljs-title': {
      color: base16AtlasColors.AccentYellow,
    },
    'hljs-type': {
      color: base16AtlasColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16AtlasColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16AtlasColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16AtlasColors.AccentYellow,
    },
    'hljs-link': {
      color: base16AtlasColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16AtlasColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16AtlasColors.AccentBlue,
    },
    'hljs-function': {
      color: base16AtlasColors.AccentBlue,
    },
    'hljs-class': {
      color: base16AtlasColors.AccentBlue,
    },
    'hljs-number': {
      color: base16AtlasColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16AtlasColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16AtlasColors.AccentRed,
    },
    'hljs-meta': {
      color: base16AtlasColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16AtlasColors.AccentRed,
    },
    'hljs-subst': {
      color: base16AtlasColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16AtlasColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16AtlasColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16AtlasColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16AtlasColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16AtlasColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16AtlasColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16AtlasColors,
);