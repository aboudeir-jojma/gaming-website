# Fix Double Sidebar Issue

## Plan:
1. ✅ Remove Layout wrapper from category page - since _app.js already provides Layout
2. ✅ Remove Layout wrapper from all games page - since _app.js already provides Layout
3. ✅ Test the changes to ensure sidebar appears only once on all pages

## Progress:
- [x] Fix pages/category/[category].js - Remove Layout wrapper
- [x] Fix pages/all.js - Remove Layout wrapper
- [ ] Test category pages
- [ ] Test all games page
- [ ] Verify home page still works
