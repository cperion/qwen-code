/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Tender color palette
const base16TenderColors: ColorsTheme = {
  type: 'dark',
  Background: '#282828', // base00 - Default Background
  Foreground: '#eeeeee', // base05 - Default Foreground
  LightBlue: '#b3deef', // base0D - blue (Functions, Methods)
  AccentBlue: '#b3deef', // base0D - blue (Functions, Methods)
  AccentPurple: '#d3b987', // base0E - purple (Keywords, Storage)
  AccentCyan: '#73cef4', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#c9d05c', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#ffc24b', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#f43753', // base08 - red (Variables, XML Tags)
  Comment: '#4c4c4c', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#b8b8b8', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#b3deef', '#c9d05c'],
};

// Create the theme with syntax highlighting rules
export const Base16Tender: Theme = new Theme(
  'Base16 Tender',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16TenderColors.Background,
      color: base16TenderColors.Foreground,
    },
    'hljs-comment': {
      color: base16TenderColors.Comment,
    },
    'hljs-quote': {
      color: base16TenderColors.Comment,
    },
    'hljs-keyword': {
      color: base16TenderColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16TenderColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16TenderColors.AccentPurple,
    },
    'hljs-section': {
      color: base16TenderColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16TenderColors.AccentPurple,
    },
    'hljs-name': {
      color: base16TenderColors.AccentPurple,
    },
    'hljs-string': {
      color: base16TenderColors.AccentGreen,
    },
    'hljs-title': {
      color: base16TenderColors.AccentYellow,
    },
    'hljs-type': {
      color: base16TenderColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16TenderColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16TenderColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16TenderColors.AccentYellow,
    },
    'hljs-link': {
      color: base16TenderColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16TenderColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16TenderColors.AccentBlue,
    },
    'hljs-function': {
      color: base16TenderColors.AccentBlue,
    },
    'hljs-class': {
      color: base16TenderColors.AccentBlue,
    },
    'hljs-number': {
      color: base16TenderColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16TenderColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16TenderColors.AccentRed,
    },
    'hljs-meta': {
      color: base16TenderColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16TenderColors.AccentRed,
    },
    'hljs-subst': {
      color: base16TenderColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16TenderColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16TenderColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16TenderColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16TenderColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16TenderColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16TenderColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16TenderColors,
);