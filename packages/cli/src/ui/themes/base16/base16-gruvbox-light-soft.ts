/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Gruvbox Light Soft color palette
const base16GruvboxLightSoftColors: ColorsTheme = {
  type: 'light',
  Background: '#f2e5bc', // base00 - Default Background
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
export const Base16GruvboxLightSoft: Theme = new Theme(
  'Base16 Gruvbox Light Soft',
  'light',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16GruvboxLightSoftColors.Background,
      color: base16GruvboxLightSoftColors.Foreground,
    },
    'hljs-comment': {
      color: base16GruvboxLightSoftColors.Comment,
    },
    'hljs-quote': {
      color: base16GruvboxLightSoftColors.Comment,
    },
    'hljs-keyword': {
      color: base16GruvboxLightSoftColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16GruvboxLightSoftColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16GruvboxLightSoftColors.AccentPurple,
    },
    'hljs-section': {
      color: base16GruvboxLightSoftColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16GruvboxLightSoftColors.AccentPurple,
    },
    'hljs-name': {
      color: base16GruvboxLightSoftColors.AccentPurple,
    },
    'hljs-string': {
      color: base16GruvboxLightSoftColors.AccentGreen,
    },
    'hljs-title': {
      color: base16GruvboxLightSoftColors.AccentYellow,
    },
    'hljs-type': {
      color: base16GruvboxLightSoftColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16GruvboxLightSoftColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16GruvboxLightSoftColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16GruvboxLightSoftColors.AccentYellow,
    },
    'hljs-link': {
      color: base16GruvboxLightSoftColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16GruvboxLightSoftColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16GruvboxLightSoftColors.AccentBlue,
    },
    'hljs-function': {
      color: base16GruvboxLightSoftColors.AccentBlue,
    },
    'hljs-class': {
      color: base16GruvboxLightSoftColors.AccentBlue,
    },
    'hljs-number': {
      color: base16GruvboxLightSoftColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16GruvboxLightSoftColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16GruvboxLightSoftColors.AccentRed,
    },
    'hljs-meta': {
      color: base16GruvboxLightSoftColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16GruvboxLightSoftColors.AccentRed,
    },
    'hljs-subst': {
      color: base16GruvboxLightSoftColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16GruvboxLightSoftColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16GruvboxLightSoftColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16GruvboxLightSoftColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16GruvboxLightSoftColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16GruvboxLightSoftColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16GruvboxLightSoftColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16GruvboxLightSoftColors,
);