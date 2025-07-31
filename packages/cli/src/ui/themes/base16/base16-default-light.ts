/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Default Light color palette
const base16DefaultLightColors: ColorsTheme = {
  type: 'light',
  Background: '#f8f8f8', // base00 - Default Background
  Foreground: '#383838', // base05 - Default Foreground
  LightBlue: '#7cafc2', // base0D - blue (Functions, Methods)
  AccentBlue: '#7cafc2', // base0D - blue (Functions, Methods)
  AccentPurple: '#ba8baf', // base0E - purple (Keywords, Storage)
  AccentCyan: '#86c1b9', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#a1b56c', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#f7ca88', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#ab4642', // base08 - red (Variables, XML Tags)
  Comment: '#b8b8b8', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#585858', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#7cafc2', '#a1b56c'],
};

// Create the theme with syntax highlighting rules
export const Base16DefaultLight: Theme = new Theme(
  'Base16 Default Light',
  'light',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16DefaultLightColors.Background,
      color: base16DefaultLightColors.Foreground,
    },
    'hljs-comment': {
      color: base16DefaultLightColors.Comment,
    },
    'hljs-quote': {
      color: base16DefaultLightColors.Comment,
    },
    'hljs-keyword': {
      color: base16DefaultLightColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16DefaultLightColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16DefaultLightColors.AccentPurple,
    },
    'hljs-section': {
      color: base16DefaultLightColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16DefaultLightColors.AccentPurple,
    },
    'hljs-name': {
      color: base16DefaultLightColors.AccentPurple,
    },
    'hljs-string': {
      color: base16DefaultLightColors.AccentGreen,
    },
    'hljs-title': {
      color: base16DefaultLightColors.AccentYellow,
    },
    'hljs-type': {
      color: base16DefaultLightColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16DefaultLightColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16DefaultLightColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16DefaultLightColors.AccentYellow,
    },
    'hljs-link': {
      color: base16DefaultLightColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16DefaultLightColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16DefaultLightColors.AccentBlue,
    },
    'hljs-function': {
      color: base16DefaultLightColors.AccentBlue,
    },
    'hljs-class': {
      color: base16DefaultLightColors.AccentBlue,
    },
    'hljs-number': {
      color: base16DefaultLightColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16DefaultLightColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16DefaultLightColors.AccentRed,
    },
    'hljs-meta': {
      color: base16DefaultLightColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16DefaultLightColors.AccentRed,
    },
    'hljs-subst': {
      color: base16DefaultLightColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16DefaultLightColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16DefaultLightColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16DefaultLightColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16DefaultLightColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16DefaultLightColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16DefaultLightColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16DefaultLightColors,
);