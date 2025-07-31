/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ColorsTheme, Theme } from '../theme.js';

// Define base16 Github color palette
const base16GithubColors: ColorsTheme = {
  type: 'light',
  Background: '#ffffff', // base00 - Default Background
  Foreground: '#333333', // base05 - Default Foreground
  LightBlue: '#795da3', // base0D - blue (Functions, Methods)
  AccentBlue: '#795da3', // base0D - blue (Functions, Methods)
  AccentPurple: '#a71d5d', // base0E - purple (Keywords, Storage)
  AccentCyan: '#183691', // base0C - aqua/cyan (Support, Regular Expressions)
  AccentGreen: '#183691', // base0B - green (Strings, Inherited Class)
  AccentYellow: '#795da3', // base0A - yellow (Classes, Markup Bold)
  AccentRed: '#ed6a43', // base08 - red (Variables, XML Tags)
  Comment: '#969896', // base03 - Comments, Invisibles, Line Highlighting
  Gray: '#e8e8e8', // base04 - Dark Foreground (Used for status bars)
  GradientColors: ['#795da3', '#183691'],
};

// Create the theme with syntax highlighting rules
export const Base16Github: Theme = new Theme(
  'Base16 Github',
  'light',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: base16GithubColors.Background,
      color: base16GithubColors.Foreground,
    },
    'hljs-comment': {
      color: base16GithubColors.Comment,
    },
    'hljs-quote': {
      color: base16GithubColors.Comment,
    },
    'hljs-keyword': {
      color: base16GithubColors.AccentPurple,
    },
    'hljs-selector-tag': {
      color: base16GithubColors.AccentPurple,
    },
    'hljs-literal': {
      color: base16GithubColors.AccentPurple,
    },
    'hljs-section': {
      color: base16GithubColors.AccentPurple,
    },
    'hljs-doctag': {
      color: base16GithubColors.AccentPurple,
    },
    'hljs-name': {
      color: base16GithubColors.AccentPurple,
    },
    'hljs-string': {
      color: base16GithubColors.AccentGreen,
    },
    'hljs-title': {
      color: base16GithubColors.AccentYellow,
    },
    'hljs-type': {
      color: base16GithubColors.AccentYellow,
    },
    'hljs-attribute': {
      color: base16GithubColors.AccentYellow,
    },
    'hljs-symbol': {
      color: base16GithubColors.AccentYellow,
    },
    'hljs-regexp': {
      color: base16GithubColors.AccentYellow,
    },
    'hljs-link': {
      color: base16GithubColors.AccentYellow,
    },
    'hljs-bullet': {
      color: base16GithubColors.AccentYellow,
    },
    'hljs-built_in': {
      color: base16GithubColors.AccentBlue,
    },
    'hljs-function': {
      color: base16GithubColors.AccentBlue,
    },
    'hljs-class': {
      color: base16GithubColors.AccentBlue,
    },
    'hljs-number': {
      color: base16GithubColors.AccentCyan,
    },
    'hljs-variable': {
      color: base16GithubColors.AccentRed,
    },
    'hljs-template-variable': {
      color: base16GithubColors.AccentRed,
    },
    'hljs-meta': {
      color: base16GithubColors.AccentCyan,
    },
    'hljs-tag': {
      color: base16GithubColors.AccentRed,
    },
    'hljs-subst': {
      color: base16GithubColors.Foreground,
    },
    'hljs-selector-id': {
      color: base16GithubColors.AccentBlue,
    },
    'hljs-selector-class': {
      color: base16GithubColors.AccentYellow,
    },
    'hljs-selector-attr': {
      color: base16GithubColors.AccentCyan,
    },
    'hljs-selector-pseudo': {
      color: base16GithubColors.AccentCyan,
    },
    'hljs-addition': {
      color: base16GithubColors.AccentGreen,
    },
    'hljs-deletion': {
      color: base16GithubColors.AccentRed,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
  },
  base16GithubColors,
);