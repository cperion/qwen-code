/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Darcula color palette
const base16DarculaColors: ColorsTheme = {
  type: 'dark',
  Background: '#2b2b2b', // base00 - Default Background
  Foreground: '#a9b7c6', // base05 - Default Foreground
  LightBlue: '#689757', // base0D - blue (Functions, Methods)
  AccentBlue: '#689757', // base0D - blue (Functions, Methods)
  AccentPurple: '#9876aa', // base0E - purple (Keywords, Storage)
  AccentCyan: '#4eade5', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#6a8759', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#bbb529', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#cc7832', // base08 - red (Variables, XML Tags)
  Comment: '#606366', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#a4a3a3', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#689757', '#6a8759'],
};

// Create the theme with syntax highlighting rules
export const Base16Darcula: Theme = new Theme(
  'Base16 Darcula',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16DarculaColors.Background,
      color: base16DarculaColors.Foreground,
    },
    'hljs-comment': {
      color: base16DarculaColors.Comment,
    },
    'hljs-quote': {
      color: base16DarculaColors.Comment,
    },
    'hljs-keyword': {
      color: base16DarculaColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16DarculaColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16DarculaColors.AccentPurple,
    },
    'hljs-section': {
      color: base16DarculaColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16DarculaColors.AccentPurple,
    },
    'hljs-name': {
      color: base16DarculaColors.AccentPurple,
    },
    'hljs-string': {
      color: base16DarculaColors.AccentGreen,
    },
    'hljs-title': {
      color: base16DarculaColors.AccentYellow,
    },
    'hljs-type': {
      color: base16DarculaColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16DarculaColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16DarculaColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16DarculaColors.AccentYellow,
    },
    'hljs-link': {
      color: base16DarculaColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16DarculaColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16DarculaColors.AccentBlue,
    },
    'hljs-function': {
      color: base16DarculaColors.AccentBlue,
    },
    'hljs-class': {
      color: base16DarculaColors.AccentBlue,
    },
    'hljs-number': {
      color: base16DarculaColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16DarculaColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16DarculaColors.AccentRed,
    },
    'hljs-meta': {
      color: base16DarculaColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16DarculaColors.AccentRed,
    },
    'hljs-subst': {
      color: base16DarculaColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16DarculaColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16DarculaColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16DarculaColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16DarculaColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16DarculaColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16DarculaColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16DarculaColors,
);