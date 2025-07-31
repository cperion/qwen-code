/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Gruvbox Light Medium color palette
const base16GruvboxLightMediumColors: ColorsTheme = {
  type: 'light',
  Background: '#fbf1c7', // base00 - Default Background
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
export const Base16GruvboxLightMedium: Theme = new Theme(
  'Base16 Gruvbox Light Medium',
  'light',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16GruvboxLightMediumColors.Background,
      color: base16GruvboxLightMediumColors.Foreground,
    },
    'hljs-comment': {
      color: base16GruvboxLightMediumColors.Comment,
    },
    'hljs-quote': {
      color: base16GruvboxLightMediumColors.Comment,
    },
    'hljs-keyword': {
      color: base16GruvboxLightMediumColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16GruvboxLightMediumColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16GruvboxLightMediumColors.AccentPurple,
    },
    'hljs-section': {
      color: base16GruvboxLightMediumColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16GruvboxLightMediumColors.AccentPurple,
    },
    'hljs-name': {
      color: base16GruvboxLightMediumColors.AccentPurple,
    },
    'hljs-string': {
      color: base16GruvboxLightMediumColors.AccentGreen,
    },
    'hljs-title': {
      color: base16GruvboxLightMediumColors.AccentYellow,
    },
    'hljs-type': {
      color: base16GruvboxLightMediumColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16GruvboxLightMediumColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16GruvboxLightMediumColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16GruvboxLightMediumColors.AccentYellow,
    },
    'hljs-link': {
      color: base16GruvboxLightMediumColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16GruvboxLightMediumColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16GruvboxLightMediumColors.AccentBlue,
    },
    'hljs-function': {
      color: base16GruvboxLightMediumColors.AccentBlue,
    },
    'hljs-class': {
      color: base16GruvboxLightMediumColors.AccentBlue,
    },
    'hljs-number': {
      color: base16GruvboxLightMediumColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16GruvboxLightMediumColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16GruvboxLightMediumColors.AccentRed,
    },
    'hljs-meta': {
      color: base16GruvboxLightMediumColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16GruvboxLightMediumColors.AccentRed,
    },
    'hljs-subst': {
      color: base16GruvboxLightMediumColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16GruvboxLightMediumColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16GruvboxLightMediumColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16GruvboxLightMediumColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16GruvboxLightMediumColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16GruvboxLightMediumColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16GruvboxLightMediumColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16GruvboxLightMediumColors,
);