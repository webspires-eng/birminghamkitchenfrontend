self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/404": [
    "static/chunks/pages/404.js"
  ],
  "/collection/[slug]": [
    "static/chunks/pages/collection/[slug].js"
  ],
  "/product/[slug]": [
    "static/chunks/pages/product/[slug].js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/404",
    "/_app",
    "/_error",
    "/_unused/account",
    "/_unused/blog/[slug]",
    "/_unused/compare",
    "/_unused/logout",
    "/_unused/order/[orderNo]",
    "/_unused/search/[param]",
    "/_unused/signin",
    "/_unused/signup",
    "/_unused/wishlist",
    "/about",
    "/cart",
    "/checkout",
    "/collection",
    "/collection/[slug]",
    "/contact",
    "/home-2",
    "/product/[slug]",
    "/shop",
    "/shop/[cursor]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()