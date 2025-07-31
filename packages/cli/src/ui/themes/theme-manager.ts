/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { AyuDark } from './ayu.js';
import { AyuLight } from './ayu-light.js';
import { AtomOneDark } from './atom-one-dark.js';
import { Dracula } from './dracula.js';
import { GitHubDark } from './github-dark.js';
import { GitHubLight } from './github-light.js';
import { GoogleCode } from './googlecode.js';
import { DefaultLight } from './default-light.js';
import { DefaultDark } from './default.js';
import { ShadesOfPurple } from './shades-of-purple.js';
import { XCode } from './xcode.js';
import { QwenLight } from './qwen-light.js';
import { QwenDark } from './qwen-dark.js';
import { Theme, ThemeType } from './theme.js';
import { ANSI } from './ansi.js';
import { ANSILight } from './ansi-light.js';
import { NoColorTheme } from './no-color.js';

// Base16 Themes
import { Base16Apprentice } from './base16/base16-apprentice.js';
import { Base16Atlas } from './base16/base16-atlas.js';
import { Base16Codeschool } from './base16/base16-codeschool.js';
import { Base16Cupcake } from './base16/base16-cupcake.js';
import { Base16Darcula } from './base16/base16-darcula.js';
import { Base16DefaultDark } from './base16/base16-default-dark.js';
import { Base16DefaultLight } from './base16/base16-default-light.js';
import { Base16Dracula } from './base16/base16-dracula.js';
import { Base16Eighties } from './base16/base16-eighties.js';
import { Base16Github } from './base16/base16-github.js';
import { Base16GruvboxDarkHard } from './base16/base16-gruvbox-dark-hard.js';
import { Base16GruvboxDarkMedium } from './base16/base16-gruvbox-dark-medium.js';
import { Base16GruvboxDarkPale } from './base16/base16-gruvbox-dark-pale.js';
import { Base16GruvboxDarkSoft } from './base16/base16-gruvbox-dark-soft.js';
import { Base16GruvboxLightHard } from './base16/base16-gruvbox-light-hard.js';
import { Base16GruvboxLightMedium } from './base16/base16-gruvbox-light-medium.js';
import { Base16GruvboxLightSoft } from './base16/base16-gruvbox-light-soft.js';
import { Base16Mocha } from './base16/base16-mocha.js';
import { Base16Nord } from './base16/base16-nord.js';
import { Base16Ocean } from './base16/base16-ocean.js';
import { Base16OneLight } from './base16/base16-one-light.js';
import { Base16OneDark } from './base16/base16-onedark.js';
import { Base16SynthMidnightDark } from './base16/base16-synth-midnight-dark.js';
import { Base16Tender } from './base16/base16-tender.js';
import { Base16Twilight } from './base16/base16-twilight.js';
import { Base16Zenburn } from './base16/base16-zenburn.js';
import process from 'node:process';

export interface ThemeDisplay {
  name: string;
  type: ThemeType;
}

export const DEFAULT_THEME: Theme = QwenDark;

class ThemeManager {
  private readonly availableThemes: Theme[];
  private activeTheme: Theme;

  constructor() {
    this.availableThemes = [
      AyuDark,
      AyuLight,
      AtomOneDark,
      Dracula,
      DefaultLight,
      DefaultDark,
      GitHubDark,
      GitHubLight,
      GoogleCode,
      QwenLight,
      QwenDark,
      ShadesOfPurple,
      XCode,
      ANSI,
      ANSILight,
      
      // Base16 Themes
      Base16Apprentice,
      Base16Atlas,
      Base16Codeschool,
      Base16Cupcake,
      Base16Darcula,
      Base16DefaultDark,
      Base16DefaultLight,
      Base16Dracula,
      Base16Eighties,
      Base16Github,
      Base16GruvboxDarkHard,
      Base16GruvboxDarkMedium,
      Base16GruvboxDarkPale,
      Base16GruvboxDarkSoft,
      Base16GruvboxLightHard,
      Base16GruvboxLightMedium,
      Base16GruvboxLightSoft,
      Base16Mocha,
      Base16Nord,
      Base16Ocean,
      Base16OneLight,
      Base16OneDark,
      Base16SynthMidnightDark,
      Base16Tender,
      Base16Twilight,
      Base16Zenburn,
    ];
    this.activeTheme = DEFAULT_THEME;
  }

  /**
   * Returns a list of available theme names.
   */
  getAvailableThemes(): ThemeDisplay[] {
    // Separate Qwen themes
    const qwenThemes = this.availableThemes.filter(
      (theme) => theme.name === QwenLight.name || theme.name === QwenDark.name,
    );
    const otherThemes = this.availableThemes.filter(
      (theme) => theme.name !== QwenLight.name && theme.name !== QwenDark.name,
    );

    // Sort other themes by type and then name
    const sortedOtherThemes = otherThemes.sort((a, b) => {
      const typeOrder = (type: ThemeType): number => {
        switch (type) {
          case 'dark':
            return 1;
          case 'light':
            return 2;
          default:
            return 3;
        }
      };

      const typeComparison = typeOrder(a.type) - typeOrder(b.type);
      if (typeComparison !== 0) {
        return typeComparison;
      }
      return a.name.localeCompare(b.name);
    });

    // Combine Qwen themes first, then sorted others
    const sortedThemes = [...qwenThemes, ...sortedOtherThemes];

    return sortedThemes.map((theme) => ({
      name: theme.name,
      type: theme.type,
    }));
  }

  /**
   * Sets the active theme.
   * @param themeName The name of the theme to activate.
   * @returns True if the theme was successfully set, false otherwise.
   */
  setActiveTheme(themeName: string | undefined): boolean {
    const foundTheme = this.findThemeByName(themeName);

    if (foundTheme) {
      this.activeTheme = foundTheme;
      return true;
    } else {
      // If themeName is undefined, it means we want to set the default theme.
      // If findThemeByName returns undefined (e.g. default theme is also not found for some reason)
      // then this will return false.
      if (themeName === undefined) {
        this.activeTheme = DEFAULT_THEME;
        return true;
      }
      return false;
    }
  }

  findThemeByName(themeName: string | undefined): Theme | undefined {
    if (!themeName) {
      return DEFAULT_THEME;
    }
    return this.availableThemes.find((theme) => theme.name === themeName);
  }

  /**
   * Returns the currently active theme object.
   */
  getActiveTheme(): Theme {
    if (process.env.NO_COLOR) {
      return NoColorTheme;
    }
    return this.activeTheme;
  }
}

// Export an instance of the ThemeManager
export const themeManager = new ThemeManager();
