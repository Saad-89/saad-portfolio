import { AppColors } from '../constants/colors.js';
import { AppFonts } from '../constants/fonts.js';
import { AppDimensions } from '../constants/dimensions.js';

export const AppTheme = {
  colors: AppColors,
  fonts: AppFonts,
  dimensions: AppDimensions,
  
  // Typography styles (equivalent to Flutter's TextTheme)
  typography: {
    displayLarge: {
      fontSize: '72px',
      fontWeight: AppFonts.bold,
      color: AppColors.primaryBlack,
      lineHeight: '1.1',
      fontFamily: AppFonts.primary,
    },
    displayMedium: {
      fontSize: '48px',
      fontWeight: AppFonts.semiBold,
      color: AppColors.primaryBlack,
      lineHeight: '1.2',
      fontFamily: AppFonts.primary,
    },
    headlineLarge: {
      fontSize: '32px',
      fontWeight: AppFonts.semiBold,
      color: AppColors.primaryBlack,
      fontFamily: AppFonts.primary,
    },
    bodyLarge: {
      fontSize: '18px',
      fontWeight: AppFonts.regular,
      color: AppColors.darkGray,
      lineHeight: '1.5',
      fontFamily: AppFonts.primary,
    },
    bodyMedium: {
      fontSize: '16px',
      fontWeight: AppFonts.regular,
      color: AppColors.darkGray,
      lineHeight: '1.5',
      fontFamily: AppFonts.primary,
    },
  },
  
  // Media queries for responsive design
  breakpoints: {
    mobile: `(max-width: ${AppDimensions.mobileBreakpoint})`,
    tablet: `(min-width: ${AppDimensions.mobileBreakpoint}) and (max-width: ${AppDimensions.tabletBreakpoint})`,
    desktop: `(min-width: ${AppDimensions.tabletBreakpoint})`,
  },
};