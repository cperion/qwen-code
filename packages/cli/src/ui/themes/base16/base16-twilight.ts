/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Twilight color palette
const base16TwilightColors: ColorsTheme = {
  type: 'dark',
  Background: '#1e1e1e', // base00 - Default Background
  Foreground: '#a7a7a7', // base05 - Default Foreground
  LightBlue: '#7587a6', // base0D - blue (Functions, Methods)
  AccentBlue: '#7587a6', // base0D - blue (Functions, Methods)
  AccentPurple: '#9b859d', // base0E - purple (Keywords, Storage)
  AccentCyan: '#afc4db', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#8f9d6a', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#f9ee98', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#cf6a4c', // base08 - red (Variables, XML Tags)
  Comment: '#5f5a60', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#838184', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#7587a6', '#8f9d6a'],
};

// Create the theme with syntax highlighting rules
export const Base16Twilight: Theme = new Theme(
  'Base16 Twilight',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16TwilightColors.Background,
      color: base16TwilightColors.Foreground,
    },
    'hljs-comment': {
      color: base16TwilightColors.Comment,
    },
    'hljs-quote': {
      color: base16TwilightColors.Comment,
    },
    'hljs-keyword': {
      color: base16TwilightColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16TwilightColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16TwilightColors.AccentPurple,
    },
    'hljs-section': {
      color: base16TwilightColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16TwilightColors.AccentPurple,
    },
    'hljs-name': {
      color: base16TwilightColors.AccentPurple,
    },
    'hljs-string': {
      color: base16TwilightColors.AccentGreen,
    },
    'hljs-title': {
      color: base16TwilightColors.AccentYellow,
    },
    'hljs-type': {
      color: base16TwilightColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16TwilightColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16TwilightColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16TwilightColors.AccentYellow,
    },
    'hljs-link': {
      color: base16TwilightColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16TwilightColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16TwilightColors.AccentBlue,
    },
    'hljs-function': {
      color: base16TwilightColors.AccentBlue,
    },
    'hljs-class': {
      color: base16TwilightColors.AccentBlue,
    },
    'hljs-number': {
      color: base16TwilightColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16TwilightColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16TwilightColors.AccentRed,
    },
    'hljs-meta': {
      color: base16TwilightColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16TwilightColors.AccentRed,
    },
    'hljs-subst': {
      color: base16TwilightColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16TwilightColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16TwilightColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16TwilightColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16TwilightColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16TwilightColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16TwilightColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16TwilightColors,
);