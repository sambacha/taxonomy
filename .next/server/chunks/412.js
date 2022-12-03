exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 93330:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 42648, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18033))

/***/ }),

/***/ 64296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MarketingLayout)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.0.4_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(64880);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.0.4_react-dom@18.2.0+react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(75125);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./config/marketing.ts
const marketingConfig = {
    mainNav: [
        {
            title: "Features",
            href: "/features",
            disabled: true
        },
        {
            title: "Pricing",
            href: "/pricing"
        },
        {
            title: "Blog",
            href: "/blog"
        },
        {
            title: "Documentation",
            href: "/docs"
        },
        {
            title: "Contact",
            href: "/contact",
            disabled: true
        }
    ]
};

// EXTERNAL MODULE: ./components/main-nav.tsx
var main_nav = __webpack_require__(63551);
// EXTERNAL MODULE: ./components/site-footer.tsx
var site_footer = __webpack_require__(89318);
;// CONCATENATED MODULE: ./app/(marketing)/layout.tsx





async function MarketingLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "container sticky top-0 z-40 bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex h-16 items-center justify-between border-b border-b-slate-200 py-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(main_nav.MainNav, {
                            items: marketingConfig.mainNav
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("nav", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/login",
                                className: "relative inline-flex h-8 items-center rounded-md border border-transparent bg-brand-500 px-6 py-1 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
                                children: "Login"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "flex-1",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(site_footer/* SiteFooter */.n, {})
        ]
    });
}


/***/ })

};
;