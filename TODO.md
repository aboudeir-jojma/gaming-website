# Language Switching Fix

## Completed Tasks
- [x] Identified issue in changeLocale function in components/Header.js
- [x] Updated changeLocale function to properly replace locale prefix in URL path
- [x] Fixed router.push call to use updated path with new locale

## Follow-up Steps
- [ ] Test language switching functionality
- [ ] Verify URL updates correctly when changing languages
- [ ] Check that translations load properly after language switch
- [ ] Test on different pages (index, all games, game details, etc.)

## Technical Details
The issue was that the original changeLocale function used router.asPath directly without replacing the current locale prefix. This caused the URL to not update properly when switching languages. The fix replaces the current locale prefix (e.g., /fr) with the new locale prefix (e.g., /es) in the path before calling router.push.
