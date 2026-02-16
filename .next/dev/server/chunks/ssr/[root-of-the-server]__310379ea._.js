module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[project]/src/styled/theme.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "theme",
    ()=>theme
]);
const breakpoints = [
    "576px",
    "768px",
    "992px",
    "1200px",
    "1400px"
];
const theme = {
    colors: {
        primary: "#D40511",
        secondary: "#005DAA",
        success: "#10b759",
        info: "#00b8d4",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#e5e9f2",
        light300: "#dee0e4",
        dark: "#3b4863",
        dark2: "#191919",
        darkgray: "#999999",
        text: "#474747",
        text2: "#1b2e4b",
        text3: "#8392a5",
        text4: "#c0ccda",
        heading: "#212121",
        link: "#001737",
        borderDark: "#43474e",
        borderLight: "#ebebeb",
        white: "#ffffff",
        offWhite: "#e7e7e7",
        offWhiteLight: "#f5f5f5",
        black: "#000000",
        green: "#007a58",
        gray50: "#fafbfc",
        gray100: "#f4f5f8",
        gray150: "#F3F4F6",
        gray200: "#e3e7ed",
        gray250: "#e2e2e2",
        gray300: "#cdd4e0",
        gray400: "#b4bdce",
        gray500: "#97a3b9",
        gray600: "#7987a1",
        gray700: "#596882",
        gray800: "#3b4863",
        gray900: "#1c273c",
        gray950: "#637388",
        pink: "#f10075",
        orange: "#fd7e14",
        cyan: "#17a2b8",
        lightblue: "#a5d7fd",
        android: "#7AC157",
        apple: "#B8B8B8",
        behance: "#1869FF",
        codepen: "#000000",
        dribbble: "#EA4C8A",
        google: "#4285F4",
        dropbox: "#007EE5",
        evernote: "#78D525",
        facebook: "#4867AA",
        pinterest: "#BD081B",
        youtube: "#FE0000",
        linkedin: "#007BB6",
        github: "#313131",
        instagram: "#B23A94",
        css3: "#0277BD",
        html5: "#E44D26",
        javascript: "#F9DC3D"
    },
    fonts: {
        body: 'Open Sans',
        heading: 'Raleway',
        montserrat: 'Montserrat'
    },
    fontSizes: {
        body: "16px",
        standard: "14px"
    },
    fontWeights: {
        body: 400,
        medium: 500,
        subHeading: 600,
        heading: 700
    },
    lineHeights: {
        body: 1.625,
        heading: 1.25
    },
    radii: {
        sm: "3px",
        md: "5px",
        lg: "8px",
        rounded: "4px",
        circle: "50%",
        pill: "500px"
    },
    shadows: {
        default: "0 0 12px 3px rgba(0, 0, 0, 0.06)",
        sm: "0px -1px 1px 0px rgba(0,0,0, .2)",
        lg: "0 1rem 3rem rgba(0, 0, 0, .175)",
        input: "0 0 0 0.2rem rgb(1 104 250 / 25%)"
    },
    breakpoints: [
        ...breakpoints
    ],
    transition: "all 0.4s ease 0s"
};
}),
"[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "devices",
    ()=>devices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$theme$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styled/theme.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
;
;
;
const devices = {
    xs: `@media screen and (max-width: 575px)`,
    sm: `@media screen and (max-width: 767px)`,
    md: `@media screen and (max-width: 991px)`,
    lg: `@media screen and (max-width: 1199px)`,
    xl: `@media screen and (max-width: 1399px)`,
    xxl: `@media screen and (min-width: 1400px)`
};
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"];
}),
"[project]/src/pages/_document.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyDocument
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/document.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
;
;
;
class MyDocument extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"] {
    static async getInitialProps(ctx) {
        const sheet = new __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["ServerStyleSheet"]();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = ()=>originalRenderPage({
                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(App, {
                                ...props
                            }, void 0, false, {
                                fileName: "[project]/src/pages/_document.jsx",
                                lineNumber: 13,
                                columnNumber: 33
                            }, this))
                });
            const initialProps = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].getInitialProps(ctx);
            return {
                ...initialProps,
                styles: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                    children: [
                        initialProps.styles,
                        sheet.getStyleElement()
                    ]
                }, void 0, true)
            };
        } finally{
            sheet.seal();
        }
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__310379ea._.js.map