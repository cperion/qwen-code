/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Ocean color palette
const base16OceanColors: ColorsTheme = {
  type: 'dark',
  Background: '#2b303b', // base00 - Default Background
  Foreground: '#c0c5ce', // base05 - Default Foreground
  LightBlue: '#8fa1b3', // base0D - blue (Functions, Methods)
  AccentBlue: '#8fa1b3', // base0D - blue (Functions, Methods)
  AccentPurple: '#b48ead', // base0E - purple (Keywords, Storage)
  AccentCyan: '#96b5b4', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#a3be8c', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#ebcb8b', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#bf616a', // base08 - red (Variables, XML Tags)
  Comment: '#65737e', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#a7adba', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#8fa1b3', '#a3be8c'],
};

// Create the theme with syntax highlighting rules
export const Base16Ocean: Theme = new Theme(
  'Base16 Ocean',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16OceanColors.Background,
      color: base16OceanColors.Foreground,
    },
    'hljs-comment': {
      color: base16OceanColors.Comment,
    },
    'hljs-quote': {
      color: base16OceanColors.Comment,
    },
    'hljs-keyword': {
      color: base16OceanColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16OceanColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16OceanColors.AccentPurple,
    },
    'hljs-section': {
      color: base16OceanColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16OceanColors.AccentPurple,
    },
    'hljs-name': {
      color: base16OceanColors.AccentPurple,
    },
    'hljs-string': {
      color: base16OceanColors.AccentGreen,
    },
    'hljs-title': {
      color: base16OceanColors.AccentYellow,
    },
    'hljs-type': {
      color: base16OceanColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16OceanColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16OceanColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16OceanColors.AccentYellow,
    },
    'hljs-link': {
      color: base16OceanColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16OceanColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16OceanColors.AccentBlue,
    },
    'hljs-function': {
      color: base16OceanColors.AccentBlue,
    },
    'hljs-class': {
      color: base16OceanColors.AccentBlue,
    },
    'hljs-number': {
      color: base16OceanColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16OceanColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16OceanColors.AccentRed,
    },
    'hljs-meta': {
      color: base16OceanColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16OceanColors.AccentRed,
    },
    'hljs-subst': {
      color: base16OceanColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16OceanColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16OceanColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16OceanColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16OceanColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16OceanColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16OceanColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16OceanColors,
);