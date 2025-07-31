/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Apprentice color palette
const base16ApprenticeColors: ColorsTheme = {
  type: 'dark',
  Background: '#262626', // base00 - Default Background
  Foreground: '#5F5F87', // base05 - Default Foreground
  LightBlue: '#8787AF', // base0D - blue (Functions, Methods)
  AccentBlue: '#8787AF', // base0D - blue (Functions, Methods)
  AccentPurple: '#5FAFAF', // base0E - purple (Keywords, Storage)
  AccentCyan: '#87AFD7', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#FFFFAF', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#87AF87', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#444444', // base08 - red (Variables, XML Tags)
  Comment: '#87875F', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#5F87AF', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#8787AF', '#FFFFAF'],
};

// Create the theme with syntax highlighting rules
export const Base16Apprentice: Theme = new Theme(
  'Base16 Apprentice',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16ApprenticeColors.Background,
      color: base16ApprenticeColors.Foreground,
    },
    'hljs-comment': {
      color: base16ApprenticeColors.Comment,
    },
    'hljs-quote': {
      color: base16ApprenticeColors.Comment,
    },
    'hljs-keyword': {
      color: base16ApprenticeColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16ApprenticeColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16ApprenticeColors.AccentPurple,
    },
    'hljs-section': {
      color: base16ApprenticeColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16ApprenticeColors.AccentPurple,
    },
    'hljs-name': {
      color: base16ApprenticeColors.AccentPurple,
    },
    'hljs-string': {
      color: base16ApprenticeColors.AccentGreen,
    },
    'hljs-title': {
      color: base16ApprenticeColors.AccentYellow,
    },
    'hljs-type': {
      color: base16ApprenticeColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16ApprenticeColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16ApprenticeColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16ApprenticeColors.AccentYellow,
    },
    'hljs-link': {
      color: base16ApprenticeColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16ApprenticeColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16ApprenticeColors.AccentBlue,
    },
    'hljs-function': {
      color: base16ApprenticeColors.AccentBlue,
    },
    'hljs-class': {
      color: base16ApprenticeColors.AccentBlue,
    },
    'hljs-number': {
      color: base16ApprenticeColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16ApprenticeColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16ApprenticeColors.AccentRed,
    },
    'hljs-meta': {
      color: base16ApprenticeColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16ApprenticeColors.AccentRed,
    },
    'hljs-subst': {
      color: base16ApprenticeColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16ApprenticeColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16ApprenticeColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16ApprenticeColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16ApprenticeColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16ApprenticeColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16ApprenticeColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16ApprenticeColors,
);