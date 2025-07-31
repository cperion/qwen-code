/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 One Light color palette
const base16OneLightColors: ColorsTheme = {
  type: 'light',
  Background: '#fafafa', // base00 - Default Background
  Foreground: '#383a42', // base05 - Default Foreground
  LightBlue: '#4078f2', // base0D - blue (Functions, Methods)
  AccentBlue: '#4078f2', // base0D - blue (Functions, Methods)
  AccentPurple: '#a626a4', // base0E - purple (Keywords, Storage)
  AccentCyan: '#0184bc', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#50a14f', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#c18401', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#ca1243', // base08 - red (Variables, XML Tags)
  Comment: '#a0a1a7', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#696c77', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#4078f2', '#50a14f'],
};

// Create the theme with syntax highlighting rules
export const Base16OneLight: Theme = new Theme(
  'Base16 One Light',
  'light',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16OneLightColors.Background,
      color: base16OneLightColors.Foreground,
    },
    'hljs-comment': {
      color: base16OneLightColors.Comment,
    },
    'hljs-quote': {
      color: base16OneLightColors.Comment,
    },
    'hljs-keyword': {
      color: base16OneLightColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16OneLightColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16OneLightColors.AccentPurple,
    },
    'hljs-section': {
      color: base16OneLightColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16OneLightColors.AccentPurple,
    },
    'hljs-name': {
      color: base16OneLightColors.AccentPurple,
    },
    'hljs-string': {
      color: base16OneLightColors.AccentGreen,
    },
    'hljs-title': {
      color: base16OneLightColors.AccentYellow,
    },
    'hljs-type': {
      color: base16OneLightColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16OneLightColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16OneLightColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16OneLightColors.AccentYellow,
    },
    'hljs-link': {
      color: base16OneLightColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16OneLightColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16OneLightColors.AccentBlue,
    },
    'hljs-function': {
      color: base16OneLightColors.AccentBlue,
    },
    'hljs-class': {
      color: base16OneLightColors.AccentBlue,
    },
    'hljs-number': {
      color: base16OneLightColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16OneLightColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16OneLightColors.AccentRed,
    },
    'hljs-meta': {
      color: base16OneLightColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16OneLightColors.AccentRed,
    },
    'hljs-subst': {
      color: base16OneLightColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16OneLightColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16OneLightColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16OneLightColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16OneLightColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16OneLightColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16OneLightColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16OneLightColors,
);