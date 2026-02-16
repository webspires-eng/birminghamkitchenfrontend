module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/src/components/ui/image/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
;
;
;
const shimmer = (w, h)=>`
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#eaeae8" offset="20%" />
          <stop stop-color="#eaeae8" offset="50%" />
          <stop stop-color="#eaeae8" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#eaeae8" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
`;
const toBase64 = (str)=>("TURBOPACK compile-time truthy", 1) ? Buffer.from(str).toString('base64') : "TURBOPACK unreachable";
const Image = ({ src, alt, width, height, ...props })=>{
    const isFill = props.layout === "fill" || props.fill;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        alt: alt,
        src: src,
        ...!isFill && {
            width: width || 500,
            height: height || 500
        },
        unoptimized: true,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/image/index.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
Image.propTypes = {
    src: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string.isRequired,
    alt: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string.isRequired
};
const __TURBOPACK__default__export__ = Image;
}),
"[project]/src/data/settings.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Birmingham Kitchens & Bedrooms","description":"Premium Kitchens & Bedrooms","languages":[{"value":"dutch","label":"Dutch"},{"value":"arabic","label":"Arabic"},{"value":"english","label":"English"},{"value":"bengali","label":"Bengali"},{"value":"italian","label":"Italian"}],"currencies":[{"value":"usd","label":"USD"},{"value":"bdt","label":"BDT"},{"value":"eur","label":"EURO"},{"value":"omr","label":"OMR"}],"countries":[{"value":"afghanistan","label":"Afghanistan"},{"value":"aus","label":"Australia"},{"value":"bd","label":"Bangladesh"},{"value":"india","label":"India"},{"value":"uk","label":"United Kingdom"},{"value":"us","label":"United State"}],"state":[{"value":"dhaka","label":"Dhaka"},{"value":"ny","label":"New York"},{"value":"kolkata","label":"Kolkata"}]});}),
"[project]/src/assets/css/keyframes.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bounce",
    ()=>bounce,
    "fadeInUp",
    ()=>fadeInUp,
    "fadeOutUp",
    ()=>fadeOutUp,
    "spin",
    ()=>spin,
    "spinAround",
    ()=>spinAround
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
;
const fadeOutUp = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["keyframes"]`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;
const fadeInUp = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const spinAround = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["keyframes"]`
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
`;
const bounce = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["keyframes"]`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -20px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -10px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;
const spin = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["keyframes"]`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
`;
}),
"[project]/src/components/ui/button/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/im/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/css/keyframes.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
;
;
;
;
;
;
;
const Button = ({ tag, children, href, loading, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], {
        children: [
            tag === "a" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledLink, {
                    ...props,
                    children: [
                        children,
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Loading, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ImSpinner2"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/button/index.jsx",
                                lineNumber: 25,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/button/index.jsx",
                            lineNumber: 24,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/button/index.jsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/button/index.jsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            tag === "button" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StyledButton, {
                ...props,
                children: [
                    children,
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Loading, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ImSpinner2"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/button/index.jsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/button/index.jsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/button/index.jsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/button/index.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
Button.propTypes = {
    tag: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].oneOf([
        "a",
        "button"
    ]),
    href: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    bg: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    color: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    hvrColor: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    hvrBg: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    hvrBorderColor: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const Loading = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].span`
  margin-left: 5px;
  vertical-align: middle;

  svg {
    animation: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["spin"]} 1s infinite;
  }
`;
const ButtonCSS = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
  display: inline-block;
  text-align: center;
  padding: 17px 36px;
  border-radius: 0;
  line-height: 1;
  border: 0;
  transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("transition")};
  font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("fontSizes.body")};
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("fonts.heading")};
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("fontWeights.subHeading")};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    padding: 15px 25px;
  }

  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["color"]}
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["border"]}
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["typography"]}
  &:hover {
    color: ${({ hvrColor })=>hvrColor && (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])(`colors.${hvrColor}`)};
    background-color: ${({ hvrBg })=>hvrBg && (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])(`colors.${hvrBg}`)};
    border-color: ${({ hvrBorderColor })=>hvrBorderColor && (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])(`colors.${hvrBorderColor}`)};
  }
`;
const StyledButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].button`
  ${ButtonCSS};

  ${({ textTransform })=>textTransform && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      text-transform: ${textTransform};
    `}

  ${({ disabled })=>disabled && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      opacity: 0.5;
      pointer-events: none;
    `}
`;
const StyledLink = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].span`
  ${ButtonCSS};

  ${({ textTransform })=>textTransform && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      text-transform: ${textTransform};
    `}

  ${({ disabled })=>disabled && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      opacity: 0.5;
      pointer-events: none;
    `}
`;
const __TURBOPACK__default__export__ = Button;
}),
"[project]/src/pages/404.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/image/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$settings$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/settings.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$global$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/css/global.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
const thumb = "/images/error.png";
;
const Error404Page = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Page not found (404) :: " + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$settings$2e$json__$28$json$29$__["default"]?.title
                    }, void 0, false, {
                        fileName: "[project]/src/pages/404.jsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$settings$2e$json__$28$json$29$__["default"]?.description
                    }, void 0, false, {
                        fileName: "[project]/src/pages/404.jsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/404.jsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$global$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ErrorPage"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: thumb,
                            width: 320,
                            height: 115,
                            alt: "Furns 404 Error Page"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/404.jsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            children: "That Page Can’t be found!"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/404.jsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: "It looks like nothing was found at this location."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/404.jsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            mt: "35px",
                            tag: "button",
                            bg: "primary",
                            color: "white",
                            borderRadius: "sm",
                            hvrBg: "secondary",
                            fontSize: "standard",
                            onClick: ()=>router.back(),
                            children: "Go to Back"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/404.jsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/404.jsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/404.jsx",
                lineNumber: 19,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/404.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Error404Page;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__77bf2d45._.js.map