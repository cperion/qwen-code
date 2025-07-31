/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Synth Midnight Terminal Dark color palette
const base16SynthMidnightDarkColors: ColorsTheme = {
  type: 'dark',
  Background: '#050608', // base00 - Default Background
  Foreground: '#c1c3c4', // base05 - Default Foreground
  LightBlue: '#03aeff', // base0D - blue (Functions, Methods)
  AccentBlue: '#03aeff', // base0D - blue (Functions, Methods)
  AccentPurple: '#ea5ce2', // base0E - purple (Keywords, Storage)
  AccentCyan: '#42fff9', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#06ea61', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#c9d364', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#b53b50', // base08 - red (Variables, XML Tags)
  Comment: '#474849', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#a3a5a6', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#03aeff', '#06ea61'],
};

// Create the theme with syntax highlighting rules
export const Base16SynthMidnightDark: Theme = new Theme(
  'Base16 Synth Midnight Dark',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16SynthMidnightDarkColors.Background,
      color: base16SynthMidnightDarkColors.Foreground,
    },
    'hljs-comment': {
      color: base16SynthMidnightDarkColors.Comment,
    },
    'hljs-quote': {
      color: base16SynthMidnightDarkColors.Comment,
    },
    'hljs-keyword': {
      color: base16SynthMidnightDarkColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16SynthMidnightDarkColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16SynthMidnightDarkColors.AccentPurple,
    },
    'hljs-section': {
      color: base16SynthMidnightDarkColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16SynthMidnightDarkColors.AccentPurple,
    },
    'hljs-name': {
      color: base16SynthMidnightDarkColors.AccentPurple,
    },
    'hljs-string': {
      color: base16SynthMidnightDarkColors.AccentGreen,
    },
    'hljs-title': {
      color: base16SynthMidnightDarkColors.AccentYellow,
    },
    'hljs-type': {
      color: base16SynthMidnightDarkColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16SynthMidnightDarkColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16SynthMidnightDarkColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16SynthMidnightDarkColors.AccentYellow,
    },
    'hljs-link': {
      color: base16SynthMidnightDarkColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16SynthMidnightDarkColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16SynthMidnightDarkColors.AccentBlue,
    },
    'hljs-function': {
      color: base16SynthMidnightDarkColors.AccentBlue,
    },
    'hljs-class': {
      color: base16SynthMidnightDarkColors.AccentBlue,
    },
    'hljs-number': {
      color: base16SynthMidnightDarkColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16SynthMidnightDarkColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16SynthMidnightDarkColors.AccentRed,
    },
    'hljs-meta': {
      color: base16SynthMidnightDarkColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16SynthMidnightDarkColors.AccentRed,
    },
    'hljs-subst': {
      color: base16SynthMidnightDarkColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16SynthMidnightDarkColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16SynthMidnightDarkColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16SynthMidnightDarkColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16SynthMidnightDarkColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16SynthMidnightDarkColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16SynthMidnightDarkColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16SynthMidnightDarkColors,
);