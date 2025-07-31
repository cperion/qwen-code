/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Gruvbox Light Hard color palette
const base16GruvboxLightHardColors: ColorsTheme = {
  type: 'light',
  Background: '#f9f5d7', // base00 - Default Background
  Foreground: '#504945', // base05 - Default Foreground
  LightBlue: '#076678', // base0D - blue (Functions, Methods)
  AccentBlue: '#076678', // base0D - blue (Functions, Methods)
  AccentPurple: '#8f3f71', // base0E - purple (Keywords, Storage)
  AccentCyan: '#427b58', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#79740e', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#b57614', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#9d0006', // base08 - red (Variables, XML Tags)
  Comment: '#bdae93', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#665c54', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#076678', '#79740e'],
};

// Create the theme with syntax highlighting rules
export const Base16GruvboxLightHard: Theme = new Theme(
  'Base16 Gruvbox Light Hard',
  'light',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16GruvboxLightHardColors.Background,
      color: base16GruvboxLightHardColors.Foreground,
    },
    'hljs-comment': {
      color: base16GruvboxLightHardColors.Comment,
    },
    'hljs-quote': {
      color: base16GruvboxLightHardColors.Comment,
    },
    'hljs-keyword': {
      color: base16GruvboxLightHardColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16GruvboxLightHardColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16GruvboxLightHardColors.AccentPurple,
    },
    'hljs-section': {
      color: base16GruvboxLightHardColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16GruvboxLightHardColors.AccentPurple,
    },
    'hljs-name': {
      color: base16GruvboxLightHardColors.AccentPurple,
    },
    'hljs-string': {
      color: base16GruvboxLightHardColors.AccentGreen,
    },
    'hljs-title': {
      color: base16GruvboxLightHardColors.AccentYellow,
    },
    'hljs-type': {
      color: base16GruvboxLightHardColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16GruvboxLightHardColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16GruvboxLightHardColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16GruvboxLightHardColors.AccentYellow,
    },
    'hljs-link': {
      color: base16GruvboxLightHardColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16GruvboxLightHardColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16GruvboxLightHardColors.AccentBlue,
    },
    'hljs-function': {
      color: base16GruvboxLightHardColors.AccentBlue,
    },
    'hljs-class': {
      color: base16GruvboxLightHardColors.AccentBlue,
    },
    'hljs-number': {
      color: base16GruvboxLightHardColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16GruvboxLightHardColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16GruvboxLightHardColors.AccentRed,
    },
    'hljs-meta': {
      color: base16GruvboxLightHardColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16GruvboxLightHardColors.AccentRed,
    },
    'hljs-subst': {
      color: base16GruvboxLightHardColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16GruvboxLightHardColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16GruvboxLightHardColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16GruvboxLightHardColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16GruvboxLightHardColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16GruvboxLightHardColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16GruvboxLightHardColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16GruvboxLightHardColors,
);