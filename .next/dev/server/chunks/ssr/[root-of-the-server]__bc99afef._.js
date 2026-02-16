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
"[project]/src/components/ui/dropdown/dropdwon.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownToggleButton",
    ()=>DropdownToggleButton,
    "DropdownWrap",
    ()=>DropdownWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const DropdownToggleButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].button`
  border: none;
  display: flex;
  cursor: pointer;
  font-size: 14px;
  padding-left: 15px;
  border-radius: 3px;
  align-items: center;
  transition: all .3s ease 0s;
  background-color: transparent;
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("fonts.heading")};
  color: ${(props)=>props.color ? props.color : (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};

  svg {
    font-size: 18px;
    margin-left: 7px;
    line-height: 23px;
    transition: all .3s ease 0s;
  }

  &.header-action-btn {
    svg {
      margin-left: 0;
      line-height: 1;
      font-size: 24px;
    }
  }

  &:hover {
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
  }
`;
const DropdownWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: relative;

  &:not(:last-child) {
    button {
      padding-right: 15px;
      border-right: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.borderDark')};
    }
  }
`;
const DropdownMenu = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ul`
  margin: 0;
  top: 45px;
  opacity: 0;
  z-index: 9;
  border: none;
  padding: 0 15px;
  min-width: 130px;
  border-radius: 0;
  overflow: hidden;
  position: absolute;
  pointer-events: none;
  transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};
  background: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  box-shadow: 0 3px 25.5px 4.5px rgb(0 0 0 / 6%);

  li {
    &:not(:last-child) {
      border-bottom: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.borderLight")};
    }

    a {
      padding: 10px;
      font-size: 13px;
      display: block;
      line-height: 25px;
      text-decoration: none;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.text")};

      &:hover {
        color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
      }
    }
  }

  &.show {
    top: 34px;
    opacity: 1;
    pointer-events: visible;
  }

  ${(props)=>props.align === 'left' && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    left: 0;
    right: auto;
  `}

  ${(props)=>props.align === 'right' && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    right: 0;
    left: auto;
  `}

  ${(props)=>props.align === 'center' && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    right: 0;
    left: 50%;
    transform: translateX(-50%);
  `}
`;
}),
"[project]/src/components/ui/dropdown/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2f$dropdwon$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown/dropdwon.style.jsx [ssr] (ecmascript)");
;
;
;
;
const Dropdown = ({ align, heading, children })=>{
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2f$dropdwon$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownWrap"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2f$dropdwon$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownToggleButton"], {
                className: isDropdownOpen ? 'show' : 'hide',
                onClick: ()=>setIsDropdownOpen((prevState)=>!prevState),
                children: [
                    heading && heading,
                    isDropdownOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosArrowUp"], {}, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown/index.jsx",
                        lineNumber: 15,
                        columnNumber: 35
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosArrowDown"], {}, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown/index.jsx",
                        lineNumber: 15,
                        columnNumber: 53
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dropdown/index.jsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2f$dropdwon$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                align: align,
                className: isDropdownOpen ? 'show' : 'hide',
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown/index.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown/index.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Dropdown;
}),
"[project]/src/components/layout/header/header.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionItem",
    ()=>ActionItem,
    "CartItemCount",
    ()=>CartItemCount,
    "HeaderAction",
    ()=>HeaderAction,
    "HeaderActionAnchor",
    ()=>HeaderActionAnchor,
    "HeaderActionBtn",
    ()=>HeaderActionBtn,
    "HeaderArea",
    ()=>HeaderArea,
    "HeaderBottomWrap",
    ()=>HeaderBottomWrap,
    "HeaderNavigation",
    ()=>HeaderNavigation,
    "HeaderTopMessage",
    ()=>HeaderTopMessage,
    "HeaderTopSetLanCurr",
    ()=>HeaderTopSetLanCurr,
    "HeaderTopWrap",
    ()=>HeaderTopWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
;
const CartItemCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].span`
  font-size: 10px;
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.body')};
  line-height: 17px;
  position: absolute;
  z-index: 2;
  top: -3px;
  right: -4px;
  height: 17px;
  width: 17px;
  text-align: center;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  border-radius: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('radii.circle')};
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
`;
const HeaderBtnStyle = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
  padding: 0;
  line-height: 1;
  position: relative;
  text-decoration: none;
  background-color: transparent;
  color: #333;
  transition: all 0.2s ease;

  &:hover {
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    transform: translateY(-2px);
  }

  svg {
    font-size: 26px;
    line-height: 1;
  }
`;
const HeaderActionBtn = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].button`
  ${HeaderBtnStyle}
`;
const HeaderActionAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].a`
  ${HeaderBtnStyle}
`;
const ActionItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: relative;
  line-height: 1;

  button {
    padding-left: 0;
    padding-right: 0;
  }
`;
const HeaderAction = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  & > * {
    margin: 0 !important;
    padding: 0 !important;
    
    &:before {
      display: none !important;
    }
  }
`;
const HeaderBottomWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  padding: 10px 0;
  position: relative;
  
  .header-content-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const HeaderNavigation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
const HeaderTopSetLanCurr = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.heading')};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    justify-content: center;
  }
`;
const HeaderTopMessage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].p`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0;
  font-style: italic;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.white")};
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("fonts.heading")};
  ${({ center })=>center && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    text-align: center;
  `}
`;
const HeaderTopWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["color"]};

  padding: 8px 0;
  background-color: #005DAA;
`;
const HeaderArea = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    position: fixed;
    background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
    border-bottom: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.borderLight')};
    
    svg {
      font-size: 22px;
    }
  }
`;
}),
"[project]/src/components/layout/header/header-top.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/header.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
const HeaderTop = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderTopWrap"], {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                    md: 12,
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderTopMessage"], {
                        center: true,
                        style: {
                            fontSize: '13px',
                            letterSpacing: '1px',
                            fontStyle: 'normal',
                            fontWeight: '500'
                        },
                        children: "FREE DELIVERY ON ALL ORDERS | 0% FINANCE AVAILABLE | CRAFTED IN THE UK"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/header-top.jsx",
                        lineNumber: 14,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header/header-top.jsx",
                    lineNumber: 13,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header/header-top.jsx",
                lineNumber: 12,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header/header-top.jsx",
            lineNumber: 11,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header/header-top.jsx",
        lineNumber: 10,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
HeaderTop.propTypes = {
    bg: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = HeaderTop;
}),
"[project]/src/data/nav/index.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"text":"Home","link":"/","mega_menu":false},{"text":"Ottoman Divan Bed","link":"/collection/ottoman-divan-bed","mega_menu":false},{"text":"About","link":"/about","mega_menu":false},{"text":"Contact","link":"/contact","mega_menu":false},{"text":"Cart","link":"/cart","mega_menu":false}]);}),
"[project]/src/data/settings.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"title":"Birmingham Kitchens & Bedrooms","description":"Premium Kitchens & Bedrooms","languages":[{"value":"dutch","label":"Dutch"},{"value":"arabic","label":"Arabic"},{"value":"english","label":"English"},{"value":"bengali","label":"Bengali"},{"value":"italian","label":"Italian"}],"currencies":[{"value":"usd","label":"USD"},{"value":"bdt","label":"BDT"},{"value":"eur","label":"EURO"},{"value":"omr","label":"OMR"}],"countries":[{"value":"afghanistan","label":"Afghanistan"},{"value":"aus","label":"Australia"},{"value":"bd","label":"Bangladesh"},{"value":"india","label":"India"},{"value":"uk","label":"United Kingdom"},{"value":"us","label":"United State"}],"state":[{"value":"dhaka","label":"Dhaka"},{"value":"ny","label":"New York"},{"value":"kolkata","label":"Kolkata"}]});}),
"[project]/src/components/ui/logo/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$settings$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/settings.json (json)");
;
;
;
;
;
;
;
const LogoWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  &.logo--desktop {
    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
      display: none;
    }
  }

  &.logo--mobile {
    display: none;

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
      display: block;
    }
  }

  a {
    display: inline-flex;
    overflow: hidden;
    position: relative;

    ${({ width })=>width && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      width: ${width + 'px'};
    `}

    ${({ height })=>height && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      height: ${height + 'px'};
    `}
  }
`;
const Logo = ({ width, height, src, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LogoWrap, {
        width: width,
        height: height,
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            legacyBehavior: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                    src: src || "/images/logo/logo.png",
                    width: width,
                    height: height,
                    alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$settings$2e$json__$28$json$29$__["default"].title,
                    style: {
                        objectFit: "contain"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/logo/index.jsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/logo/index.jsx",
                lineNumber: 42,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/logo/index.jsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/logo/index.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
Logo.defaultProps = {
    width: 172,
    height: 40
};
Logo.propTypes = {
    width: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].number,
    height: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].number,
    src: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string.isRequired
};
const __TURBOPACK__default__export__ = Logo;
}),
"[project]/src/components/ui/offCanvas/style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OffCanvasCloseBtn",
    ()=>OffCanvasCloseBtn,
    "OffCanvasContent",
    ()=>OffCanvasContent,
    "OffCanvasHead",
    ()=>OffCanvasHead,
    "OffCanvasInner",
    ()=>OffCanvasInner,
    "OffCanvasOverlay",
    ()=>OffCanvasOverlay,
    "OffCanvasTitle",
    ()=>OffCanvasTitle,
    "OffCanvasWrap",
    ()=>OffCanvasWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
;
;
const OffCanvasCloseBtn = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].button`
  position: relative;
  width: 20px;
  height: 20px;
  text-indent: -9999px;
  border: 0;
  background-color: transparent;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 20px;
    height: 2px;
    transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("transition")};
    transform: rotate(-45deg);
    background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.primary")};
  }

  &::before {
    transform: rotate(45deg);
  }

  &:hover {
    &:before {
      transform: rotate(180deg);
    }

    &:after {
      transform: rotate(0deg);
    }
  }
`;
const OffCanvasTitle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h3`
  font-size: 20px;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.heading")};
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("fonts.body")};
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("fontWeights.heading")};
`;
const OffCanvasHead = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.borderLight")};
`;
const OffCanvasContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const OffCanvasInner = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  width: 100%;
  height: 100%;
  max-width: 385px;
  margin-left: auto;
  position: relative;
  transform: translateX(100%);
  transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("transition")};
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.white")};
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["layout"]};
`;
const OffCanvasOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
`;
const OffCanvasWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].aside`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("transition")};
  font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("fontSizes.standard")};
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("fontWeights.body")};

  ${({ open })=>open && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      opacity: 1;
      visibility: visible;
      pointer-events: visible;

      ${OffCanvasInner} {
        transform: translateX(0);
      }

      ${OffCanvasOverlay} {
        opacity: 1;
        visibility: visible;
        pointer-events: visible;
      }
    `}

  ${({ position })=>position === "center" && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
        padding: 0 15px;
      }
      ${OffCanvasInner} {
        top: 50%;
        margin: auto;
        height: auto;
        overflow-y: auto;
        max-height: 700px;
        transform: translateY(-50%);
      }
    `}
`;
}),
"[project]/src/components/ui/offCanvas/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/offCanvas/style.jsx [ssr] (ecmascript)");
;
;
;
const OffCanvas = ({ children, open, onHandler, position, maxWidth })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasWrap"], {
        open: open,
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasInner"], {
                maxWidth: maxWidth,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasContent"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/offCanvas/index.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/offCanvas/index.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasOverlay"], {
                onClick: ()=>onHandler()
            }, void 0, false, {
                fileName: "[project]/src/components/ui/offCanvas/index.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/offCanvas/index.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
OffCanvas.propTypes = {
    position: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    open: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool.isRequired,
    onHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired
};
const __TURBOPACK__default__export__ = OffCanvas;
}),
"[project]/src/components/layout/navbar/mobile-nav.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const MobileNav = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].nav`
  padding: 20px;

  ul {
    font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};

    li {
      a {
        display: flex;
        font-size: 13px;
        align-items: center;
        padding: 5px 0;
        text-transform: uppercase;
        justify-content: space-between;
        color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.dark2')};
        font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};

        &:hover {
          color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
        }

        svg {
          font-size: 16px;
          line-height: 1;
          color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.darkgray')};

          &.minus {
            display: none;
          }
        }

        &.mm-next-level {
          & ~ ul {
            display: none;
          }

          &.menu-expand {
            svg {
              &.minus {
                display: block;
              }

              &.plus {
                display: none;
              }
            }
          }
        }
      }

      ul {
        padding-left: 10px;

        a {
          padding-top: 3px;
          padding-bottom: 3px;
          text-transform: capitalize;
        }
      }
    }
  }
`;
}),
"[project]/src/utils/method.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/***
 * Get Siblings
 * @param elem
 * @returns {[]}
 */ __turbopack_context__.s([
    "arrSortByCharacter",
    ()=>arrSortByCharacter,
    "excerpt",
    ()=>excerpt,
    "flatDeep",
    ()=>flatDeep,
    "formatDate",
    ()=>formatDate,
    "getClosest",
    ()=>getClosest,
    "getCookieFromContext",
    ()=>getCookieFromContext,
    "getSiblings",
    ()=>getSiblings,
    "isFloat",
    ()=>isFloat,
    "range",
    ()=>range,
    "slideDown",
    ()=>slideDown,
    "slideToggle",
    ()=>slideToggle,
    "slideUp",
    ()=>slideUp,
    "toCapitalize",
    ()=>toCapitalize,
    "totalDays",
    ()=>totalDays
]);
const getSiblings = (elem)=>{
    let siblings = [];
    let sibling = elem.parentNode.firstChild;
    while(sibling){
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
const slideUp = (element, duration = 500)=>{
    return new Promise(function(resolve, reject) {
        element.style.height = element.offsetHeight + "px";
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = duration + "ms";
        element.offsetHeight;
        element.style.overflow = "hidden";
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        window.setTimeout(function() {
            element.style.display = "none";
            element.style.removeProperty("height");
            element.style.removeProperty("padding-top");
            element.style.removeProperty("padding-bottom");
            element.style.removeProperty("margin-top");
            element.style.removeProperty("margin-bottom");
            element.style.removeProperty("overflow");
            element.style.removeProperty("transition-duration");
            element.style.removeProperty("transition-property");
            resolve(false);
        }, duration);
    });
};
const slideDown = (element, duration = 500)=>{
    return new Promise(function(resolve, reject) {
        element.style.removeProperty("display");
        let display = window.getComputedStyle(element).display;
        if (display === "none") display = "block";
        element.style.display = display;
        let height = element.offsetHeight;
        element.style.overflow = "hidden";
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight;
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = duration + "ms";
        element.style.height = height + "px";
        element.style.removeProperty("padding-top");
        element.style.removeProperty("padding-bottom");
        element.style.removeProperty("margin-top");
        element.style.removeProperty("margin-bottom");
        window.setTimeout(function() {
            element.style.removeProperty("height");
            element.style.removeProperty("overflow");
            element.style.removeProperty("transition-duration");
            element.style.removeProperty("transition-property");
        }, duration);
    });
};
const slideToggle = (element, duration = 500)=>{
    if (window.getComputedStyle(element).display === "none") {
        return slideDown(element, duration);
    } else {
        return slideUp(element, duration);
    }
};
const getClosest = (elem, selector)=>{
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
            let matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
            while(--i >= 0 && matches.item(i) !== this){}
            return i > -1;
        };
    }
    for(; elem && elem !== document; elem = elem.parentNode){
        if (elem.matches(selector)) return elem;
    }
    return null;
};
const flatDeep = (arr, d = 1)=>{
    return d > 0 ? arr.reduce((acc, val)=>acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) : arr.slice();
};
const range = (start, end, interval)=>{
    let ans = [];
    let result = [];
    for(let i = start; i <= end; i += interval){
        ans.push(i);
    }
    ans.shift();
    let lastValue;
    ans.map((i, index)=>{
        result.push(`${index === 0 ? 0 : i - interval + 1} - ${i}`);
        lastValue = [
            ...ans.values()
        ].pop();
    });
    result.push(`${lastValue + 1} - ${end}`);
    return result;
};
const arrSortByCharacter = (arr)=>{
    return arr.sort((a, b)=>{
        const nameA = a.toLowerCase();
        const nameB = b.toLowerCase();
        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
};
const isFloat = (n)=>{
    return Number(n) === n && n % 1 !== 0;
};
const toCapitalize = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
};
const excerpt = (content, limit = 30)=>{
    return content.split(" ").slice(0, limit).join(" ");
};
const formatDate = (date)=>{
    let d = new Date(date), month = "" + d.getMonth(), day = "" + d.getDate(), year = d.getFullYear();
    if (day.length < 2) day = "0" + day;
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return `${day} ${months[month]}, ${year}`;
};
const totalDays = (date)=>{
    const dt1 = new Date();
    const dt2 = new Date(date);
    const oneDay = 24 * 60 * 60 * 1000;
    let diff = dt1 - dt2;
    return Math.abs(Math.round(diff / oneDay));
};
const decoding = (text, decodeType)=>{
    try {
        return decodeType(text);
    } catch (e) {
        return text;
    }
};
const getCookieFromContext = (text, options)=>{
    var pairSplitRegExp = /; */;
    var decode = decodeURIComponent;
    var value = {};
    var value = options || {};
    var pairs = text?.split(pairSplitRegExp) ?? [];
    var dec = value.decode || decode;
    for(var i = 0; i < pairs.length; i++){
        var pair = pairs[i];
        var idx = pair.indexOf("=");
        if (idx < 0) {
            continue;
        }
        var key = pair.substr(0, idx).trim();
        var val = pair.substr(++idx, pair.length).trim();
        if ('"' == val[0]) {
            val = val.slice(1, -1);
        }
        if (undefined == value[key]) {
            value[key] = decoding(val, dec);
        }
    }
    return value;
};
}),
"[project]/src/components/layout/navbar/mobile-nav.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nav$2f$index$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/nav/index.json (json)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/logo/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/offCanvas/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/cg/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$mobile$2d$nav$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/navbar/mobile-nav.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/method.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/offCanvas/style.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const MobileNavbar = ({ isOpen, onHandler })=>{
    const onNavHandler = (e)=>{
        const target = e.target;
        const hasSubmenus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSiblings"])(target);
        hasSubmenus.length > 0 && e.preventDefault();
        target.classList.toggle('menu-expand');
        const parent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getClosest"])(target, "LI");
        const childNodes = parent.childNodes;
        const parentSiblings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSiblings"])(parent);
        parentSiblings.forEach((sibling)=>{
            const sibChildNodes = sibling.childNodes;
            sibChildNodes.forEach((child)=>{
                if (child.classList.contains('mm-next-level')) {
                    child.classList.remove('menu-expand');
                }
                if (child.nodeName === "UL") {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["slideUp"])(child, 300);
                }
            });
        });
        childNodes.forEach((child)=>{
            if (child.nodeName === "UL") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["slideToggle"])(child, 300);
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: isOpen,
        onHandler: onHandler,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasHead"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        width: 100,
                        src: "/images/logo/logo.png"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasCloseBtn"], {
                        onClick: ()=>onHandler(),
                        children: "x"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                lineNumber: 42,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$mobile$2d$nav$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MobileNav"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nav$2f$index$2e$json__$28$json$29$__["default"].map((nav)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: nav?.link,
                                    onClick: (event)=>onNavHandler(event),
                                    className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])({
                                        'mm-next-level': nav?.submenu || nav?.mega_menu
                                    }),
                                    children: [
                                        nav?.text,
                                        (nav?.submenu || nav?.mega_menu) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CgMathPlus"], {
                                            className: "plus"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                                            lineNumber: 60,
                                            columnNumber: 70
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        (nav?.submenu || nav?.mega_menu) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CgMathMinus"], {
                                            className: "minus"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                                            lineNumber: 61,
                                            columnNumber: 70
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                nav?.submenu && nav?.submenu.map((subitem, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        children: subitem?.list.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                className: item.badge,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item?.link,
                                                    children: item?.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                                                    lineNumber: 68,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, item?.text, false, {
                                                fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                                                lineNumber: 67,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, idx, false, {
                                        fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                                        lineNumber: 65,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, nav?.text, true, {
                            fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                            lineNumber: 53,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/navbar/mobile-nav.jsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
MobileNavbar.propTypes = {
    isOpen: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool.isRequired,
    onHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired
};
const __TURBOPACK__default__export__ = MobileNavbar;
}),
"[project]/src/components/layout/navbar/desktop-nav.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav,
    "NavList",
    ()=>NavList,
    "NavbarWrap",
    ()=>NavbarWrap,
    "SubMenu",
    ()=>SubMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const Nav = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].nav`
  display: flex;
  justify-content: ${(props)=>props.align ? props.align : 'center'};
`;
const NavList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;

  & > li {
    & + {
      li {
        margin-left: 40px;
      }
    }

    a {
      display: block;
      line-height: 40px;
      letter-spacing: .5px;
      text-decoration: none;
      text-transform: capitalize;
      color: #333;
      font-weight: 500;
      font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};
      font-size: 15px;

      svg {
        transform: translate(2px, 3px);
      }
    }

    &.dropdown {
      position: relative;

      &:hover {
        ul {
          pointer-events: visible;
          transform: none;
          opacity: 1;
          visibility: visible;
        }
      }
    }

    &:hover, &.active {
      & > a {
        color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
      }
    }
  }
`;
const SubMenu = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ul`
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  position: absolute;
  z-index: 2;
  text-align: left;
  min-width: 205px;
  left: auto;
  box-shadow: 0 0 3.76px 0.24px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  transform: rotateX(-75deg);
  transform-origin: 0 0;
  transition: transform 0.4s, opacity 0.3s;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  li {

    a {
      display: block;
      line-height: 19px;
      padding: 10px 0 10px 20px;
      border-bottom: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.borderLight')};
      height: 40px;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.black')};

      &:hover {
        color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
      }
    }
  }
`;
const NavbarWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["color"]};
  position: relative;

  ${NavList} {
    & > li {
      a {
        color: inherit;
      }

      &:hover, &.active {
        & > a {
          color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
        }

        ul {
          li {
            a {
              &:hover {
                color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
              }
            }
          }
        }
      }
    }
  }
`;
}),
"[project]/src/components/layout/navbar/desktop-nav.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nav$2f$index$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/nav/index.json (json)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$desktop$2d$nav$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/navbar/desktop-nav.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const DesktopNav = ({ className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$desktop$2d$nav$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["NavbarWrap"], {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$desktop$2d$nav$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Nav"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$desktop$2d$nav$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["NavList"], {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nav$2f$index$2e$json__$28$json$29$__["default"].map((navItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        className: navItem.submenu ? "dropdown" : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: navItem.link,
                                children: [
                                    navItem.text,
                                    navItem.submenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosArrowDown"], {}, void 0, false, {
                                        fileName: "[project]/src/components/layout/navbar/desktop-nav.jsx",
                                        lineNumber: 18,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/navbar/desktop-nav.jsx",
                                lineNumber: 16,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            navItem.submenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$desktop$2d$nav$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SubMenu"], {
                                children: navItem.submenu.map((item)=>item.list.map((subItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: subItem.link,
                                                children: subItem.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/navbar/desktop-nav.jsx",
                                                lineNumber: 26,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, index, false, {
                                            fileName: "[project]/src/components/layout/navbar/desktop-nav.jsx",
                                            lineNumber: 25,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/navbar/desktop-nav.jsx",
                                lineNumber: 22,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/layout/navbar/desktop-nav.jsx",
                        lineNumber: 15,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/navbar/desktop-nav.jsx",
                lineNumber: 13,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/navbar/desktop-nav.jsx",
            lineNumber: 12,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/navbar/desktop-nav.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
DesktopNav.propTypes = {
    bg: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = DesktopNav;
}),
"[project]/src/components/layout/navbar/index.jsx [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$mobile$2d$nav$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/navbar/mobile-nav.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$desktop$2d$nav$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/navbar/desktop-nav.jsx [ssr] (ecmascript)");
;
;
;
}),
"[project]/src/components/layout/navbar/desktop-nav.jsx [ssr] (ecmascript) <export default as DesktopNavbar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesktopNavbar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$desktop$2d$nav$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$desktop$2d$nav$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/navbar/desktop-nav.jsx [ssr] (ecmascript)");
}),
"[project]/src/global/actions/compareAction.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCompareAction",
    ()=>addToCompareAction,
    "removeCompareAction",
    ()=>removeCompareAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$compareSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/slices/compareSlice.js [ssr] (ecmascript)");
;
const addToCompareAction = (payload)=>(dispatch)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$compareSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addToCompare"])(payload));
    };
const removeCompareAction = (payload)=>(dispatch)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$compareSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeCompare"])(payload));
    };
}),
"[project]/src/global/actions/wishlistAction.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToWishlistAction",
    ()=>addToWishlistAction,
    "removeWishlistAction",
    ()=>removeWishlistAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$wishlistSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/slices/wishlistSlice.js [ssr] (ecmascript)");
;
const addToWishlistAction = (payload)=>(dispatch)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$wishlistSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addToWishlist"])(payload));
    };
const removeWishlistAction = (payload)=>(dispatch)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$wishlistSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeWishlist"])(payload));
    };
}),
"[project]/src/utils/product.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/***
 *  Get Quantity of Product from Cart
 * @param shoppingCart
 * @param product
 * @param variations
 * @returns {number|*}
 */ __turbopack_context__.s([
    "getCartProduct",
    ()=>getCartProduct,
    "getCartProductQuantity",
    ()=>getCartProductQuantity,
    "getCartProductTotalPrice",
    ()=>getCartProductTotalPrice,
    "getCartProductsQuantity",
    ()=>getCartProductsQuantity,
    "getCartTotalPrice",
    ()=>getCartTotalPrice,
    "getCartTotalQuantity",
    ()=>getCartTotalQuantity,
    "getDiscountPercentage",
    ()=>getDiscountPercentage,
    "getFeaturedProducts",
    ()=>getFeaturedProducts,
    "getProductStock",
    ()=>getProductStock,
    "getRelatedProducts",
    ()=>getRelatedProducts,
    "getSaleProducts",
    ()=>getSaleProducts,
    "getTendingProducts",
    ()=>getTendingProducts,
    "getWishCompareProduct",
    ()=>getWishCompareProduct
]);
const getCartProductQuantity = (shoppingCart, product, variations)=>{
    const productOnCart = shoppingCart.find((item)=>item?.id === product?.id && item?.variations === variations);
    if (productOnCart) {
        return productOnCart?.quantity;
    } else {
        return 0;
    }
};
const getCartTotalQuantity = (shoppingCart)=>{
    return shoppingCart.reduce((total, product)=>total + product.quantity, 0);
};
const getCartProductsQuantity = (shoppingCart)=>{
    return shoppingCart.length > 0 ? shoppingCart.length : 0;
};
const getCartProductTotalPrice = (shoppingCart, product)=>{
    const cartProduct = shoppingCart.filter((item)=>item.id === product.id && item.variations?.id === product.variations?.id);
    if (cartProduct.length > 0 && shoppingCart.length > 0) {
        return cartProduct[0].quantity * cartProduct[0].price;
    } else {
        return 0;
    }
};
const getCartTotalPrice = (shoppingCart)=>{
    return shoppingCart.reduce((total, product)=>total + product.price * product.quantity, 0);
};
const getCartProduct = (shoppingCart, product, variations)=>{
    return shoppingCart.find((item)=>item.id === product.id && item.variations === variations);
};
const getWishCompareProduct = (products, product)=>{
    return products.find((item)=>item.id === product.id);
};
const getSaleProducts = (products, limit)=>{
    const nonFilteredProducts = [
        ...products
    ];
    const filteredProducts = nonFilteredProducts?.map(({ node: product })=>{
        return {
            node: {
                ...product,
                onSale: product?.variants?.edges?.some(({ node: variant })=>{
                    return !!variant?.compareAtPriceV2;
                })
            }
        };
    }).filter(({ node: product })=>product.onSale);
    return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);
};
const getFeaturedProducts = (products, limit = -1)=>{
    const nonFilteredProducts = [
        ...products
    ];
    const filteredProducts = nonFilteredProducts?.map(({ node: product })=>{
        return {
            node: {
                ...product,
                featured: product?.tags.some((tag)=>tag === "featured")
            }
        };
    })?.filter(({ node: product })=>product.featured);
    return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);
};
const getTendingProducts = (products, limit = -1)=>{
    const nonFilteredProducts = [
        ...products
    ];
    const filteredProducts = nonFilteredProducts?.map(({ node: product })=>{
        return {
            node: {
                ...product,
                tending: product?.tags.some((tag)=>tag === "tending")
            }
        };
    })?.filter(({ node: product })=>product.tending);
    return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);
};
const getRelatedProducts = (categories, tags, products, limit)=>{
    const identityMap = {};
    if (tags.length === 0 && categories.length === 0) {
        return [];
    }
    const getID = (product)=>{
        return product.id;
    };
    const addToMap = (product)=>{
        const id = getID(product);
        if (!(id in identityMap)) {
            identityMap[id] = {
                product: product,
                points: 0
            };
        }
    };
    const addCategoriesPoints = (product, categories)=>{
        const point = 2;
        const id = getID(product);
        const prodCat = product.collections?.edges?.map(({ node })=>node?.handle);
        const compareToCat = categories.map(({ node })=>node?.handle);
        prodCat.forEach((cat)=>{
            if (compareToCat.includes(cat)) {
                identityMap[id].points += point;
            }
        });
    };
    const addTagsPoints = (product, tags)=>{
        const point = 1;
        const id = getID(product);
        const prodTag = product.tags.map((tag)=>tag);
        const compareToTag = tags.map((tag)=>tag);
        prodTag.forEach((tag)=>{
            if (compareToTag.includes(tag)) {
                identityMap[id].points += point;
            }
        });
    };
    const getIdentityMapAsArray = ()=>{
        return Object.keys(identityMap).map((id)=>identityMap[id]);
    };
    for (const product of products){
        addToMap(product?.node);
        if (categories.length) addCategoriesPoints(product?.node, categories);
        if (tags.length) addTagsPoints(product?.node, tags);
    }
    const arrayIdentityMap = getIdentityMapAsArray();
    const similarProducts = arrayIdentityMap.filter((arr)=>arr.points);
    similarProducts.sort((a, b)=>b.points - a.points).shift();
    return similarProducts.slice(0, limit).map((item)=>item.product);
};
const getProductStock = (product, variations)=>{
    let { variants } = product;
    variants = variants?.edges;
    return variants?.length > 1 ? variants?.find(({ node })=>node?.id === variations?.id)?.node?.quantityAvailable : variants[0]?.node?.quantityAvailable;
};
const getDiscountPercentage = (price, compareArPrice)=>{
    const difference = compareArPrice - price;
    return 100 * difference / compareArPrice;
};
}),
"[project]/src/hooks/useProduct.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import, [project]/node_modules/react-hot-toast)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, cjs, [project]/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$compareAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/actions/compareAction.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$wishlistAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/actions/wishlistAction.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/product.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const useProduct = (product)=>{
    const variants = product?.variants?.edges;
    const [sku, setSku] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])();
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])();
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])();
    const [material, setMaterial] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])();
    const [stock, setStock] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [variations, setVariations] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [compareAtPrice, setCompareAtPrice] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isDiscounted, setIsDiscounted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isShowQuickView, setIsShowQuickView] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useDispatch"])();
    const wishlist = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.wishlist);
    const compareList = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.compareList);
    const shoppingCart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.shoppingCart);
    const isInWishlist = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getWishCompareProduct"])(wishlist, product));
    const isInCart = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartProduct"])(shoppingCart, product, variations));
    const isInCompareList = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getWishCompareProduct"])(compareList, product));
    const cartProductQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartProductQuantity"])(shoppingCart, product, variations);
    const isStock = Boolean(stock === cartProductQuantity);
    const onVariantHandler = (selectedOptions)=>{
        const selectedVariantTitle = Object.values(selectedOptions).map((item)=>item.value).sort().toString();
        const selectedVariant = variants?.find(({ node })=>node?.title.split(" / ").sort().toString() === selectedVariantTitle)?.node;
        if (!selectedVariant) return;
        const { id, title, sku, priceV2, quantityAvailable, compareAtPriceV2 } = selectedVariant;
        setSku(sku);
        setPrice(priceV2?.amount);
        setStock(quantityAvailable);
        setVariations({
            id,
            title
        });
        setIsDiscounted(!!compareAtPriceV2);
        setCompareAtPrice(compareAtPriceV2 ? compareAtPriceV2?.amount : 0);
    };
    const onWishlistHandler = ()=>{
        !isInWishlist ? dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$wishlistAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addToWishlistAction"])(product)) : dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$wishlistAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeWishlistAction"])(product));
        !isInWishlist ? __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success(`"${product?.title}" is successfully added.`) : __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error(`"${product?.title}" is removed.`);
    };
    const onCompareHandler = ()=>{
        !isInCompareList ? dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$compareAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addToCompareAction"])(product)) : dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$compareAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeCompareAction"])(product));
        !isInCompareList ? __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success(`"${product?.title}" is successfully added.`) : __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error(`"${product?.title}" is removed.`);
    };
    const onQuickViewHandler = ()=>setIsShowQuickView((prevState)=>!prevState);
    const onDecrementQuantity = ()=>setQuantity((prevState)=>prevState > 1 ? prevState -= 1 : 1);
    const onIncrementQuantity = ()=>setQuantity((prevState)=>prevState < stock - cartProductQuantity ? prevState += 1 : prevState);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setSku(variants[0]?.node?.sku);
        setPrice(variants[0]?.node?.priceV2?.amount);
        setStock(variants[0].node?.quantityAvailable);
        setSize(variants[0]?.node?.selectedOptions[0]?.value);
        setIsDiscounted(!!variants[0].node?.compareAtPriceV2);
        setColor(variants[0]?.node?.selectedOptions[1]?.value);
        setMaterial(variants[0]?.node?.selectedOptions[2]?.value);
        setVariations({
            id: variants[0].node?.id,
            title: variants[0].node?.title
        });
        setCompareAtPrice(variants[0].node?.compareAtPriceV2 ? variants[0].node?.compareAtPriceV2?.amount : 0);
    }, []);
    return {
        sku,
        size,
        price,
        stock,
        color,
        isStock,
        material,
        isInCart,
        quantity,
        variations,
        setQuantity,
        isDiscounted,
        isInWishlist,
        compareAtPrice,
        isInCompareList,
        isShowQuickView,
        onCompareHandler,
        onVariantHandler,
        onWishlistHandler,
        onQuickViewHandler,
        cartProductQuantity,
        onDecrementQuantity,
        onIncrementQuantity
    };
};
const __TURBOPACK__default__export__ = useProduct;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/graphql/client.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const client = async (query, variables)=>{
    const storeName = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_NAME;
    const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
    // Check if configured properly
    const isConfigured = storeName && storeName !== "your store name" && accessToken && accessToken !== "your store access token";
    const endpoint = `https://${storeName}.myshopify.com/api/2021-07/graphql.json`;
    try {
        if (!isConfigured) {
            throw new Error("Shopify not configured, using mock data.");
        }
        const graphQLClient = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["GraphQLClient"](endpoint, {
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": accessToken
            }
        });
        return await graphQLClient.request(query, variables);
    } catch (error) {
        console.warn("GraphQL request failed, returning mock data to prevent crash.");
        console.warn(error.message);
        // Mock Data
        const mockProducts = [
            {
                node: {
                    id: "prod_1",
                    title: "Sofia Ottoman Divan Bed",
                    handle: "sofia-ottoman-divan-bed",
                    description: "The Sofia Ottoman Divan Bed is a perfect blend of style and practicality. Upholstered in premium plush velvet, it features a deep storage base and a stunning 54-inch floor-standing headboard.",
                    images: {
                        edges: [
                            {
                                node: {
                                    id: "img_s1",
                                    originalSrc: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000"
                                }
                            },
                            {
                                node: {
                                    id: "img_s2",
                                    originalSrc: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop"
                                }
                            },
                            {
                                node: {
                                    id: "img_s3",
                                    originalSrc: "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=1000&auto=format&fit=crop"
                                }
                            },
                            {
                                node: {
                                    id: "img_s4",
                                    originalSrc: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1000&auto=format&fit=crop"
                                }
                            },
                            {
                                node: {
                                    id: "img_s5",
                                    originalSrc: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000"
                                }
                            }
                        ]
                    },
                    variants: {
                        edges: [
                            {
                                node: {
                                    id: "var_1",
                                    title: "Pink Plush Velvet / Double / Free 54\" Headboard",
                                    priceV2: {
                                        amount: "419.99"
                                    },
                                    compareAtPriceV2: {
                                        amount: "839.98"
                                    },
                                    sku: "SOFIA-PINK-DBL",
                                    quantityAvailable: 10,
                                    selectedOptions: [
                                        {
                                            name: "Colour",
                                            value: "Pink Plush Velvet"
                                        },
                                        {
                                            name: "Size",
                                            value: "Double"
                                        },
                                        {
                                            name: "Headboard",
                                            value: "Free 54\" Headboard"
                                        }
                                    ]
                                }
                            },
                            {
                                node: {
                                    id: "var_2",
                                    title: "Grey Plush Velvet / King / Free 54\" Headboard",
                                    priceV2: {
                                        amount: "449.99"
                                    },
                                    compareAtPriceV2: {
                                        amount: "899.98"
                                    },
                                    sku: "SOFIA-GREY-KING",
                                    quantityAvailable: 10,
                                    selectedOptions: [
                                        {
                                            name: "Colour",
                                            value: "Grey Plush Velvet"
                                        },
                                        {
                                            name: "Size",
                                            value: "King"
                                        },
                                        {
                                            name: "Headboard",
                                            value: "Free 54\" Headboard"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    tags: [
                        "Bed",
                        "Ottoman",
                        "Velvet"
                    ],
                    collections: {
                        edges: []
                    },
                    options: [
                        {
                            id: "opt_1",
                            name: "Colour",
                            values: [
                                "Emerald Coniston",
                                "Blue Coniston",
                                "Pink Coniston",
                                "Armour Coniston",
                                "Charcoal Coniston",
                                "Mink Coniston",
                                "Almond Coniston",
                                "Black Plush Velvet",
                                "Blue Plush Velvet",
                                "Mink Plush Velvet",
                                "Pink Plush Velvet"
                            ]
                        },
                        {
                            id: "opt_2",
                            name: "Size",
                            values: [
                                "Small Single 2FT6",
                                "Single 3FT",
                                "Small Double 4FT",
                                "Double 4FT6",
                                "King 5FT",
                                "Super King 6FT"
                            ]
                        },
                        {
                            id: "opt_3",
                            name: "Headboard",
                            values: [
                                "Free 54\" Headboard",
                                "Premium 54\" Headboard"
                            ]
                        }
                    ]
                }
            },
            {
                node: {
                    id: "prod_2",
                    title: "Wooden Dining Table",
                    handle: "wooden-dining-table",
                    description: "Solid wood dining table that seats six. Durable and elegant.",
                    images: {
                        edges: [
                            {
                                node: {
                                    originalSrc: "/assets/images/products/wooden_dining_table_1771225556451.png"
                                }
                            }
                        ]
                    },
                    variants: {
                        edges: [
                            {
                                node: {
                                    id: "var_2",
                                    title: "Wood / Large",
                                    priceV2: {
                                        amount: "299.00"
                                    },
                                    compareAtPriceV2: null,
                                    sku: "TABLE-001",
                                    quantityAvailable: 5,
                                    selectedOptions: [
                                        {
                                            name: "Material",
                                            value: "Wood"
                                        },
                                        {
                                            name: "Size",
                                            value: "Large"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    tags: [
                        "Furniture",
                        "Table",
                        "Dining"
                    ],
                    collections: {
                        edges: []
                    },
                    options: [
                        {
                            id: "opt_3",
                            name: "Material",
                            values: [
                                "Wood"
                            ]
                        },
                        {
                            id: "opt_4",
                            name: "Size",
                            values: [
                                "Large"
                            ]
                        }
                    ]
                }
            },
            {
                node: {
                    id: "prod_3",
                    title: "Pendant Light Fixture",
                    handle: "pendant-light",
                    description: "Modern pendant light to illuminate your dining area.",
                    images: {
                        edges: [
                            {
                                node: {
                                    originalSrc: "/assets/images/products/pendant_light_fixture_1771225570305.png"
                                }
                            }
                        ]
                    },
                    variants: {
                        edges: [
                            {
                                node: {
                                    id: "var_3",
                                    title: "Gold / Pendant",
                                    priceV2: {
                                        amount: "89.00"
                                    },
                                    compareAtPriceV2: "120.00",
                                    sku: "LIGHT-001",
                                    quantityAvailable: 20,
                                    selectedOptions: [
                                        {
                                            name: "Color",
                                            value: "Gold"
                                        },
                                        {
                                            name: "Type",
                                            value: "Pendant"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    tags: [
                        "Lighting",
                        "Modern"
                    ],
                    collections: {
                        edges: []
                    },
                    options: [
                        {
                            id: "opt_5",
                            name: "Color",
                            values: [
                                "Gold"
                            ]
                        },
                        {
                            id: "opt_6",
                            name: "Type",
                            values: [
                                "Pendant"
                            ]
                        }
                    ]
                }
            }
        ];
        // Check for specific handle in variables or query
        const handleMatch = query.match(/handle:\s*"([^"]+)"/);
        const handle = variables?.handle || (handleMatch ? handleMatch[1] : null);
        let productByHandle = null;
        let collectionByHandle = null;
        if (handle) {
            // Check if it's a product query
            const foundProduct = mockProducts.find((p)=>p.node.handle === handle);
            if (foundProduct) {
                productByHandle = foundProduct.node;
            }
            // Mock Data for Collection
            // If the query asks for collectionByHandle, return a mock collection
            if (query.includes('collectionByHandle')) {
                collectionByHandle = {
                    title: handle.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                    handle: handle,
                    products: {
                        edges: mockProducts // For now, return all products for any collection
                    }
                };
            }
        }
        return {
            blogs: {
                edges: [
                    {
                        node: {
                            id: "blog_1",
                            title: "Latest Design Trends",
                            handle: "latest-design-trends",
                            excerpt: "Discover the hottest furniture trends of 2026.",
                            publishedAt: "2026-02-15",
                            authorV2: {
                                name: "John Doe"
                            },
                            image: {
                                originalSrc: "/assets/images/products/media__1771225471564.png"
                            },
                            contentHtml: "<p>Content goes here...</p>",
                            articles: {
                                edges: []
                            }
                        }
                    }
                ]
            },
            products: {
                edges: mockProducts
            },
            productByHandle: productByHandle,
            collectionByHandle: collectionByHandle,
            collections: {
                edges: []
            },
            siteSettings: null,
            customer: null
        };
    }
};
const __TURBOPACK__default__export__ = client;
}),
"[project]/src/graphql/query/blog.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const blogQuery = ({ slug })=>{
    const queryArguments = `handle: "${slug}"`;
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
        {
            blogs(first: 10) {
                edges {
                    node {
                        articleByHandle(${queryArguments}) {
                            id
                            handle
                            title
                            tags
                            excerpt
                            publishedAt
                            authorV2 {
                                name
                            }
                            image {
                                originalSrc
                            }
                            contentHtml
                        }
                    }
                }
            }
        }
    `;
};
const __TURBOPACK__default__export__ = blogQuery;
}),
"[project]/src/graphql/query/blogs.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const blogsQuery = (limit = 3)=>{
    const queryArguments = `first: ${limit}`;
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
        {
            blogs(first: 10) {
                edges {
                    node {
                        articles(${queryArguments}) {
                            edges {
                                node {
                                    id
                                    handle
                                    title
                                    tags
                                    excerpt
                                    publishedAt
                                    authorV2 {
                                        name
                                    }
                                    image {
                                        originalSrc
                                    }
                                    contentHtml
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
};
const __TURBOPACK__default__export__ = blogsQuery;
}),
"[project]/src/graphql/query/product.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const productQuery = (slug)=>{
    const queryArguments = `handle: "${slug}"`;
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
        {
            productByHandle(${queryArguments}) {
                id
                title
                handle
                description
                descriptionHtml
                options(first: 100) {
                    id
                    name
                    values
                }
                images(first: 100) {
                    edges {
                        node {
                            id
                            originalSrc
                        }
                    }
                }
                variants(first: 100) {
                    edges {
                        node {
                            id
                            sku
                            title
                            quantityAvailable
                            compareAtPriceV2 {
                                amount
                            }
                            priceV2 {
                                amount
                            }
                            selectedOptions {
                                name
                                value
                            }
                        }
                    }
                }
                tags
                collections(first:100){
                    edges{
                        node{
                            id,
                            handle
                        }
                    }
                }
            }
        }
    `;
};
const __TURBOPACK__default__export__ = productQuery;
}),
"[project]/src/graphql/query/customer.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const customerQuery = (customerAccessToken)=>{
    const queryArguments = `customerAccessToken: "${customerAccessToken}"`;
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
    {
      customer(${queryArguments}) {
        id
        firstName
        lastName
        displayName
        email
        phone
        addresses(first: 10) {
          edges {
            node {
              id
              name
              address1
              address2
              phone
              city
              company
              country
              zip
            }
          }
        }
        orders(first: 100) {
          edges {
            node {
              id
              name
              orderNumber
              processedAt
              cancelReason
              currentSubtotalPrice {
                amount
              }
              currentTotalPrice {
                amount
              }
              totalPriceV2 {
                amount
              }
              totalShippingPriceV2 {
                amount
              }
              totalTaxV2{
                amount
              }
              financialStatus
              fulfillmentStatus
              statusUrl
              shippingAddress {
                id
                name
                address1
                address2
                phone
                city
                company
                country
                zip
              }
              lineItems(first: 100) {
                edges {
                  node {
                    title
                    quantity
                    originalTotalPrice{
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
};
const __TURBOPACK__default__export__ = customerQuery;
}),
"[project]/src/graphql/query/products.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const productsQuery = (limit = 200, sortKey, reverse, search)=>{
    let queryArguments = `first: ${limit}`;
    if (sortKey) {
        queryArguments = `${queryArguments}, sortKey: ${sortKey}, reverse: ${reverse}`;
    }
    if (search) {
        queryArguments = `${queryArguments}, query: "title:${search.trim()}*"`;
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
        {
            products(${queryArguments}) {
            pageInfo {
                hasNextPage
                hasPreviousPage
            }
            edges {
                cursor
                node {
                    id
                    title
                    handle
                    description
                    options(first: 100) {
                        id
                        name
                        values
                    }
                    images(first: 100) {
                        edges {
                            node {
                                id
                                originalSrc
                            }
                        }
                    }
                    variants(first: 100) {
                        edges {
                            node {
                                id
                                sku
                                title
                                quantityAvailable
                                compareAtPriceV2 {
                                    amount
                                }
                                priceV2 {
                                    amount
                                }
                                selectedOptions {
                                    name
                                    value
                                }
                            }
                        }
                    }
                    tags
                    collections(first:100){
                        edges{
                            node{
                                id,
                                handle
                            }
                        }
                    }
                }
            }
        }
        }
    `;
};
const __TURBOPACK__default__export__ = productsQuery;
}),
"[project]/src/graphql/query/collection.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const collectionQuery = (handle, sortKey, reverse, limit = 100)=>{
    const queryArguments = `handle: "${handle}"`;
    let queryProductArguments = `first: ${limit}`;
    if (sortKey) {
        queryProductArguments = `first: ${limit}, sortKey: ${sortKey}, reverse: ${reverse}`;
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
        {
            collectionByHandle(${queryArguments}) {
                id
                title
                handle
                image {
                    originalSrc
                }
                products(${queryProductArguments}) {
                    edges {
                        node {
                            id
                            title
                            handle
                            description
                            options(first: 100) {
                                id
                                name
                                values
                            }
                            images(first: 100) {
                                edges {
                                    node {
                                        id
                                        originalSrc
                                    }
                                }
                            }
                            variants(first: 100) {
                                edges {
                                    node {
                                        id
                                        sku
                                        title
                                        quantityAvailable
                                        compareAtPriceV2 {
                                            amount
                                        }
                                        priceV2 {
                                            amount
                                        }
                                        selectedOptions {
                                            name
                                            value
                                        }
                                    }
                                }
                            }
                            tags
                            collections(first: 100) {
                                edges {
                                    node {
                                        id
                                        handle
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
};
const __TURBOPACK__default__export__ = collectionQuery;
}),
"[project]/src/graphql/query/collections.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const collectionsQuery = (limit = 10)=>{
    const queryArguments = `first: ${limit}`;
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
        {
            collections(${queryArguments}) {
                edges {
                    node {
                        id
                        title
                        handle
                        image {
                            id
                            originalSrc
                        }
                    }
                }
            }
        }
    `;
};
const __TURBOPACK__default__export__ = collectionsQuery;
}),
"[project]/src/graphql/mutation/addressDelete.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const addressDelete = ()=>{
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
    mutation customerAddressDelete($id: ID!, $customerAccessToken: String!) {
      customerAddressDelete(
        id: $id
        customerAccessToken: $customerAccessToken
      ) {
        deletedCustomerAddressId
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;
};
const __TURBOPACK__default__export__ = addressDelete;
}),
"[project]/src/graphql/mutation/addressCreate.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const addressCreate = ()=>{
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
    mutation customerAddressCreate(
      $customerAccessToken: String!
      $address: MailingAddressInput!
    ) {
      customerAddressCreate(
        customerAccessToken: $customerAccessToken
        address: $address
      ) {
        customerAddress {
          id
          name
          address1
          address2
          phone
          city
          company
          country
          zip
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;
};
const __TURBOPACK__default__export__ = addressCreate;
}),
"[project]/src/graphql/mutation/customerCreate.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const customerCreate = ()=>{
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;
};
const __TURBOPACK__default__export__ = customerCreate;
}),
"[project]/src/graphql/mutation/customerUpdate.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const customerUpdate = ()=>{
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
    mutation customerUpdate(
      $customerAccessToken: String!
      $customer: CustomerUpdateInput!
    ) {
      customerUpdate(
        customerAccessToken: $customerAccessToken
        customer: $customer
      ) {
        customer {
          id
          firstName
          lastName
          displayName
          email
          phone
          addresses(first: 10) {
            edges {
              node {
                id
                name
                address1
                address2
                phone
                city
                company
                country
                zip
              }
            }
          }
          orders(first: 100) {
            edges {
              node {
                id
                name
                orderNumber
                processedAt
                cancelReason
                currentSubtotalPrice {
                  amount
                }
                currentTotalPrice {
                  amount
                }
                totalPriceV2 {
                  amount
                }
                totalShippingPriceV2 {
                  amount
                }
                totalTaxV2 {
                  amount
                }
                financialStatus
                fulfillmentStatus
                statusUrl
                shippingAddress {
                  id
                  name
                  address1
                  address2
                  phone
                  city
                  company
                  country
                  zip
                }
                lineItems(first: 100) {
                  edges {
                    node {
                      title
                      quantity
                      originalTotalPrice {
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;
};
const __TURBOPACK__default__export__ = customerUpdate;
}),
"[project]/src/graphql/mutation/checkoutCreate.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const createCheckout = ()=>{
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
          email
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;
};
const __TURBOPACK__default__export__ = createCheckout;
}),
"[project]/src/graphql/mutation/customerAccessTokenCreate.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__ = __turbopack_context__.i("[externals]/graphql-request [external] (graphql-request, cjs, [project]/node_modules/graphql-request)");
;
const customerAccessTokenCreate = ()=>{
    return __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2d$request__$5b$external$5d$__$28$graphql$2d$request$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$graphql$2d$request$29$__["gql"]`
        mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
            customerAccessTokenCreate(input: $input) {
                customerAccessToken {
                    accessToken
                    expiresAt
                }
                customerUserErrors {
                    code
                    field
                    message
                }
            }
        }
    `;
};
const __TURBOPACK__default__export__ = customerAccessTokenCreate;
}),
"[project]/src/graphql/index.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$client$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/client.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$blog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/blog.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$blogs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/blogs.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/product.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$customer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/customer.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$products$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/products.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$collection$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/collection.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$collections$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/collections.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutation$2f$addressDelete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/mutation/addressDelete.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutation$2f$addressCreate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/mutation/addressCreate.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutation$2f$customerCreate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/mutation/customerCreate.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutation$2f$customerUpdate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/mutation/customerUpdate.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutation$2f$checkoutCreate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/mutation/checkoutCreate.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutation$2f$customerAccessTokenCreate$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/mutation/customerAccessTokenCreate.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/src/graphql/client.js [ssr] (ecmascript) <export default as client>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$client$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$client$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/client.js [ssr] (ecmascript)");
}),
"[project]/src/graphql/query/customer.js [ssr] (ecmascript) <export default as customerQuery>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customerQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$customer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$customer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/customer.js [ssr] (ecmascript)");
}),
"[project]/src/hooks/useIsLoggedIn.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$js$2d$cookie$29$__ = __turbopack_context__.i("[externals]/js-cookie [external] (js-cookie, esm_import, [project]/node_modules/js-cookie)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$base64__$5b$external$5d$__$28$js$2d$base64$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$js$2d$base64$29$__ = __turbopack_context__.i("[externals]/js-base64 [external] (js-base64, esm_import, [project]/node_modules/js-base64)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/graphql/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$client$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__client$3e$__ = __turbopack_context__.i("[project]/src/graphql/client.js [ssr] (ecmascript) <export default as client>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$customer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__customerQuery$3e$__ = __turbopack_context__.i("[project]/src/graphql/query/customer.js [ssr] (ecmascript) <export default as customerQuery>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$js$2d$cookie$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$base64__$5b$external$5d$__$28$js$2d$base64$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$js$2d$base64$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$js$2d$cookie$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$base64__$5b$external$5d$__$28$js$2d$base64$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$js$2d$base64$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const useIsLoggedIn = ()=>{
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const encodedToken = __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$cookie__$5b$external$5d$__$28$js$2d$cookie$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$js$2d$cookie$29$__["default"].get("access_token");
        const token = encodedToken && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$js$2d$base64__$5b$external$5d$__$28$js$2d$base64$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$js$2d$base64$29$__["decode"])(encodedToken);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$client$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__client$3e$__["client"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$customer$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__customerQuery$3e$__["customerQuery"])(token)).then((res)=>{
            if (res?.customer) {
                setIsLoggedIn(true);
            }
        });
    }, []);
    return isLoggedIn;
};
const __TURBOPACK__default__export__ = useIsLoggedIn;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/hooks/index.jsx [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProduct.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsLoggedIn.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/hooks/useIsLoggedIn.jsx [ssr] (ecmascript) <export default as useIsLoggedIn>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useIsLoggedIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsLoggedIn.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/layout/header/header-bottom.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useIsLoggedIn$3e$__ = __turbopack_context__.i("[project]/src/hooks/useIsLoggedIn.jsx [ssr] (ecmascript) <export default as useIsLoggedIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/logo/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, cjs, [project]/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/product.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2f$dropdwon$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown/dropdwon.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/header.style.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useIsLoggedIn$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useIsLoggedIn$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const HeaderBottom = ({ onConfigHandler, onMiniCartHandler, onSearchBoxHandler, onMobileNavHandler, children })=>{
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const shoppingCart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.shoppingCart);
    const cartQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartProductsQuantity"])(shoppingCart);
    const isLoggedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsLoggedIn$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useIsLoggedIn$3e$__["useIsLoggedIn"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderBottomWrap"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                className: "align-items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        xs: 3,
                        lg: 2,
                        className: "d-lg-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderActionBtn"], {
                            onClick: ()=>onMobileNavHandler(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["AiOutlineMenu"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        xs: 5,
                        lg: 2,
                        className: "text-center text-lg-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "logo--desktop",
                                src: "/images/logo/logo.png"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                width: 100,
                                height: 30,
                                className: "logo--mobile",
                                src: "/images/logo/logo.png"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        lg: 8,
                        className: "d-none d-lg-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderNavigation"], {
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        lg: 2,
                        className: "d-none d-lg-block text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderAction"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ActionItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderActionBtn"], {
                                        onClick: ()=>onSearchBoxHandler(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoSearchOutline"], {}, void 0, false, {
                                            fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ActionItem"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2f$dropdwon$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownToggleButton"], {
                                            color: "#333",
                                            className: "header-action-btn",
                                            onClick: ()=>setIsDropdownOpen((prevState)=>!prevState),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoPersonOutline"], {}, void 0, false, {
                                                fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2f$dropdwon$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                            align: "right",
                                            className: isDropdownOpen ? "show" : "hide",
                                            children: [
                                                isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/account",
                                                        children: "My Account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                        lineNumber: 86,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/signin",
                                                        children: "Signin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                        lineNumber: 90,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/cart",
                                                        children: "Cart"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/wishlist",
                                                        children: "Wishlist"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/logout",
                                                        children: "Logout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                        lineNumber: 101,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ActionItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderActionBtn"], {
                                        className: "pr-1",
                                        onClick: ()=>onMiniCartHandler(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineShoppingBag"], {}, void 0, false, {
                                                fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CartItemCount"], {
                                                children: cartQuantity
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        xs: 4,
                        className: "d-lg-none text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderAction"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ActionItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderActionBtn"], {
                                    onClick: ()=>onMiniCartHandler(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineShoppingBag"], {}, void 0, false, {
                                            fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CartItemCount"], {
                                            children: cartQuantity
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/header/header-bottom.jsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header/header-bottom.jsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header/header-bottom.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
HeaderBottom.propTypes = {
    onConfigHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired,
    onMiniCartHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired,
    onSearchBoxHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired,
    onMobileNavHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired,
    children: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].node
};
const __TURBOPACK__default__export__ = HeaderBottom;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/layout/header/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2d$top$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/header-top.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/layout/navbar/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$desktop$2d$nav$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DesktopNavbar$3e$__ = __turbopack_context__.i("[project]/src/components/layout/navbar/desktop-nav.jsx [ssr] (ecmascript) <export default as DesktopNavbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/header.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2d$bottom$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/header-bottom.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2d$bottom$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2d$bottom$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const Header = ({ bg, className, onMiniCartHandler, onSearchBoxHandler, onMobileNavHandler, onConfigHandler })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderArea"], {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])('header', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2d$top$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "d-none d-lg-block"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header/index.jsx",
                lineNumber: 11,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2d$bottom$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                onConfigHandler: onConfigHandler,
                onMiniCartHandler: onMiniCartHandler,
                onSearchBoxHandler: onSearchBoxHandler,
                onMobileNavHandler: onMobileNavHandler,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$desktop$2d$nav$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DesktopNavbar$3e$__["DesktopNavbar"], {
                    bg: bg,
                    className: "d-none d-lg-block"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/header/index.jsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header/index.jsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/header/index.jsx",
        lineNumber: 10,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Header.propTypes = {
    bg: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    onMiniCartHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired,
    onSearchBoxHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired,
    onMobileNavHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired,
    onConfigHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired
};
const __TURBOPACK__default__export__ = Header;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/layout/footer/footer.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CopyrightText",
    ()=>CopyrightText,
    "FooterBottomWrapper",
    ()=>FooterBottomWrapper,
    "FooterWrap",
    ()=>FooterWrap,
    "SocialIcons",
    ()=>SocialIcons,
    "WidgetWrapper",
    ()=>WidgetWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const CopyrightText = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].p`
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  font-size: 13px;
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.heading')};
  line-height: 26px;
  
  .company-name {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
      font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.heading')};
      
      &:hover {
          color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
      }
  }
  
  svg{
      margin: 0 1px;
      vertical-align: middle;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.danger')};
      font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
  }
`;
const FooterBottomWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["color"]}
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
`;
const WidgetWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]};
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["color"]};
`;
const FooterWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].footer`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]};
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["color"]};
`;
const SocialIcons = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ul`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]};

  li {
    a {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.offWhite')};
      line-height: 38px;
      width: 32px;
      height: 32px;
      text-align: center;
      background-color: transparent;
      display: block;
      border-radius: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('radii.circle')};

      &:hover {
        background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
      }
    }
  }
`;
}),
"[project]/src/components/ui/widget/widget.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WidgetBody",
    ()=>WidgetBody,
    "WidgetItem",
    ()=>WidgetItem,
    "WidgetTitle",
    ()=>WidgetTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const WidgetBody = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
  .about-text {
    font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
    max-width: 290px;
    line-height: 24px;

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
      max-width: 454px;
    }
  }

  p {
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  }

  .widget-list {
    margin-bottom: 0;
    
    li {
      &:not(:last-child) {
        margin-bottom: 8px;
      }

      a {
        font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
        line-height: 24px;
        padding: 0;
        color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
        transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};

        &:hover {
          padding-left: 6px;
          color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
        }
      }
    }
  }
`;
const WidgetTitle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h4`
  font-size: 15px;
  font-weight: 500;
  position: relative;
  margin-bottom: 15px;
  letter-spacing: 1.2px;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
`;
const WidgetItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
    ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
`;
}),
"[project]/src/components/ui/widget/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$html$2d$parser__$5b$external$5d$__$28$react$2d$html$2d$parser$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$html$2d$parser$29$__ = __turbopack_context__.i("[externals]/react-html-parser [external] (react-html-parser, cjs, [project]/node_modules/react-html-parser)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widget$2f$widget$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/widget/widget.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
const Widget = ({ title, children, className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widget$2f$widget$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["WidgetItem"], {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
        ...props,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widget$2f$widget$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["WidgetTitle"], {
                children: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$html$2d$parser__$5b$external$5d$__$28$react$2d$html$2d$parser$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$html$2d$parser$29$__["default"])(title)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/widget/index.jsx",
                lineNumber: 9,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widget$2f$widget$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["WidgetBody"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/widget/index.jsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/widget/index.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Widget.propTypes = {
    title: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = Widget;
}),
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
"[project]/src/components/newsletter/newsletter.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormNewsletter",
    ()=>FormNewsletter,
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].input`
  display: inline-block;
  vertical-align: top;
  line-height: 50px;
  height: 50px;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
  width: 100%;
  text-transform: capitalize;
  border: none;
  background: transparent;
  border: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.borderDark')};
  border-radius: 0;
  text-align: left;
  box-shadow: none;
  padding-left: 20px;
  padding-right: 10px;
  transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};
  
  &::placeholder {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  }
  &:focus {
    border-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
  }
`;
const FormNewsletter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: relative;
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]};
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
  
  button {
    font-size: 13px;
    font-weight: 600;
    border: 0;
    margin-top: 20px;
    margin-left: auto;
    display: flex;
    svg {
      font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.body')};
      margin-right: 3px;
      vertical-align: text-top;
    }
  }
`;
}),
"[project]/src/components/newsletter/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$newsletter$2f$newsletter$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/newsletter/newsletter.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
const NewsletterForm = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$newsletter$2f$newsletter$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["FormNewsletter"], {
        mt: 20,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Form"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["FormGroup"], {
                className: "mb-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                        className: "sr-only",
                        htmlFor: "newsletterInput",
                        children: "Newsletter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/newsletter/index.jsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$newsletter$2f$newsletter$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        type: "email",
                        id: "newsletterInput",
                        placeholder: "Enter E-mail Adheres"
                    }, void 0, false, {
                        fileName: "[project]/src/components/newsletter/index.jsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        tag: "button",
                        color: "white",
                        bg: "primary",
                        hvrBg: "heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosSend"], {}, void 0, false, {
                                fileName: "[project]/src/components/newsletter/index.jsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Subscribe"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/newsletter/index.jsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/newsletter/index.jsx",
                lineNumber: 10,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/newsletter/index.jsx",
            lineNumber: 9,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/newsletter/index.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NewsletterForm;
}),
"[project]/src/components/layout/footer/footer-widget.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widget$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/widget/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$newsletter$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/newsletter/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/footer/footer.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.esm.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
const FooterWidget = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["WidgetWrapper"], {
        ...props,
        py: [
            60,
            60,
            100
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        md: 6,
                        lg: 4,
                        className: "mb-4 mb-lg-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widget$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            title: "ABOUT US",
                            mb: [
                                30,
                                null,
                                null,
                                0
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "about-text",
                                    children: "Premium Kitchens & Bedrooms designed for your lifestyle."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                    lineNumber: 22,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SocialIcons"], {
                                    mt: 15,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Li"], {
                                            inline: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "https://facebook.com",
                                                target: "_blank",
                                                rel: "noopener",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["SiFacebook"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                                    lineNumber: 28,
                                                    columnNumber: 99
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                                lineNumber: 28,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                            lineNumber: 27,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Li"], {
                                            inline: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "https://twitter.com",
                                                target: "_blank",
                                                rel: "noopener",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["SiTwitter"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                                    lineNumber: 31,
                                                    columnNumber: 98
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                                lineNumber: 31,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                            lineNumber: 30,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Li"], {
                                            inline: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "https://linkedin.com",
                                                target: "_blank",
                                                rel: "noopener",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["SiLinkedin"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                                    lineNumber: 34,
                                                    columnNumber: 99
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                                lineNumber: 34,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                            lineNumber: 33,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Li"], {
                                            inline: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "https://youtube.com",
                                                target: "_blank",
                                                rel: "noopener",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["SiYoutube"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 98
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                                lineNumber: 37,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                            lineNumber: 36,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Li"], {
                                            inline: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "https://pinterest.com",
                                                target: "_blank",
                                                rel: "noopener",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["SiPinterest"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                                    lineNumber: 40,
                                                    columnNumber: 100
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                                lineNumber: 40,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                            lineNumber: 39,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                            lineNumber: 18,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        sm: 6,
                        lg: 4,
                        className: "mb-4 mb-lg-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widget$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            title: "INFORMATION",
                            mb: [
                                30,
                                null,
                                null,
                                0
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Ul"], {
                                className: "widget-list",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Li"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: "About Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                            lineNumber: 52,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                        lineNumber: 52,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Li"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                            lineNumber: 53,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                        lineNumber: 53,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Li"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/cart",
                                            children: "My Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                            lineNumber: 54,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                        lineNumber: 54,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                lineNumber: 51,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                            lineNumber: 47,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                        lineNumber: 46,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        sm: 6,
                        lg: 4,
                        className: "text-center text-lg-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$widget$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            title: "NEWSLETTER",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$newsletter$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                                lineNumber: 63,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                            lineNumber: 60,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                        lineNumber: 59,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
                lineNumber: 16,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
            lineNumber: 15,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/footer/footer-widget.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FooterWidget;
}),
"[project]/src/components/layout/footer/footer-bottom.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/footer/footer.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
const FooterBottom = ({ bg })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["FooterBottomWrapper"], {
        bg: bg,
        pt: [
            15,
            null,
            null,
            25
        ],
        pb: [
            10,
            null,
            null,
            20
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                className: "flex-sm-row-reverse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        md: 6,
                        className: "text-center text-md-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "payment-link",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/icons/payment.png",
                                alt: "Payment Method",
                                width: 243,
                                height: 21
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/footer/footer-bottom.jsx",
                                lineNumber: 17,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/footer/footer-bottom.jsx",
                            lineNumber: 16,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/footer/footer-bottom.jsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        md: 6,
                        className: "text-center text-md-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CopyrightText"], {
                            children: [
                                "© 2021, Furns. Made With ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosHeart"], {}, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer/footer-bottom.jsx",
                                    lineNumber: 28,
                                    columnNumber: 54
                                }, ("TURBOPACK compile-time value", void 0)),
                                " by ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    className: "company-name",
                                    href: "https://hasthemes.com/",
                                    children: " HasThemes."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer/footer-bottom.jsx",
                                    lineNumber: 28,
                                    columnNumber: 71
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer/footer-bottom.jsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/footer/footer-bottom.jsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/footer/footer-bottom.jsx",
                lineNumber: 14,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/footer/footer-bottom.jsx",
            lineNumber: 13,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/footer/footer-bottom.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FooterBottom;
}),
"[project]/src/components/layout/footer/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/footer/footer.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2d$widget$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/footer/footer-widget.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2d$bottom$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/footer/footer-bottom.jsx [ssr] (ecmascript)");
;
;
;
;
const Footer = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["FooterWrap"], {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2d$widget$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                bg: "secondary",
                color: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/footer/index.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$footer$2d$bottom$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                bg: "heading"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/footer/index.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/footer/index.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/components/ui/search/style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBox",
    ()=>SearchBox,
    "SearchBoxWrap",
    ()=>SearchBoxWrap,
    "SearchButton",
    ()=>SearchButton,
    "hiddenElem",
    ()=>hiddenElem,
    "visibleElem",
    ()=>visibleElem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/offCanvas/style.jsx [ssr] (ecmascript)");
;
;
const hiddenElem = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
`;
const visibleElem = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
  visibility: visible;
  pointer-events: visible;
  opacity: 1;
`;
const SearchButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].button`
  top: 0;
  right: 0;
  left: auto;
  width: 60px;
  height: 100%;
  display: flex;
  font-size: 20px;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 0 5px 5px 0;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  background: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
`;
const SearchBox = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  padding: 30px 25px 25px;
  transform: translateY(-100%);
  transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};

  .form-wrap {
    width: 50%;
    margin: auto;
    text-align: center;

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasCloseBtn"]} {
      margin-top: 20px;
    }

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
      width: 95%;
    }

    form {
      position: relative;

      input {
        background-color: transparent;

        &:focus {
          border-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.primary")};
        }
      }
    }
  }
`;
const SearchBoxWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].aside`
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  height: 100vh;
  position: fixed;
  transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};

  ${hiddenElem}
  .popular-searches {
    display: flex;
    margin-top: 15px;
    justify-content: center;
    font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};

    h4 {
      margin-right: 10px;
      font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
      font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
    }

    ul {
      display: flex;
      align-items: center;

      li {
        a {
          text-decoration: underline;
          color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.dark')};
          transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};
          font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
          font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};

          &:hover {
            color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
          }
        }

        &:not(:last-child) {
          margin-right: 8px;
        }
      }
    }
  }

  .overlay {
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    height: 100%;
    cursor: pointer;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);

    ${hiddenElem}
  }

  ${({ show })=>show && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    ${visibleElem}
    ${SearchBox} {
      transform: none;
    }

    .overlay {
      ${visibleElem}
    }
  `}
`;
}),
"[project]/src/components/ui/search/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$search$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/search/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/offCanvas/style.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const SearchForm = ({ isShow, onHandler })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchParam, setSearchParam] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const onSearchFormHandler = (event)=>{
        event.preventDefault();
        onHandler();
        router.push(`/search/${searchParam}`);
    };
    const onChangeHandler = (event)=>{
        setSearchParam(event.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$search$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SearchBoxWrap"], {
        show: isShow,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$search$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SearchBox"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "form-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Form"], {
                            onSubmit: onSearchFormHandler,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Input"], {
                                    type: "search",
                                    name: "search",
                                    className: "furns-form-control",
                                    placeholder: "Enter your search keyword...",
                                    onChange: onChangeHandler
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/search/index.jsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$search$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SearchButton"], {
                                    type: "submit",
                                    onClick: onSearchFormHandler,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoSearchOutline"], {}, void 0, false, {
                                        fileName: "[project]/src/components/ui/search/index.jsx",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/search/index.jsx",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/search/index.jsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "popular-searches",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    children: "Popular Searches:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/search/index.jsx",
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/search/bed",
                                                children: "bed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/search/index.jsx",
                                                lineNumber: 44,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/search/index.jsx",
                                            lineNumber: 44,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/search/chair",
                                                children: "chair"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/search/index.jsx",
                                                lineNumber: 45,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/search/index.jsx",
                                            lineNumber: 45,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/search/index.jsx",
                                    lineNumber: 43,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/search/index.jsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasCloseBtn"], {
                            onClick: ()=>onHandler()
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/search/index.jsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/search/index.jsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/search/index.jsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "overlay",
                onClick: ()=>onHandler()
            }, void 0, false, {
                fileName: "[project]/src/components/ui/search/index.jsx",
                lineNumber: 52,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/search/index.jsx",
        lineNumber: 25,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
SearchForm.propTypes = {
    isShow: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool.isRequired,
    onHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired
};
const __TURBOPACK__default__export__ = SearchForm;
}),
"[project]/src/components/cart/button/style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartButtonWrap",
    ()=>CartButtonWrap,
    "Price",
    ()=>Price
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/css/keyframes.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
;
const Price = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].span`
  width: 65px;
  height: 25px;
  padding: 0 5px;
  margin-top: 5px;
  line-height: 25px;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
  border-radius: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('radii.sm')};
  font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.heading')};
`;
const CartButtonWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].button`
  right: 0;
  margin: 0;
  padding: 15px;
  display: flex;
  z-index: 999;
  position: fixed;
  align-items: center;
  top: calc(110px + 30%);
  flex-direction: column;
  border-radius: 3px 0 0 3px;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  box-shadow: 0 0 16px -1px rgb(0 0 0 / 75%);
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.secondary')};
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};

  &.animated {
    animation-duration: 1s;
    animation-name: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["bounce"]};
    animation-fill-mode: both;
    transform-origin: center bottom;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    display: none;
  }

  svg {
    font-size: 20px;
    margin-bottom: 3px;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  }
`;
}),
"[project]/src/components/cart/button/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, cjs, [project]/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/constant.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$button$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/button/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/product.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const CartButton = ({ onHandler })=>{
    const cart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.shoppingCart);
    const cartTotalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartTotalPrice"])(cart);
    const firstUpdate = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(true);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        buttonRef.current.classList.add('animated');
        setTimeout(()=>{
            buttonRef.current.classList.remove('animated');
        }, 1000);
    }, [
        cart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$button$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CartButtonWrap"], {
        ref: buttonRef,
        onClick: ()=>onHandler(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FiShoppingBag"], {}, void 0, false, {
                fileName: "[project]/src/components/cart/button/index.jsx",
                lineNumber: 31,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "counter",
                children: [
                    cart.length,
                    " Items"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/button/index.jsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$button$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Price"], {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CURRENCY"] + Math.ceil(cartTotalPrice)
            }, void 0, false, {
                fileName: "[project]/src/components/cart/button/index.jsx",
                lineNumber: 33,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/button/index.jsx",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
CartButton.propTypes = {
    onHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired
};
const __TURBOPACK__default__export__ = CartButton;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/layout/header/style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Main",
    ()=>Main
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
;
const Main = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].main`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    margin: 62px 0 50px 0;
  }
`;
}),
"[project]/src/components/ui/empty/style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyContent",
    ()=>EmptyContent,
    "EmptyHeading",
    ()=>EmptyHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const EmptyContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  text-align: center;
  margin-top: 100px;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    margin-top: 20px;
  }

  svg {
    font-size: 100px;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
  }

  h2 {
    font-size: 20px;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
    margin-top: 15px;
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
      font-size: 18px;
    }
  }
`;
const EmptyHeading = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h2`
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
  text-align: left;
  font-size: 24px;
  line-height: 16px;
  font-style: normal;
  text-transform: none;
  margin: 0 0 30px;
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
`;
}),
"[project]/src/components/ui/empty/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.esm.js [ssr] (ecmascript)");
;
;
;
;
;
const EmptyProduct = ({ message, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["EmptyContent"], {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoBagHandleOutline"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/empty/index.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/ui/empty/index.jsx",
                lineNumber: 10,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/empty/index.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
EmptyProduct.defaultProps = {
    message: "There are no products!"
};
EmptyProduct.propTypes = {
    message: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = EmptyProduct;
}),
"[project]/src/components/cart/cart.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartUpdateAction",
    ()=>CartUpdateAction,
    "CouponForm",
    ()=>CouponForm,
    "EstimateCartItem",
    ()=>EstimateCartItem,
    "Quantity",
    ()=>Quantity,
    "Title",
    ()=>Title
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.heading')};
`;
const CouponForm = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  justify-content: space-between;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
    display: block;
  }

  div {
    input {
      border-radius: 3px 0 0 3px;
      border-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};

      @media screen and (min-width: 576px) {
        border-right: 0;
      }
    }

    button {
      ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
        width: 100%;
        margin-top: 10px;
      }
    }

    input, button {
      height: 48px;
    }

    &:first-child {
      flex-grow: 1;
    }
  }
`;
const EstimateCartItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]};

  form {
    font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};

    label {
      font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
    }
  }
`;
const CartUpdateAction = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]};
  text-align: right;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    text-align: center;
  }

  .btn-checkout {
    margin-left: 30px;

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
      margin-left: 15px;
    }
  }

  button, a {
    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
      padding: 15px 10px;
    }
  }
`;
const Quantity = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  width: 90px;
  height: 35px;
  display: flex;
  padding: 0 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  border-radius: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('radii.rounded')};
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.gray150')};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    height: 30px;
  }

  input {
    background-color: transparent;
    width: 100%;
    border: none;
    display: block;
    text-align: center;
    font-size: 14px;
  }

  button {
    font-size: 14px;
    margin: 5px 0 0;
    padding: 0;
    border: none;
  }
`;
}),
"[project]/src/components/cart/minicart-sidebar/style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BtnCheckout",
    ()=>BtnCheckout,
    "MiniCartFooter",
    ()=>MiniCartFooter,
    "MiniCartList",
    ()=>MiniCartList,
    "MiniCartProContent",
    ()=>MiniCartProContent,
    "MiniCartProMeta",
    ()=>MiniCartProMeta,
    "MiniCartProName",
    ()=>MiniCartProName,
    "MiniCartProPrice",
    ()=>MiniCartProPrice,
    "MiniCartProThumb",
    ()=>MiniCartProThumb,
    "MiniCartProductItem",
    ()=>MiniCartProductItem,
    "PriceAmount",
    ()=>PriceAmount,
    "RemoveButton",
    ()=>RemoveButton,
    "TotalPrice",
    ()=>TotalPrice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
;
const RemoveButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].button`
  width: 25px;
  height: 25px;
  line-height: 1;
  font-size: 17px;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.heading')};
  border-radius: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('radii.circle')};

  &:hover {
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
    background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.danger')};
  }
`;
const PriceAmount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].span`
  font-size: 16px;
  font-weight: 500;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
`;
const MiniCartProPrice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  font-size: 14px;
  display: block;
  margin-top: 3px;
`;
const MiniCartProMeta = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  font-size: 13px;
  margin-top: 5px;
  text-transform: capitalize;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.darkgray')};
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
`;
const MiniCartProName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].a`
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};
  font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.body')};
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.body')};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
  }

  &:hover {
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
  }
`;
const MiniCartProContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  margin-top: -4px;
  position: relative;
  padding-left: 12px;
  align-items: flex-start;
  flex: 1 0 calc(100% - 150px);
  justify-content: space-between;
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
    flex: 1 0 calc(100% - 100px);
  }
`;
const MiniCartProThumb = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].a`
  flex: 1 0 75px;

  img {
    border: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.borderLight")} !important;
  }
`;
const MiniCartProductItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px 20px 20px;
  border-bottom: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.borderLight")};

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }
`;
const TotalPrice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].span`
  top: 50%;
  right: 10px;
  height: 37px;
  display: flex;
  padding: 10px;
  position: absolute;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
  border-radius: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('radii.sm')};
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
`;
const BtnCheckout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  width: 100%;
  text-align: left;
  position: relative;
  padding-left: 10px;
  border-radius: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('radii.sm')};
`;
const MiniCartFooter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  padding: 20px;
`;
const MiniCartList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: relative;
  height: calc(100% - 160px);
`;
}),
"[project]/src/global/actions/cartAction.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "addToCartAction",
    ()=>addToCartAction,
    "clearCartAction",
    ()=>clearCartAction,
    "decrementCartQuantityAction",
    ()=>decrementCartQuantityAction,
    "incrementCartQuantityAction",
    ()=>incrementCartQuantityAction,
    "removeCartAction",
    ()=>removeCartAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/slices/cartSlice.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const addToCartAction = (payload)=>(dispatch)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addToCart"])(payload));
    };
const removeCartAction = (payload)=>(dispatch)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeCart"])(payload));
    };
const incrementCartQuantityAction = (payload)=>(dispatch)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["increment"])(payload));
    };
const decrementCartQuantityAction = (payload)=>(dispatch)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["decrement"])(payload));
    };
const clearCartAction = ()=>(dispatch)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$cartSlice$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["clear"])());
    };
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/cart/minicart-sidebar/single-item.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, cjs, [project]/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/constant.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/product.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$cart$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/cart.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/cg/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/minicart-sidebar/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/actions/cartAction.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
const MiniCartProduct = ({ product })=>{
    const { title, handle, images, quantity, price, variations, variants } = product;
    const stock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getProductStock"])(product, variations);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useDispatch"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MiniCartProductItem"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/product/${handle}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MiniCartProThumb"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        alt: title,
                        width: 110,
                        height: 120,
                        src: images?.edges[0]?.node?.originalSrc
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                        lineNumber: 34,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MiniCartProContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/product/${handle}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MiniCartProName"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            variants?.edges?.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MiniCartProMeta"], {
                                children: variations?.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MiniCartProPrice"], {
                                children: [
                                    quantity,
                                    " x ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PriceAmount"], {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CURRENCY"] + price
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                        lineNumber: 56,
                                        columnNumber: 38
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$cart$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Quantity"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        style: {
                                            pointerEvents: quantity === 1 ? "none" : "visible"
                                        },
                                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["decrementCartQuantityAction"])(product)),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CgMathMinus"], {}, void 0, false, {
                                            fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                            lineNumber: 64,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: quantity,
                                        size: stock,
                                        readOnly: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        style: {
                                            pointerEvents: quantity === stock ? "none" : "visible"
                                        },
                                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["incrementCartQuantityAction"])(product)),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CgMathPlus"], {}, void 0, false, {
                                            fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["RemoveButton"], {
                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeCartAction"])(product)),
                        children: "x"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
                lineNumber: 43,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/minicart-sidebar/single-item.jsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
MiniCartProduct.propTypes = {
    product: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].object.isRequired
};
const __TURBOPACK__default__export__ = MiniCartProduct;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/cart/minicart-sidebar/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, cjs, [project]/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/constant.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/offCanvas/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/product.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$perfect$2d$scrollbar__$5b$external$5d$__$28$react$2d$perfect$2d$scrollbar$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$perfect$2d$scrollbar$29$__ = __turbopack_context__.i("[externals]/react-perfect-scrollbar [external] (react-perfect-scrollbar, cjs, [project]/node_modules/react-perfect-scrollbar)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$single$2d$item$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/minicart-sidebar/single-item.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/offCanvas/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/minicart-sidebar/style.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$single$2d$item$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$single$2d$item$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
const MiniCartSidebar = ({ isOpen, onHandler })=>{
    const shoppingCart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.shoppingCart);
    const cartTotalPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartTotalPrice"])(shoppingCart);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: isOpen,
        onHandler: onHandler,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasHead"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasTitle"], {
                        children: "Cart"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasCloseBtn"], {
                        onClick: ()=>onHandler(),
                        children: "x"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
                lineNumber: 18,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MiniCartList"], {
                children: shoppingCart.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$perfect$2d$scrollbar__$5b$external$5d$__$28$react$2d$perfect$2d$scrollbar$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$perfect$2d$scrollbar$29$__["default"], {
                    children: shoppingCart?.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$single$2d$item$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            product: product
                        }, product?.cartId, false, {
                            fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
                            lineNumber: 27,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
                    lineNumber: 25,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
                    lineNumber: 31,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MiniCartFooter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BtnCheckout"], {
                    tag: "a",
                    bg: "primary",
                    color: "white",
                    hvrColor: "white",
                    href: "/cart",
                    hvrBg: "secondary",
                    fontWeight: "subHeading",
                    children: [
                        "View Cart",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["TotalPrice"], {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CURRENCY"] + cartTotalPrice.toFixed(2)
                        }, void 0, false, {
                            fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cart/minicart-sidebar/index.jsx",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
MiniCartSidebar.propTypes = {
    isOpen: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool.isRequired,
    onHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired
};
const __TURBOPACK__default__export__ = MiniCartSidebar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ui/select/style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customStyles",
    ()=>customStyles
]);
const customStyles = {
    option: (provided, state)=>({
            ...provided,
            fontSize: 14,
            color: state.isSelected ? "#fff" : "#474747",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
            paddingBottom: 10,
            cursor: "pointer",
            borderBottom: "1px solid #ebebeb",
            backgroundColor: state.isSelected ? "#ff7004" : state.isFocused ? "#F9FAFB" : "#ffffff"
        }),
    control: (provided, state)=>({
            display: "flex",
            alignItems: "center",
            minHeight: 45,
            backgroundColor: "#ffffff",
            borderRadius: 3,
            border: "1px solid #D1D5DB",
            borderColor: state.isFocused ? "#ff7004" : "#ebebeb"
        }),
    indicatorSeparator: ()=>({
            display: "none"
        }),
    menu: (provided, _)=>({
            ...provided,
            borderRadius: 3,
            border: "none",
            marginTop: 5,
            fontSize: 13,
            paddingBottom: 0,
            zIndex: 99
        }),
    menuList: (provided, _)=>({
            ...provided,
            paddingTop: 0,
            paddingBottom: 0
        }),
    valueContainer: (provided, _)=>({
            ...provided,
            paddingLeft: 16
        }),
    singleValue: (provided, _)=>({
            ...provided,
            fontSize: 14,
            color: "#191919"
        })
};
}),
"[project]/src/components/ui/select/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$select__$5b$external$5d$__$28$react$2d$select$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$select$29$__ = __turbopack_context__.i("[externals]/react-select [external] (react-select, cjs, [project]/node_modules/react-select)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
;
;
;
const LabelStyle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].label`
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
`;
const Select = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            props.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LabelStyle, {
                children: props.label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select/index.jsx",
                lineNumber: 12,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$select__$5b$external$5d$__$28$react$2d$select$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$select$29$__["default"], {
                styles: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["customStyles"]
                },
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select/index.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Select;
}),
"[project]/src/components/layout/settings/settings.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsFooter",
    ()=>SettingsFooter,
    "SettingsItem",
    ()=>SettingsItem,
    "SettingsWrap",
    ()=>SettingsWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const SettingsFooter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  margin-top: auto;
  text-align: center;
  padding: 20px 20px 30px;
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};

  .support {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    svg {
      margin-right: 5px;
      font-size: 30px;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.dark2')};
    }

    a {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.text')};
    }
  }

  p {
    a {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }

    svg {
      vertical-align: middle;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.danger')};
    }
  }
`;
const SettingsItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.heading')};

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  label {
    font-size: 15px;
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
  }
`;
const SettingsWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  padding: 20px;
`;
}),
"[project]/src/components/layout/settings/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/logo/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$settings$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/settings.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/offCanvas/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/offCanvas/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$settings$2f$settings$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/settings/settings.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.esm.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const SettingsSidebar = ({ isOpen, onHandler })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        onHandler: onHandler,
        open: isOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasHead"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$logo$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        width: 100,
                        src: "/images/logo/logo.png"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/settings/index.jsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasCloseBtn"], {
                        onClick: ()=>onHandler(),
                        children: "x"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/settings/index.jsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/settings/index.jsx",
                lineNumber: 13,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$settings$2f$settings$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SettingsWrap"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$settings$2f$settings$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SettingsItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Language",
                            options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$settings$2e$json__$28$json$29$__["default"].languages
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/settings/index.jsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/settings/index.jsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$settings$2f$settings$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SettingsItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            label: "Currency",
                            options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$settings$2e$json__$28$json$29$__["default"].currencies
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/settings/index.jsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/settings/index.jsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/settings/index.jsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$settings$2f$settings$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SettingsFooter"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "support",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BiSupport"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/settings/index.jsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "tel:+882836272324",
                                children: "+882836272324"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/settings/index.jsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/settings/index.jsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "© 2021, Furns. Made With ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosHeart"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/settings/index.jsx",
                                lineNumber: 43,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0)),
                            " by ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://hasthemes.com/",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                children: " HasThemes."
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/settings/index.jsx",
                                lineNumber: 43,
                                columnNumber: 63
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/settings/index.jsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/settings/index.jsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/settings/index.jsx",
        lineNumber: 12,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SettingsSidebar;
}),
"[project]/src/components/layout/mobile-footer/style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterButtons",
    ()=>FooterButtons,
    "MobileFooterWrap",
    ()=>MobileFooterWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const FooterButtons = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin: 0;
    padding: 0;
    color: white;
    line-height: 1;
    font-size: 20px;
    text-align: center;
    transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};
    font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};

    span {
      display: block;
      font-size: 10px;
      margin-top: -2px;
    }

    &:hover {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};;
    }
  }
`;
const MobileFooterWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  display: none;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px 0;
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.secondary')};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    display: block;
  }
`;
}),
"[project]/src/components/layout/mobile-footer/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, cjs, [project]/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/product.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$mobile$2d$footer$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/mobile-footer/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/header.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const MobileFooter = ({ onMiniCartHandler })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const shoppingCart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.shoppingCart);
    const cartQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCartProductsQuantity"])(shoppingCart);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$mobile$2d$footer$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MobileFooterWrap"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$mobile$2d$footer$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["FooterButtons"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/wishlist'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BiHeart"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Wishlist"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/compare'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosGitCompare"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 26,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Compare"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["AiOutlineHome"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 30,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["HeaderActionBtn"], {
                        onClick: ()=>onMiniCartHandler(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineShoppingBag"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Cart"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 37,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$header$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CartItemCount"], {
                                children: cartQuantity
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 38,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/account'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["BiUser"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
                lineNumber: 20,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
            lineNumber: 19,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/layout/mobile-footer/index.jsx",
        lineNumber: 18,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MobileFooter;
}),
"[project]/src/components/layout/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/footer/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$search$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/search/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/button/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart/minicart-sidebar/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$settings$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/settings/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$mobile$2d$footer$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/mobile-footer/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$mobile$2d$nav$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/navbar/mobile-nav.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
const Layout = ({ children, bg, ...props })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isShowConfig, setIsShowConfig] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isShowMiniCart, setShowMiniCart] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isShowSearchBox, setIsShowSearchBox] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isShowMobileNav, setIsShowMobileNav] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const onMiniCartHandler = ()=>{
        document.querySelector('body').classList.toggle('overflow');
        setShowMiniCart((prevState)=>!prevState);
    };
    const onSearchBoxHandler = ()=>{
        document.querySelector('body').classList.toggle('overflow');
        setIsShowSearchBox((prevState)=>!prevState);
    };
    const onMobileNavHandler = ()=>{
        document.querySelector('body').classList.toggle('overflow');
        setIsShowMobileNav((prevState)=>!prevState);
    };
    const onConfigHandler = ()=>{
        document.querySelector('body').classList.toggle('overflow');
        setIsShowConfig((prevState)=>!prevState);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        router.events.on('routeChangeStart', ()=>{
            document.querySelector('body').classList.remove('overflow');
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                bg: bg,
                onConfigHandler: onConfigHandler,
                onMiniCartHandler: onMiniCartHandler,
                onSearchBoxHandler: onSearchBoxHandler,
                onMobileNavHandler: onMobileNavHandler
            }, void 0, false, {
                fileName: "[project]/src/components/layout/index.jsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                onHandler: onMiniCartHandler
            }, void 0, false, {
                fileName: "[project]/src/components/layout/index.jsx",
                lineNumber: 56,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$navbar$2f$mobile$2d$nav$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isShowMobileNav,
                onHandler: onMobileNavHandler
            }, void 0, false, {
                fileName: "[project]/src/components/layout/index.jsx",
                lineNumber: 60,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2f$minicart$2d$sidebar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isShowMiniCart,
                onHandler: onMiniCartHandler
            }, void 0, false, {
                fileName: "[project]/src/components/layout/index.jsx",
                lineNumber: 65,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$search$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                isShow: isShowSearchBox,
                onHandler: onSearchBoxHandler
            }, void 0, false, {
                fileName: "[project]/src/components/layout/index.jsx",
                lineNumber: 70,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$settings$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isShowConfig,
                onHandler: onConfigHandler
            }, void 0, false, {
                fileName: "[project]/src/components/layout/index.jsx",
                lineNumber: 75,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Main"], {
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        mt: [
                            60,
                            null,
                            100
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/index.jsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/index.jsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$mobile$2d$footer$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                onMiniCartHandler: onMiniCartHandler
            }, void 0, false, {
                fileName: "[project]/src/components/layout/index.jsx",
                lineNumber: 85,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/index.jsx",
        lineNumber: 47,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Layout.defaultProps = {
    bg: "secondary"
};
const __TURBOPACK__default__export__ = Layout;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/blog/posts/blog.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogWrap",
    ()=>BlogWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
;
const BlogWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].section`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
`;
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
"[project]/src/components/blog/post/post.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostContent",
    ()=>PostContent,
    "PostItem",
    ()=>PostItem,
    "PostMeta",
    ()=>PostMeta,
    "PostTitle",
    ()=>PostTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const PostTitle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h2`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};

  a {
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
const PostMeta = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  margin-bottom: 15px;
  font-size: 13px;
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};

  a, span {
    text-decoration: none;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.text')};

    &:hover {
      cursor: pointer;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }

    &:first-child {
      margin-left: 5px;
    }

    &:last-child {
      margin-left: 20px;
    }
  }
`;
const PostContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  padding: 22px 20px 32px;


  .btn-read {
    margin-top: 20px;
    font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
  }
`;
const PostItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].article`
  position: relative;
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.gray100')};
`;
}),
"[project]/src/components/blog/post/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/method.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/image/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$post$2f$post$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blog/post/post.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const Post = ({ post, className, ...props })=>{
    const { title, handle, excerpt, image, publishedAt, authorV2 } = post;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$post$2f$post$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PostItem"], {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/blog/${handle}`,
                passHref: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    alt: title,
                    width: 400,
                    height: 250,
                    layout: "responsive",
                    src: image?.originalSrc
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/post/index.jsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/blog/post/index.jsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$post$2f$post$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PostContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$post$2f$post$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PostTitle"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/blog/${handle}`,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/post/index.jsx",
                            lineNumber: 25,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/post/index.jsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$post$2f$post$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PostMeta"], {
                        children: [
                            "By ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${handle}`,
                                children: [
                                    authorV2?.name,
                                    ","
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blog/post/index.jsx",
                                lineNumber: 28,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${handle}`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["formatDate"])(publishedAt)
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/post/index.jsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blog/post/index.jsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: excerpt
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/post/index.jsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        tag: "a",
                        href: `/blog/${handle}`,
                        bg: "text",
                        color: "white",
                        hvrBg: "primary",
                        hvrColor: "white",
                        className: "btn-read",
                        p: [
                            null,
                            null,
                            "15px 25px"
                        ],
                        children: "Read More"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/post/index.jsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blog/post/index.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blog/post/index.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Post.propTypes = {
    post: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].object.isRequired,
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = Post;
}),
"[project]/src/components/slider/slider.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollIndicator",
    ()=>ScrollIndicator,
    "SlideContent",
    ()=>SlideContent,
    "SlideItem",
    ()=>SlideItem,
    "SlideSubTitle",
    ()=>SlideSubTitle,
    "SlideTitle",
    ()=>SlideTitle,
    "SliderThumb",
    ()=>SliderThumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
;
const fadeInUp = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const pulse = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["keyframes"]`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;
const SliderThumb = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  &:not(.style-2) {
    img {
      ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
        height: 250px;
      }
      ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
        width: 300px;
        height: 250px;
        margin-bottom: 10px;
      }
    }
  }

  &.style-2 {
    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      object-position: center;
      animation: none !important;
      transition: transform 8s ease;
    }
  }
`;
const SlideSubTitle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h4`
  font-size: 14px;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  margin-bottom: 20px;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    font-size: 12px;
    letter-spacing: 3px;
  }
`;
const SlideTitle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h2`
  font-size: 62px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -1px;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    font-size: 46px;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    font-size: 34px;
    letter-spacing: 0;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
    font-size: 28px;
  }
`;
const SlideContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  z-index: 1;
  position: relative;
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["typography"]};

  & > p {
    max-width: 520px;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    animation: ${fadeInUp} 0.8s ease forwards;
    animation-delay: 0.6s;
    opacity: 0;

    ${(props)=>props.textAlign === "center" && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      margin: auto;
    `}

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
      font-size: 15px;
    }
  }

  ${(props)=>props.mode === "light" && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    & > * {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.white")};
    }
  `}
`;
const ScrollIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${pulse} 2s ease infinite;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    display: none;
  }

  &::after {
    content: '';
    width: 1px;
    height: 40px;
    background: rgba(255, 255, 255, 0.5);
    margin-top: 8px;
  }

  span {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
  }
`;
const SlideItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  height: 85vh;
  min-height: 550px;
  max-height: 900px;
  display: flex;
  background-color: #111;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.15) 40%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 0;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    height: 70vh;
    min-height: 450px;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    height: 60vh;
    min-height: 400px;
  }

  & > div {
    align-self: center;
  }
`;
}),
"[project]/src/components/ui/swiper/swiper.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderWrap",
    ()=>SliderWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/css/keyframes.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/slider/slider.style.jsx [ssr] (ecmascript)");
;
;
;
const SliderWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: relative;
  transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};

  ${({ arrows })=>arrows && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    .swiper-button {
      &-next,
      &-prev {
        top: 50%;
        z-index: 9;
        width: 40px;
        height: 40px;
        margin: auto;
        line-height: 40px;
        position: absolute;
        visibility: hidden;
        text-align: center;
        transform: translateY(-50%);
        color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
        transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};
        border-radius: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('radii.circle')};
        background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
        box-shadow: 0 3px 25.5px 4.5px rgba(0, 0, 0, .06);

        &:hover {
          color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
          background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
        }

        &:after {
          font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
        }
      }

      &-prev {
        outline: 0;
        right: auto;
        left: -20px;

        &:after {
          margin-right: 3px;
        }
      }

      &-next {
        outline: 0;
        left: auto;
        right: -20px;

        &:after {
          margin-left: 3px;
        }
      }

      &-disabled {
        opacity: 0.1;
      }
    }

    &:hover {
      .swiper-button {
        &-prev, &-next {
          visibility: visible;
        }

        &-prev {
          left: 10px;
        }

        &-next {
          right: 10px;
        }
      }
    }
  `}

  ${({ dots })=>dots && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    .swiper-pagination {
      &-bullet {
        cursor: pointer;
        width: 14px;
        height: 14px;
        display: inline-block;
        border-radius: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('radii.circle')};
        background: transparent;
        opacity: 1;
        border: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.black')};
        margin: 0 5px;
        box-shadow: none;
        transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};

        &:hover, &-active {
          background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
          border-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
        }
      }
    }
  `};

  ${({ animate })=>animate && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideContent"]} {
      & > * {
        animation-duration: 0.7s;
        animation-fill-mode: both;
        animation-name: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["fadeOutUp"]};
      }
    }

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SliderThumb"]} {
      img {
        animation-duration: 1.5s;
        animation-fill-mode: both;
        animation-name: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["fadeOutUp"]};
      }
    }

    .swiper-slide-active {
      ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideContent"]} {
        & > * {
          animation-name: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["fadeInUp"]};

          &:nth-child(1) {
            animation-delay: 0.5s;
          }

          &:nth-child(2) {
            animation-delay: 0.8s;
          }

          &:nth-child(3) {
            animation-delay: 1.1s;
          }

          &:nth-child(4) {
            animation-delay: 1.4s;
          }

          &:nth-child(5) {
            animation-delay: 1.7s;
          }

          &:nth-child(6) {
            animation-delay: 2s;
          }
        }
      }

      ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SliderThumb"]} {
        img {
          animation-name: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["fadeInUp"]};
          animation-delay: 0.2s;
        }
      }
    }
  `}
`;
}),
"[project]/src/components/ui/swiper/index.jsx [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$swiper$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/swiper/swiper.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__ = __turbopack_context__.i("[externals]/swiper/react [external] (swiper/react, cjs, [project]/node_modules/swiper)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper__$5b$external$5d$__$28$swiper$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__ = __turbopack_context__.i("[externals]/swiper [external] (swiper, cjs, [project]/node_modules/swiper)");
;
;
;
;
;
;
// install Swiper modules
__TURBOPACK__imported__module__$5b$externals$5d2f$swiper__$5b$external$5d$__$28$swiper$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__["default"].use([
    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper__$5b$external$5d$__$28$swiper$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__["Navigation"],
    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper__$5b$external$5d$__$28$swiper$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__["Pagination"],
    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper__$5b$external$5d$__$28$swiper$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__["Thumbs"],
    __TURBOPACK__imported__module__$5b$externals$5d2f$swiper__$5b$external$5d$__$28$swiper$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__["EffectFade"]
]);
const Slider = ({ children, animate, settings, className })=>{
    const sliderOptions = {
        slidesPerView: 1,
        pagination: true,
        navigation: true,
        ...settings
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$swiper$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SliderWrap"], {
        animate: animate,
        dots: sliderOptions?.pagination,
        arrows: sliderOptions?.navigation,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__["Swiper"], {
            ...sliderOptions,
            className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/swiper/index.jsx",
            lineNumber: 24,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/swiper/index.jsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Slider.propTypes = {
    settings: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].shape({
        navigation: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
        pagination: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
        slidesPerView: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].number,
        spaceBetween: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].number,
        autoplay: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
        breakpoints: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].shape({})
    }),
    animate: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool
};
;
const __TURBOPACK__default__export__ = Slider;
}),
"[project]/src/components/ui/section-title/title.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionText",
    ()=>SectionText,
    "SectionTitleWrap",
    ()=>SectionTitleWrap,
    "Title",
    ()=>Title
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
;
const SectionText = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].p`
  max-width: 600px;
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-top: 15px;
  
  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    max-width: 100%;
    font-size: 15px;
  }
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h2`
  font-size: 36px;
  margin-bottom: 0;
  font-weight: 700;
  color: #191919;
  position: relative;
  display: inline-block;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-transform: capitalize;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    font-size: 28px;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
    font-size: 24px;
  }
`;
const SectionTitleWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]};
  text-align: ${(props)=>props.align ? props.align : 'center'};
  margin-bottom: 50px;
  position: relative;
  width: 100%;
  
  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    margin-bottom: 40px;
  }

  ${SectionText} {
    ${(props)=>props.align === "center" && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      margin-left: auto;
      margin-right: auto;
    `}

    ${(props)=>props.align === "right" && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
      margin-left: auto;
    `}
  }
`;
}),
"[project]/src/components/ui/section-title/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$title$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/section-title/title.style.jsx [ssr] (ecmascript)");
;
;
;
const SectionTitle = ({ title, content, align, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$title$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SectionTitleWrap"], {
        align: align,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$title$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Title"], {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui/section-title/index.jsx",
                lineNumber: 7,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$title$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SectionText"], {
                children: content
            }, void 0, false, {
                fileName: "[project]/src/components/ui/section-title/index.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/section-title/index.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
SectionTitle.defaultProps = {
    align: "center"
};
SectionTitle.propTypes = {
    title: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string.isRequired,
    content: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    align: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = SectionTitle;
}),
"[project]/src/components/blog/posts/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$posts$2f$blog$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blog/posts/blog.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$post$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blog/post/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/swiper/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__ = __turbopack_context__.i("[externals]/swiper/react [external] (swiper/react, cjs, [project]/node_modules/swiper) <export SwiperSlide as Slide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/section-title/index.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const LatestBlog = ({ posts, className, props })=>{
    const settings = {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: false,
        breakpoints: {
            550: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$posts$2f$blog$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BlogWrap"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            mb: 52,
                            align: "center",
                            title: "Latest News",
                            content: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blog/posts/index.jsx",
                            lineNumber: 34,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/posts/index.jsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/posts/index.jsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                posts?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    settings: settings,
                    children: posts?.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__["Slide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$post$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                post: post?.node
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/posts/index.jsx",
                                lineNumber: 47,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, post?.node?.id, false, {
                            fileName: "[project]/src/components/blog/posts/index.jsx",
                            lineNumber: 46,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/posts/index.jsx",
                    lineNumber: 44,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["H3"], {
                        children: "There are no articles found!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/posts/index.jsx",
                        lineNumber: 55,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/posts/index.jsx",
                    lineNumber: 54,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/blog/posts/index.jsx",
            lineNumber: 31,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/blog/posts/index.jsx",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
LatestBlog.propTypes = {
    posts: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].array.isRequired,
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = LatestBlog;
}),
"[project]/src/components/promo/promo.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PromoContent",
    ()=>PromoContent,
    "PromoInfo",
    ()=>PromoInfo,
    "PromoItem",
    ()=>PromoItem,
    "PromoTitle",
    ()=>PromoTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const PromoTitle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h3`
  font-size: 38px;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #191919;
  font-weight: 800;
  letter-spacing: -0.5px;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    font-size: 32px;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
    font-size: 26px;
  }
`;
const PromoContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  align-self: center;
  z-index: 2;
  position: relative;
  max-width: 500px;
  
  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 25px;
    font-weight: 500;
  }
`;
const PromoInfo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 60px;
  justify-content: flex-start;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    padding: 40px;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
    padding: 30px;
  }

  ${(props)=>props.align === 'right' && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    justify-content: flex-end;
    text-align: right;
    
    ${PromoContent} {
      align-items: flex-end;
    }
  `}

  ${(props)=>props.align === 'center' && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    justify-content: center;
    text-align: center;
    
    ${PromoContent} {
      align-items: center;
    }
  `}
`;
const PromoItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].a`
  display: block;
  overflow: hidden;
  position: relative;
  margin-top: 30px;
  border-radius: 0; /* Removing border radius for stricter look or kept slight */
  border-radius: 12px;
  box-shadow: none;
  transition: all 0.5s cubic-bezier(0.2, 0, 0.2, 1);
  text-decoration: none !important;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: all 0.4s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);

    &::after {
      background: rgba(0,0,0,0.03); 
    }

    img {
      transform: scale(1.05);
    }
    
    /* Reveal button effect */
    .promo-btn {
      background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
      color: #fff;
      border-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }
  }

  img {
    width: 100%;
    transition: transform 1.2s cubic-bezier(0.2, 0, 0.2, 1);
  }
`;
}),
"[project]/src/components/promo/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$html$2d$parser__$5b$external$5d$__$28$react$2d$html$2d$parser$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$html$2d$parser$29$__ = __turbopack_context__.i("[externals]/react-html-parser [external] (react-html-parser, cjs, [project]/node_modules/react-html-parser)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/image/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promo$2f$promo$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/promo/promo.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
;
;
;
;
;
;
;
;
// Ad-hoc styled button for the promo
const PromoButton = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["default"].span.withConfig({
    displayName: "promo__PromoButton",
    componentId: "sc-13ac905a-0"
})`
    display: inline-block;
    padding: 12px 28px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #191919;
    background: transparent;
    border: 2px solid #191919;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
        background: #D40511; /* Primary color */
        border-color: #D40511;
        color: #fff;
    }
`;
const Promo = ({ title, content, thumb, slug, className, align })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: slug,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promo$2f$promo$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PromoItem"], {
            className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("figure", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: thumb,
                        alt: title,
                        width: 570,
                        height: 320,
                        layout: "responsive"
                    }, void 0, false, {
                        fileName: "[project]/src/components/promo/index.jsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/promo/index.jsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promo$2f$promo$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PromoInfo"], {
                    align: align ? align : 'left',
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promo$2f$promo$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PromoContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promo$2f$promo$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PromoTitle"], {
                                children: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$html$2d$parser__$5b$external$5d$__$28$react$2d$html$2d$parser$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$html$2d$parser$29$__["default"])(title)
                            }, void 0, false, {
                                fileName: "[project]/src/components/promo/index.jsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: content
                            }, void 0, false, {
                                fileName: "[project]/src/components/promo/index.jsx",
                                lineNumber: 49,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PromoButton, {
                                className: "promo-btn",
                                children: "Shop Now"
                            }, void 0, false, {
                                fileName: "[project]/src/components/promo/index.jsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/promo/index.jsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/promo/index.jsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/promo/index.jsx",
            lineNumber: 34,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/promo/index.jsx",
        lineNumber: 33,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Promo.propTypes = {
    align: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    content: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    slug: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string.isRequired,
    title: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string.isRequired,
    thumb: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string.isRequired
};
const __TURBOPACK__default__export__ = Promo;
}),
"[project]/src/data/promotions/index.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"title":"Sale Furniture <br> For Summer","content":"Great Discounts Here","thumb":"/images/banner/1.jpg","slug":"/shop","align":"right"},{"id":2,"title":"Office Chair  <br> For Best Offer","content":"Great Discounts Here","thumb":"/images/banner/2.jpg","slug":"/shop","align":"left"}]);}),
"[project]/src/components/promotions/promotions.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PromotionsWrap",
    ()=>PromotionsWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
;
const PromotionsWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].section`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
`;
}),
"[project]/src/components/promotions/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promo$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/promo/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$promotions$2f$index$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/promotions/index.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promotions$2f$promotions$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/promotions/promotions.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
const Promotions = ({ fluid })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promotions$2f$promotions$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PromotionsWrap"], {
        py: [
            60,
            60,
            100
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            fluid: fluid,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                className: "mtn-30",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$promotions$2f$index$2e$json__$28$json$29$__["default"].map((promo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        lg: 6,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promo$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            slug: promo.slug,
                            align: promo.align,
                            thumb: promo.thumb,
                            title: promo.title,
                            content: promo.content
                        }, void 0, false, {
                            fileName: "[project]/src/components/promotions/index.jsx",
                            lineNumber: 15,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, promo.id, false, {
                        fileName: "[project]/src/components/promotions/index.jsx",
                        lineNumber: 14,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/promotions/index.jsx",
                lineNumber: 12,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/promotions/index.jsx",
            lineNumber: 11,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/promotions/index.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Promotions;
}),
"[project]/src/components/category/category.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatItemInner",
    ()=>CatItemInner,
    "CatName",
    ()=>CatName,
    "CatSubtext",
    ()=>CatSubtext,
    "CategoryItem",
    ()=>CategoryItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
;
const shimmer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["keyframes"]`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;
const CatName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
  transition: all 0.4s ease;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
    font-size: 16px;
  }
`;
const CatSubtext = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].span`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 6px;
  position: relative;
  z-index: 2;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(10px);
`;
const CatItemInner = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover !important;
    transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1);
    filter: brightness(0.95);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.55) 100%
    );
    transition: all 0.4s ease;
    z-index: 1;
  }
`;
const CategoryItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].a`
  display: block;
  width: 100%;
  height: 340px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none !important;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.5s cubic-bezier(0.2, 0, 0.2, 1);

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    height: 260px;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
    height: 220px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);

    ${CatItemInner} {
      img {
        transform: scale(1.12);
        filter: brightness(1.05);
      }
      &::after {
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0.7) 100%
        );
      }
    }

    ${CatName} {
      transform: translateY(-4px);
    }

    ${CatSubtext} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
}),
"[project]/src/components/category/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/image/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/constant.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$category$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/category/category.style.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const Category = ({ category, icon, slug })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: slug,
        passHref: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$category$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CategoryItem"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$category$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CatItemInner"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        width: 400,
                        height: 400,
                        alt: category,
                        src: icon ? icon : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["placeholder"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/index.jsx",
                        lineNumber: 12,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$category$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CatName"], {
                        children: category
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/index.jsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$category$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CatSubtext"], {
                        children: "View Collection"
                    }, void 0, false, {
                        fileName: "[project]/src/components/category/index.jsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/category/index.jsx",
                lineNumber: 11,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/category/index.jsx",
            lineNumber: 10,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/category/index.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Category.propTypes = {
    category: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string.isRequired,
    slug: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string.isRequired,
    icon: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = Category;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/categories/categories.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoriesWrap",
    ()=>CategoriesWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
;
const CategoriesWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].section`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
`;
}),
"[project]/src/components/categories/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/category/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$categories$2f$categories$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/categories/categories.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/swiper/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__ = __turbopack_context__.i("[externals]/swiper/react [external] (swiper/react, cjs, [project]/node_modules/swiper) <export SwiperSlide as Slide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty/index.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const Categories = ({ categories, className, ...props })=>{
    const settings = {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 15,
        autoplay: false,
        pagination: false,
        navigation: true,
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$categories$2f$categories$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CategoriesWrap"], {
        py: [
            60,
            60,
            100
        ],
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: categories.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                settings: settings,
                children: categories?.map(({ node: category })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__["Slide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$category$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            category: category?.title,
                            icon: category?.image?.originalSrc,
                            slug: `/collection/${category?.handle}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/categories/index.jsx",
                            lineNumber: 46,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0))
                    }, category?.id, false, {
                        fileName: "[project]/src/components/categories/index.jsx",
                        lineNumber: 45,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/categories/index.jsx",
                lineNumber: 41,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "mt-0",
                message: "Collections not found!"
            }, void 0, false, {
                fileName: "[project]/src/components/categories/index.jsx",
                lineNumber: 55,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/categories/index.jsx",
            lineNumber: 39,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/categories/index.jsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Categories.propTypes = {
    categories: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].array.isRequired
};
const __TURBOPACK__default__export__ = Categories;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/data/slider/home-2.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"subtitle":"Modern Living","title":"Contemporary Kitchens","content":"Minimalist designs paired with high-end appliances for the ultimate culinary experience.","thumb":"https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80"},{"id":2,"subtitle":"Elegant Rest","title":"Sophisticated Bedrooms","content":"Create your dream escape with our range of luxury bedding and custom furniture.","thumb":"https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1920&q=80"},{"id":3,"subtitle":"Organization Redefined","title":"Custom Built-In Storage","content":"Sleek and efficient storage solutions for every room in your home.","thumb":"https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1920&q=80"}]);}),
"[project]/src/data/categories.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"node":{"id":"1","title":"Modern Kitchens","handle":"modern-kitchens","image":{"originalSrc":"https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=300&q=80"}}},{"node":{"id":"2","title":"Luxury Bedrooms","handle":"luxury-bedrooms","image":{"originalSrc":"https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=300&q=80"}}},{"node":{"id":"3","title":"Bespoke Wardrobes","handle":"bespoke-wardrobes","image":{"originalSrc":"https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=300&q=80"}}},{"node":{"id":"4","title":"Dining Sets","handle":"dining-sets","image":{"originalSrc":"https://images.unsplash.com/photo-1617806118233-f8e137bc7288?auto=format&fit=crop&w=300&q=80"}}},{"node":{"id":"5","title":"Home Office","handle":"home-office","image":{"originalSrc":"https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=300&q=80"}}},{"node":{"id":"6","title":"Kitchen Appliances","handle":"kitchen-appliances","image":{"originalSrc":"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80"}}}]);}),
"[project]/src/components/ui/loader/style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoaderStyle",
    ()=>LoaderStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/css/keyframes.jsx [ssr] (ecmascript)");
;
;
const LoaderStyle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  font-size: 13px;
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};

  svg {
    font-size: 45px;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.primary")};
  }

  & > * {
    animation: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$keyframes$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["spin"]} 1s infinite;
  }
`;
}),
"[project]/src/components/ui/loader/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$loader$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/loader/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/im/index.esm.js [ssr] (ecmascript)");
;
;
;
;
const Loader = ({ loadingText, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])('w-100 text-center', props.className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$loader$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["LoaderStyle"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ImSpinner2"], {}, void 0, false, {
                    fileName: "[project]/src/components/ui/loader/index.jsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                loadingText ? loadingText : "Loading..."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/loader/index.jsx",
            lineNumber: 8,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/loader/index.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Loader;
}),
"[project]/src/hooks/useProduct.jsx [ssr] (ecmascript) <export default as useProduct>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useProduct",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProduct.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/ui/tooltip/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
;
;
;
;
const Tooltip = ({ children, placement, target })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const theme = {
        ...__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Tooltip"].defaultProps.theme,
        '$tooltip-font-size': '12px'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Tooltip"], {
        theme: theme,
        isOpen: isOpen,
        target: target,
        placement: placement,
        delay: {
            shape: 0,
            hide: 80
        },
        toggle: ()=>setIsOpen((prevState)=>!prevState),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip/index.jsx",
        lineNumber: 14,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Tooltip.defaultProps = {
    placement: "left"
};
Tooltip.propTypes = {
    placement: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    target: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = Tooltip;
}),
"[project]/src/components/product/card/product.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionButton",
    ()=>ActionButton,
    "AddToCartButton",
    ()=>AddToCartButton,
    "Badge",
    ()=>Badge,
    "Product",
    ()=>Product,
    "ProductActions",
    ()=>ProductActions,
    "ProductActionsMobile",
    ()=>ProductActionsMobile,
    "ProductBadges",
    ()=>ProductBadges,
    "ProductImage",
    ()=>ProductImage,
    "ProductMeta",
    ()=>ProductMeta,
    "ProductPrice",
    ()=>ProductPrice,
    "ProductThumb",
    ()=>ProductThumb,
    "ProductTitle",
    ()=>ProductTitle,
    "SelectOptionButton",
    ()=>SelectOptionButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
;
const hvrVisible = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
`;
const ProductPrice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  font-size: 15px;
  line-height: 1;
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.montserrat')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
  font-weight: 700;
  margin-top: 8px;

  .price {
    &.old {
      margin-right: 10px;
      color: #999;
      text-decoration: line-through;
      font-weight: 400;
      font-size: 14px;
    }
    &.new {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }
  }
`;
const ProductTitle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h2`
  font-size: 15px;
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};
  font-weight: 500;
  margin-bottom: 5px;
  line-height: 1.4;
  letter-spacing: 0.2px;
  text-align: center;

  a {
    text-decoration: none;
    color: #191919;
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    display: block;
    transition: color 0.2s ease;

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
      font-size: 14px;
    }

    &:hover {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }
  }
`;
const ProductMeta = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 15px 0 0;
  text-align: center;
  transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};
  background-color: transparent;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
const buttonStyle = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
  border: 0;
  width: calc(100% - 30px);
  z-index: 11;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  transition: all 0.3s ease;
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.heading')};
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.black')};
  border-radius: 4px;
  margin: 0 auto;
  
  svg {
    margin-right: 6px;
    font-size: 16px;
  }

  &:hover {
    background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
  }

  ${({ disabled })=>disabled && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    pointer-events: none;
    opacity: 0.65 !important;
  `}
`;
const AddToCartButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].button`
  ${buttonStyle}
  position: absolute;
  bottom: 15px;
  left: 15px;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    margin-top: 15px;
    width: 100%;
    margin-left: 0;
  }
`;
const SelectOptionButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].span`
  ${buttonStyle}
  position: absolute;
  bottom: 15px;
  left: 15px;
  transform: translateY(20px);
  opacity: 0;
  visibility: hidden;
  cursor: pointer;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    margin-top: 15px;
    width: 100%;
    margin-left: 0;
  }
`;
const ActionButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #191919;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);

  svg {
    font-size: 18px;
  }

  &:not(.wishlist) {
    transform: translateX(10px);
    opacity: 0;
  }

  ${({ isActive })=>isActive && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
  `}
  
  &:hover {
    background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    color: #fff;
  }
`;
const ProductActions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: absolute;
  z-index: 9;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    display: none;
  }
`;
const ProductActionsMobile = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: none;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 12px;
  }

  ${ActionButton} {
    transform: none;
    opacity: 1;
    box-shadow: none;
    background: #f5f5f5;
    
    &:hover {
      background: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
      color: #fff;
    }
  }
`;
const Badge = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].span`
  background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.black')};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 4px 10px;
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);

  & + span {
    margin-top: 6px;
  }

  ${(props)=>props.type === 'new' && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.green')};
  `}

  ${(props)=>props.type === 'sale' && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
  `}

  ${(props)=>props.type === 'winter' && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    background-color: #6a1b9a;
  `}

  ${(props)=>props.type === 'featured' && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.secondary')};
  `}
`;
const ProductBadges = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: absolute;
  z-index: 8;
  top: 15px;
  left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ProductImage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;

  .thumb {
    z-index: 1;
    max-width: 100%;

    &.hover-image {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
`;
const ProductThumb = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].figure`
  position: relative;
  overflow: hidden;
  margin: 0;
  border-radius: 12px;
  background-color: #f7f7f7;
  
  /* Aspect ratio fix via padding approach or assume consistent images */
  /* padding-bottom: 125%; */ /* Example vertical rect */ 
  
  img {
    width: 100%;
    height: auto;
    display: block;
    mix-blend-mode: multiply; /* Helps transparent PNG products look integrated */
    transition: transform 0.6s cubic-bezier(0.2, 0, 0.2, 1);
  }

  .hover-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease;
    mix-blend-mode: multiply;
  }
`;
const Product = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: relative;
  margin-bottom: 40px; /* More spacing */

  &:hover {
    ${ProductThumb} img {
      transform: scale(1.05); /* Slight zoom */
    }

    ${ProductThumb} .hover-image {
      opacity: 1;
    }

    ${AddToCartButton}, ${SelectOptionButton} {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    ${ActionButton} {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
}),
"[project]/src/components/product/card/actions.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__ = __turbopack_context__.i("[project]/src/hooks/useProduct.jsx [ssr] (ecmascript) <export default as useProduct>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/card/product.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.esm.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const ProductActions = ({ product, onQuickViewHandler })=>{
    const { id } = product;
    const { isInWishlist, isInCompareList, onWishlistHandler, onCompareHandler } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__["useProduct"])(product);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "btn-action",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ActionButton"], {
                        className: "wishlist",
                        isActive: isInWishlist,
                        id: `wishlist-button-${id}`,
                        onClick: ()=>onWishlistHandler(),
                        children: isInWishlist ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["AiOutlineDelete"], {}, void 0, false, {
                            fileName: "[project]/src/components/product/card/actions.jsx",
                            lineNumber: 21,
                            columnNumber: 37
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoMdHeartEmpty"], {}, void 0, false, {
                            fileName: "[project]/src/components/product/card/actions.jsx",
                            lineNumber: 21,
                            columnNumber: 58
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/card/actions.jsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        target: `wishlist-button-${id}`,
                        children: !isInWishlist ? 'Add to Wishlist' : 'Remove from Wishlist'
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/card/actions.jsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/card/actions.jsx",
                lineNumber: 14,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "btn-action",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ActionButton"], {
                        className: "quickview",
                        id: `quickview-button-${id}`,
                        onClick: ()=>onQuickViewHandler(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["AiOutlineFullscreen"], {}, void 0, false, {
                            fileName: "[project]/src/components/product/card/actions.jsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/card/actions.jsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        target: `quickview-button-${id}`,
                        children: "Quick View"
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/card/actions.jsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/card/actions.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "btn-action",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ActionButton"], {
                        className: "compare",
                        isActive: isInCompareList,
                        id: `compare-button-${id}`,
                        onClick: ()=>onCompareHandler(),
                        children: isInCompareList ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["AiOutlineDelete"], {}, void 0, false, {
                            fileName: "[project]/src/components/product/card/actions.jsx",
                            lineNumber: 46,
                            columnNumber: 40
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosGitCompare"], {}, void 0, false, {
                            fileName: "[project]/src/components/product/card/actions.jsx",
                            lineNumber: 46,
                            columnNumber: 61
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/card/actions.jsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        target: `compare-button-${id}`,
                        children: !isInCompareList ? 'Add to Compare' : 'Remove from Compare'
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/card/actions.jsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/card/actions.jsx",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
ProductActions.propTypes = {
    product: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].object.isRequired,
    onQuickViewHandler: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].func.isRequired
};
const __TURBOPACK__default__export__ = ProductActions;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/product/card/thumbnail.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/image/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/constant.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/card/product.style.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const ProductThumbnail = ({ product })=>{
    const { title, images, handle } = product;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductImage"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/product/${handle}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], {
                children: images?.edges?.length > 0 ? images?.edges?.slice(0, 2).map(({ node: thumb }, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])("thumb", {
                            "hover-image": idx === 1
                        }),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            alt: title,
                            width: 270,
                            height: 318,
                            src: thumb.originalSrc
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/card/thumbnail.jsx",
                            lineNumber: 19,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0))
                    }, idx, false, {
                        fileName: "[project]/src/components/product/card/thumbnail.jsx",
                        lineNumber: 18,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    alt: title,
                    width: 270,
                    height: 318,
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["placeholder"]
                }, void 0, false, {
                    fileName: "[project]/src/components/product/card/thumbnail.jsx",
                    lineNumber: 28,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/product/card/thumbnail.jsx",
                lineNumber: 15,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/product/card/thumbnail.jsx",
            lineNumber: 14,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/product/card/thumbnail.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
ProductThumbnail.propTypes = {
    product: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].object.isRequired
};
const __TURBOPACK__default__export__ = ProductThumbnail;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/product/card/add-to-cart-button.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__ = __turbopack_context__.i("[project]/src/hooks/useProduct.jsx [ssr] (ecmascript) <export default as useProduct>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import, [project]/node_modules/react-hot-toast)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, cjs, [project]/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/actions/cartAction.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/card/product.style.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
const AddToCartButton = ({ isShowInMobile, product })=>{
    const { title, variants, handle } = product;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useDispatch"])();
    const { price, isStock, isInCart, quantity, variations } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__["useProduct"])(product);
    const addToCartHandler = (rest)=>{
        if (!isInCart) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addToCartAction"])(rest));
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success(`${rest?.title} is added to cart.`);
        } else {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error(`${rest?.title} is already added.`);
        }
    };
    return variants?.edges?.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/product/${handle}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SelectOptionButton"], {
            mobile: isShowInMobile,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosCart"], {}, void 0, false, {
                    fileName: "[project]/src/components/product/card/add-to-cart-button.jsx",
                    lineNumber: 34,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                " Select Options"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/product/card/add-to-cart-button.jsx",
            lineNumber: 33,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/product/card/add-to-cart-button.jsx",
        lineNumber: 32,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["AddToCartButton"], {
        mobile: isShowInMobile,
        disabled: isInCart || isStock,
        onClick: ()=>addToCartHandler({
                ...product,
                price,
                quantity,
                variations
            }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosCart"], {}, void 0, false, {
                fileName: "[project]/src/components/product/card/add-to-cart-button.jsx",
                lineNumber: 48,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            !isStock && !isInCart ? "Add to Cart" : !isStock && isInCart ? "Already Added" : "Out of Stock"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/product/card/add-to-cart-button.jsx",
        lineNumber: 38,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
};
AddToCartButton.defaultProps = {
    isShowInMobile: false
};
AddToCartButton.propTypes = {
    product: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].object.isRequired,
    isShowInMobile: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool
};
const __TURBOPACK__default__export__ = AddToCartButton;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/product/details/details.style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BundleButton",
    ()=>BundleButton,
    "BundleItem",
    ()=>BundleItem,
    "BundleSection",
    ()=>BundleSection,
    "CheckBadge",
    ()=>CheckBadge,
    "ContentWrap",
    ()=>ContentWrap,
    "DimensionButton",
    ()=>DimensionButton,
    "FinanceBox",
    ()=>FinanceBox,
    "MattressCard",
    ()=>MattressCard,
    "MattressGrid",
    ()=>MattressGrid,
    "ModalContent",
    ()=>ModalContent,
    "ModalOverlay",
    ()=>ModalOverlay,
    "OptionGrid",
    ()=>OptionGrid,
    "OptionItem",
    ()=>OptionItem,
    "OptionTab",
    ()=>OptionTab,
    "OptionTabNav",
    ()=>OptionTabNav,
    "PaymentIcons",
    ()=>PaymentIcons,
    "ProDescription",
    ()=>ProDescription,
    "ProInfoList",
    ()=>ProInfoList,
    "ProductActionButton",
    ()=>ProductActionButton,
    "ProductDescReviewContent",
    ()=>ProductDescReviewContent,
    "ProductDescReviewWrapper",
    ()=>ProductDescReviewWrapper,
    "ProductDetailsWrapper",
    ()=>ProductDetailsWrapper,
    "ProductName",
    ()=>ProductName,
    "ProductPrices",
    ()=>ProductPrices,
    "ProductRatings",
    ()=>ProductRatings,
    "ProductSKU",
    ()=>ProductSKU,
    "ProductSocialShare",
    ()=>ProductSocialShare,
    "ProductSwatchItem",
    ()=>ProductSwatchItem,
    "ProductSwatches",
    ()=>ProductSwatches,
    "ProductThumbGallery",
    ()=>ProductThumbGallery,
    "ProductThumbNav",
    ()=>ProductThumbNav,
    "QuantityIncDecButton",
    ()=>QuantityIncDecButton,
    "ReviewFormWrap",
    ()=>ReviewFormWrap,
    "ReviewItem",
    ()=>ReviewItem,
    "TrustBadges",
    ()=>TrustBadges,
    "TrustPilot",
    ()=>TrustPilot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
;
const ReviewItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  align-items: center;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    display: block;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  .review-img {
    width: 120px;
    height: 120px;
    display: flex;
    flex: 0 0 120px;
    margin: 0 15px 0 0;
    align-items: center;
    justify-content: center;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])("colors.text")};
    border-radius: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('radii.circle')};
    border: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.borderLight')};

    svg {
      font-size: 50px;
    }

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
      margin-bottom: 15px;
    }
  }

  .review-content {
    width: 100%;
    line-height: 1;
    margin-bottom: 5px;
    font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};

    .review-name {
      margin-bottom: 7px;
      line-height: 1;
      font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.body')};
      font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.medium')};
    }

    .ratings {
      margin-bottom: 5px;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }
  }
`;
const ReviewFormWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    margin-top: 30px;
  }

  h3 {
    font-size: 26px;
    margin-bottom: 25px;
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
  }
`;
const ProInfoList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ul`
  margin-bottom: 15px;

  li {
    display: block;
    font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};

    &:not(:last-child) {
      margin-bottom: 13px
    }

    span {
      min-width: 70px;
      margin: 0 26px 0 0;
      display: inline-block;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
      font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.medium')};
    }
  }
`;
const ProDescription = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  line-height: 1.7;
  font-size: 15px;

  p {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
const ProductDescReviewContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  overflow: hidden;
  line-height: 24px;
  text-align: left;
  padding: 30px;
  border: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.borderLight')};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const ProductDescReviewWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].section`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
  .description-review-nav {
    display: flex;
    justify-content: center;

    li {
      line-height: 1;
      margin: 0 30px;
      font-size: 20px;
      cursor: pointer;
      position: relative;
      padding-bottom: 15px;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
      transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};
      font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.heading')};
      font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};

      ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
        margin: 0 10px;
        font-size: 14px;
      }

      &:after {
        left: 0;
        right: 0;
        height: 2px;
        content: "";
        bottom: -1px;
        position: absolute;
        transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};
      }

      &.react-tabs__tab--selected, &:hover {
        &:after {
          background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
        }
      }
    }
  }
`;
const ProductThumbNav = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  margin-top: 10px;

  figure {
    height: 85px;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
      height: 70px;
    }
  }

  .swiper-slide {
    border: 1px solid transparent;

    &-thumb-active {
      border-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }
  }


  [class*="swiper-button"] {
    height: 30px;
    width: 30px;
    line-height: 30px;

    &:after {
      font-size: 12px !important;
    }
  }
`;
const ProductThumbGallery = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  figure {
    height: 500px;
    overflow: hidden;
    position: relative;

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
      height: 400px;
    }

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
      height: 400px;
    }

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
      height: 300px;
    }
  }
`;
const ProductSocialShare = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  line-height: 1;
  margin-top: 10px;
  align-items: center;

  h4 {
    margin-right: 10px;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.text')};
    font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.heading')};
  }

  .media {
    margin-top: 3px;

    a {
      font-size: 18px;
      display: inline-block;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.text')};

      &:not(:last-child) {
        margin-right: 15px;
      }

      &:hover {
        color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
      }
    }
  }
`;
const QuantityIncDecButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  width: 120px;
  display: flex;
  margin-right: 15px;
  border: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};

  .btn {
    &:hover {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.white')};
      background-color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }

    &-decrement {
      border-right: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }

    &-increment {
      border-left: 1px solid ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }
  }

  input {
    width: 100%;
    border: none;
    display: block;
    text-align: center;
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
  }
`;
const ProductActionButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  margin-top: 30px;

  .quantity-cart-button {
    display: flex;

    .btn-cart {
      border: 1px solid transparent;

      ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
        padding: 10px 20px;
        font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};
      }
    }
  }

  .wishlist-compare-button {
    margin-top: 20px;

    .btn {
      padding: 0;
      border: none;
      line-height: 1;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.text')};
      font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};
      font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};

      &:not(:last-child) {
        margin-right: 20px;
      }

      svg {
        margin-right: 2px;
        vertical-align: bottom;
      }

      &:hover {
        color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
      }
    }
  }
`;
const ProductSwatchItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  label {
    margin-bottom: 3px;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
  }
`;
const ProductSwatches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  margin-top: 20px;

  ${ProductSwatchItem} {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
const ProductPrices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  font-size: 22px;
  margin-top: 15px;
  margin-bottom: 20px;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .price {
    &.old {
      margin-right: 5px;
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.darkgray')};
    }
  }
`;
const ProductRatings = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  margin-top: 5px;

  svg {
    width: 16px;
    overflow: hidden;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.body')};
  }
`;
const ProductSKU = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].p`
  line-height: 1;
  font-size: 13px;

  strong {
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
  }
`;
const ProductName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].h2`
  line-height: 1;
  font-size: 24px;
  margin: 15px 0;
  color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.heading')};
  font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
const ContentWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  line-height: 26px;
  font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};
  font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.standard')};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    margin-top: 25px;
  }

  ${ProductSKU} {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &.details-page {
    ${ProductSwatches} {
      @media screen and (min-width: 992px) {
        max-width: 50%;
      }
    }
  }
`;
const ProductDetailsWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].section`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
  padding: 60px 0;
  
  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    padding: 30px 0;
  }
`;
const OptionTabNav = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  background: #F9F4F0;
  border-radius: 12px;
  padding: 0;
  margin-bottom: 25px;
  border: 1px solid #E9E1D8;
  overflow: hidden;
`;
const OptionTab = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  text-align: center;
  cursor: pointer;
  flex: 1;
  padding: 15px 10px;
  background-color: ${(props)=>props.active ? '#FEFBF9' : 'transparent'};
  transition: all 0.3s ease;
  border-right: 1px solid #E9E1D8;
  position: relative;
  
  &:last-child {
    border-right: none;
  }
  
  &:hover {
    background-color: #FEFBF9;
  }
  
  .tab-icon {
    font-size: 28px;
    margin-bottom: 5px;
    color: #333;
    display: flex;
    justify-content: center;
    line-height: 1;
  }
  
  .tab-label {
    font-size: 14px;
    color: #333;
    font-weight: 700;
    line-height: 1.2;
  }
  
  .tab-value {
    font-size: 12px;
    color: #666;
    margin-top: 4px;
    font-weight: 400;
  }
`;
const OptionGrid = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-top: 15px;
  margin-bottom: 30px;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const OptionItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  border: 1px solid ${(props)=>props.active ? '#7E2D67' : '#F1EBE6'};
  border-radius: 10px;
  padding: 0;
  cursor: pointer;
  background-color: #FEFAF7;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  text-align: center;

  &:hover {
    border-color: #7E2D67;
  }

  ${(props)=>props.active && `
    box-shadow: 0 0 0 1px #7E2D67;
  `}
  
  .option-img {
    width: 100%;
    height: auto;
    aspect-ratio: 1.5;
    background: #EAEAEA;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }

  .option-icon {
    padding: 20px 0 10px;
    svg {
        font-size: 50px;
        color: #555;
    }
  }

  .option-text {
    padding: 12px 10px;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    line-height: 1.2;
    background: #FEFAF7;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .option-price {
    font-size: 12px;
    color: #333;
    margin-top: 4px;
    font-weight: 600;
  }
`;
const CheckBadge = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #7E2D67;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;
const DimensionButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
    text-align: center;
    margin-top: -15px;
    margin-bottom: 25px;
    
    button {
        background: #F3ECE6;
        border: 1px solid #7E2D67;
        color: #333;
        border-radius: 10px;
        padding: 12px 30px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
            background: #EBE1D9;
        }
    }
`;
const FinanceBox = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f4f6f8;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 13px;
  border: 1px solid #e1e1e1;
  
  img {
    height: 20px;
    margin-right: 5px;
  }
`;
const TrustPilot = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  
  .stars {
    display: flex;
    gap: 3px;
  }
  
  .star-box {
    background: #00b67a;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    font-size: 14px;
    border-radius: 2px;
  }
  
  .rating-text {
    font-size: 14px;
    color: #333;
    margin-left: 8px;
    font-weight: 500;
  }
`;
const BundleSection = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
const BundleItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
    background: #FFFAF6;
    border: 1px solid ${(props)=>props.active ? '#7E2D67' : '#F1EBE6'};
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    
    .bundle-label {
        display: flex;
        align-items: center;
        gap: 15px;
        
        .bundle-icons {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 28px;
            color: #333;
        }
        
        .bundle-text {
            span {
                display: block;
                font-size: 18px;
                font-weight: 700;
                color: #333;
            }
            p {
                margin: 0;
                font-size: 14px;
                color: #666;
                line-height: 1.4;
            }
        }
    }
    
    .bundle-action {
        display: flex;
        align-items: center;
        gap: 20px;
        
        .bundle-price {
            font-size: 20px;
            font-weight: 700;
            color: #7E2D67;
        }
    }
`;
const BundleButton = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].button`
    background: #fff;
    border: 1.5px solid #7E2D67;
    color: #333;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
        background: #F9F4F0;
    }
    
    &.active {
        background: #7E2D67;
        color: #fff;
    }
    
    svg {
        font-size: 18px;
    }
`;
const PaymentIcons = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    
    img {
        height: 24px;
        width: auto;
        opacity: 0.9;
    }
`;
const TrustBadges = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    
    .badge-item {
        text-align: center;
        font-size: 12px;
        color: #333;
        font-weight: 500;
        
        .icon {
            font-size: 24px;
            margin-bottom: 5px;
            display: block;
        }
    }
`;
const ModalOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;
const ModalContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  background: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 40px;
  
  .modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    &:hover { color: #000; }
  }
  
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
  }
`;
const MattressGrid = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    grid-template-columns: 1fr;
  }
`;
const MattressCard = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  border: 2px solid ${(props)=>props.selected ? '#7E2D67' : '#eee'};
  border-radius: 12px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    border-color: #7E2D67;
  }
  
  .check-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #7E2D67;
    font-size: 20px;
    display: ${(props)=>props.selected ? 'block' : 'none'};
  }
  
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  .m-title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #333;
  }
  
  .m-desc {
    font-size: 13px;
    color: #666;
    margin-bottom: 10px;
    flex-grow: 1;
  }
  
  .m-price {
    font-size: 18px;
    font-weight: 700;
    color: #7E2D67;
  }
`;
}),
"[project]/src/components/product/details/thumbnail.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/image/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/swiper/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__ = __turbopack_context__.i("[externals]/swiper/react [external] (swiper/react, cjs, [project]/node_modules/swiper) <export SwiperSlide as Slide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/details/details.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
const ProductDetailsThumb = ({ thumbnails })=>{
    const [thumbsSwiper, setThumbsSwiper] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const thumbGalleryConfig = {
        pagination: false,
        thumbs: {
            swiper: thumbsSwiper
        }
    };
    const thumbNavConfig = {
        freeMode: true,
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: false,
        navigation: thumbnails?.length > 4,
        watchSlidesProgress: true,
        onSwiper: setThumbsSwiper,
        watchSlidesVisibility: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductThumbGallery"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    settings: thumbGalleryConfig,
                    children: thumbnails?.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__["Slide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("figure", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    layout: "fill",
                                    alt: "furns",
                                    src: image?.node?.originalSrc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/details/thumbnail.jsx",
                                    lineNumber: 35,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/thumbnail.jsx",
                                lineNumber: 34,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, image?.node?.id, false, {
                            fileName: "[project]/src/components/product/details/thumbnail.jsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/product/details/thumbnail.jsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/product/details/thumbnail.jsx",
                lineNumber: 30,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            thumbnails?.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductThumbNav"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    settings: {
                        ...thumbNavConfig
                    },
                    children: thumbnails?.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__["Slide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("figure", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$image$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    width: 108,
                                    height: 108,
                                    alt: "furns",
                                    src: image?.node?.originalSrc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/details/thumbnail.jsx",
                                    lineNumber: 52,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/thumbnail.jsx",
                                lineNumber: 51,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, image?.node?.id, false, {
                            fileName: "[project]/src/components/product/details/thumbnail.jsx",
                            lineNumber: 50,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/product/details/thumbnail.jsx",
                    lineNumber: 48,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/product/details/thumbnail.jsx",
                lineNumber: 47,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/product/details/thumbnail.jsx",
        lineNumber: 29,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
ProductDetailsThumb.propTypes = {
    thumbnails: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].array.isRequired
};
const __TURBOPACK__default__export__ = ProductDetailsThumb;
}),
"[project]/src/components/product/details/rating.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/method.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.esm.js [ssr] (ecmascript)");
;
;
;
;
;
;
const RatingStyle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]};
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["color"]};
`;
const Ratings = ({ ratings, className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RatingStyle, {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])('ratings', className),
        ...props,
        children: [
            Array.from({
                length: ratings
            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosStar"], {}, i, false, {
                    fileName: "[project]/src/components/product/details/rating.jsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["isFloat"])(ratings) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosStarHalf"], {}, void 0, false, {
                fileName: "[project]/src/components/product/details/rating.jsx",
                lineNumber: 21,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)),
            Array.from({
                length: 5 - ratings
            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoIosStarOutline"], {}, i, false, {
                    fileName: "[project]/src/components/product/details/rating.jsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/product/details/rating.jsx",
        lineNumber: 14,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Ratings.propTypes = {
    ratings: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].number.isRequired,
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = Ratings;
}),
"[project]/src/components/product/details/content.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__ = __turbopack_context__.i("[project]/src/hooks/useProduct.jsx [ssr] (ecmascript) <export default as useProduct>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import, [project]/node_modules/react-hot-toast)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, cjs, [project]/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/constant.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/method.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.esm.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/details/details.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$rating$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/details/rating.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/actions/cartAction.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ProductDetailsContent = ({ product, selectedMattress, isAssemblyAdded, setSelectedMattress, setIsAssemblyAdded, ...props })=>{
    let { title, description, variants, options } = product;
    variants = variants?.edges;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$redux$29$__["useDispatch"])();
    const shortDesc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$method$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["excerpt"])(description, 40);
    const [selectedOptions, setSelectedOptions] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('Colour');
    const { sku, stock, price: basePrice, isStock, quantity, variations, isDiscounted, isInWishlist, compareAtPrice: baseCompareAtPrice, isInCompareList, onVariantHandler, onCompareHandler, onWishlistHandler, onIncrementQuantity, cartProductQuantity, onDecrementQuantity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__["useProduct"])(product);
    const onAddToCartHandler = (rest)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$actions$2f$cartAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addToCartAction"])(rest));
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success(`${rest?.title} is added to cart.`);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (variants && variants?.length) {
            const firstVariant = variants[0].node;
            const initialOptions = {};
            firstVariant.selectedOptions.forEach((opt)=>{
                initialOptions[opt.name] = {
                    value: opt.value,
                    label: opt.value
                };
            });
            setSelectedOptions(initialOptions);
        }
    }, [
        variants
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (Object.keys(selectedOptions).length >= 1) {
            onVariantHandler(selectedOptions);
        }
    }, [
        selectedOptions
    ]);
    const getPriceAdjustmentValue = (value, optionName)=>{
        if (optionName === 'Size') {
            const prices = {
                'Small Single 2FT6': -200,
                'Single 3FT': -185,
                'Small Double 4FT': -50,
                'Double 4FT6': 0,
                'King 5FT': 50,
                'Super King 6FT': 120
            };
            return prices[value] || 0;
        }
        if (optionName === 'Headboard') {
            const prices = {
                'Free 54" Headboard': 0,
                'Premium 54" Headboard': 75
            };
            return prices[value] || 0;
        }
        if (optionName === 'Colour') {
            // Some colors might be premium fabrics
            if (value.includes('Plush Velvet')) return 20;
            if (value.includes('Coniston')) return 0;
        }
        return 0;
    };
    const getPriceAdjustmentLabel = (value, optionName)=>{
        const adj = getPriceAdjustmentValue(value, optionName);
        if (adj === 0) return null;
        return adj > 0 ? `+£${adj}.00` : `-£${Math.abs(adj)}.00`;
    };
    // Cumulative Price Calculation
    const mattressPrice = selectedMattress ? selectedMattress.price : 0;
    const assemblyPrice = isAssemblyAdded ? 39.99 : 0;
    // Calculate total adjustment from selected options
    const variantAdjustment = Object.entries(selectedOptions).reduce((acc, [name, opt])=>{
        return acc + getPriceAdjustmentValue(opt.value, name);
    }, 0);
    // If Shopify variant exists, use its price, otherwise fallback to a default base price + adjustments
    const displayBasePrice = variations?.id ? parseFloat(basePrice) : 399.99;
    const totalPrice = (displayBasePrice + variantAdjustment + mattressPrice + assemblyPrice).toFixed(2);
    const totalComparePrice = baseCompareAtPrice ? (parseFloat(baseCompareAtPrice) + variantAdjustment + mattressPrice + assemblyPrice).toFixed(2) : (displayBasePrice * 2 + variantAdjustment + mattressPrice + assemblyPrice).toFixed(2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ContentWrap"], {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductName"], {
                style: {
                    fontSize: '32px',
                    fontFamily: 'serif',
                    marginBottom: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/product/details/content.jsx",
                lineNumber: 161,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["TrustPilot"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "stars",
                        children: [
                            ...Array(5)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "star-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["AiFillStar"], {}, void 0, false, {
                                    fileName: "[project]/src/components/product/details/content.jsx",
                                    lineNumber: 167,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, i, false, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "rating-text",
                        children: "4.8/5 - 11,000 Reviews"
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 171,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/details/content.jsx",
                lineNumber: 163,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductPrices"], {
                style: {
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#333'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "d-flex align-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "price new mr-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CURRENCY"] + totalPrice
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/details/content.jsx",
                            lineNumber: 176,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        totalComparePrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("del", {
                                    className: "price old",
                                    style: {
                                        fontSize: '16px',
                                        color: '#999',
                                        fontWeight: 'normal'
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CURRENCY"] + totalComparePrice
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/details/content.jsx",
                                    lineNumber: 179,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        background: '#7e2d67',
                                        color: '#fff',
                                        padding: '2px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                        marginLeft: '10px'
                                    },
                                    children: [
                                        "SAVE ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CURRENCY"] + (parseFloat(totalComparePrice) - parseFloat(totalPrice)).toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/product/details/content.jsx",
                                    lineNumber: 180,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/details/content.jsx",
                    lineNumber: 175,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/product/details/content.jsx",
                lineNumber: 174,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    color: '#7e2d67',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '20px'
                },
                children: [
                    "● Available now! ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#333',
                            fontWeight: 'normal'
                        },
                        children: "Last few left in stock"
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 189,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/details/content.jsx",
                lineNumber: 188,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["FinanceBox"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    children: [
                        "Pay £",
                        parseFloat(totalPrice / 3).toFixed(2),
                        " in 3 installments with ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                            children: "Klarna"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/details/content.jsx",
                            lineNumber: 193,
                            columnNumber: 91
                        }, ("TURBOPACK compile-time value", void 0)),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/details/content.jsx",
                    lineNumber: 193,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/product/details/content.jsx",
                lineNumber: 192,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            options && options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "option-selectors-wrapper",
                style: {
                    background: '#F9F4F0',
                    padding: '20px',
                    borderRadius: '15px',
                    border: '1px solid #E9E1D8'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OptionTabNav"], {
                        children: options?.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OptionTab"], {
                                active: activeTab === option.name,
                                onClick: ()=>setActiveTab(option.name),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "tab-icon",
                                        children: [
                                            option.name === 'Colour' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MdColorLens"], {}, void 0, false, {
                                                fileName: "[project]/src/components/product/details/content.jsx",
                                                lineNumber: 206,
                                                columnNumber: 66
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            option.name === 'Size' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MdStraighten"], {}, void 0, false, {
                                                fileName: "[project]/src/components/product/details/content.jsx",
                                                lineNumber: 207,
                                                columnNumber: 64
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            option.name === 'Headboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MdHotel"], {}, void 0, false, {
                                                fileName: "[project]/src/components/product/details/content.jsx",
                                                lineNumber: 208,
                                                columnNumber: 69
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/product/details/content.jsx",
                                        lineNumber: 205,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "tab-label",
                                        children: option.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product/details/content.jsx",
                                        lineNumber: 210,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "tab-value",
                                        children: selectedOptions[option.name]?.value || 'Select'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product/details/content.jsx",
                                        lineNumber: 211,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, option.name, true, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 200,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 198,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    options?.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: activeTab === option?.name ? 'block' : 'none'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OptionGrid"], {
                                    children: option?.values.map((value)=>{
                                        const isActive = selectedOptions[option?.name]?.value === value;
                                        const priceAdj = getPriceAdjustmentLabel(value, option.name);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OptionItem"], {
                                            active: isActive,
                                            onClick: ()=>setSelectedOptions((prev)=>({
                                                        ...prev,
                                                        [option.name]: {
                                                            value,
                                                            label: value
                                                        }
                                                    })),
                                            children: [
                                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CheckBadge"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["IoCheckmark"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/product/details/content.jsx",
                                                        lineNumber: 229,
                                                        columnNumber: 70
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/product/details/content.jsx",
                                                    lineNumber: 229,
                                                    columnNumber: 58
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                option.name === 'Colour' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "option-img",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                        src: `/assets/images/products/variants/${value.toLowerCase().replace(/ /g, '_')}.png`,
                                                        alt: value,
                                                        onError: (e)=>{
                                                            e.target.src = "https://sonno.co.uk/cdn/shop/files/Sofia-Ottoman-Bed-Pink-Plush-Velvet-1.jpg";
                                                            e.target.onerror = null;
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/product/details/content.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/product/details/content.jsx",
                                                    lineNumber: 232,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "option-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MdHotel"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/product/details/content.jsx",
                                                        lineNumber: 237,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/product/details/content.jsx",
                                                    lineNumber: 236,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "option-text",
                                                    children: [
                                                        value,
                                                        priceAdj && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "option-price",
                                                            children: priceAdj
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/product/details/content.jsx",
                                                            lineNumber: 243,
                                                            columnNumber: 62
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/product/details/content.jsx",
                                                    lineNumber: 241,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, value, true, {
                                            fileName: "[project]/src/components/product/details/content.jsx",
                                            lineNumber: 224,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/details/content.jsx",
                                    lineNumber: 218,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                option.name === 'Size' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["DimensionButton"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success("Opening dimensions chart..."),
                                        children: "View Dimensions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product/details/content.jsx",
                                        lineNumber: 252,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/details/content.jsx",
                                    lineNumber: 251,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, option?.id, true, {
                            fileName: "[project]/src/components/product/details/content.jsx",
                            lineNumber: 217,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/details/content.jsx",
                lineNumber: 197,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductActionButton"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "quantity-cart-button d-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            tag: "button",
                            bg: "primary",
                            color: "white",
                            hvrBg: "secondary",
                            className: "btn-cart",
                            style: {
                                opacity: isStock ? 0.6 : 1,
                                pointerEvents: isStock ? 'none' : 'visible',
                                width: '100%',
                                backgroundColor: '#7e2d67',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                padding: '15px 0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px'
                            },
                            onClick: ()=>onAddToCartHandler({
                                    ...product,
                                    price: totalPrice,
                                    quantity,
                                    variations,
                                    selectedMattress,
                                    isAssemblyAdded
                                }),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MdHotel"], {}, void 0, false, {
                                    fileName: "[project]/src/components/product/details/content.jsx",
                                    lineNumber: 292,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                isStock ? "Out of Stock" : "Add to Basket"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/product/details/content.jsx",
                            lineNumber: 263,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 262,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PaymentIcons"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "https://cdn-icons-png.flaticon.com/512/349/349221.png",
                                alt: "Visa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 297,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "https://cdn-icons-png.flaticon.com/512/349/349228.png",
                                alt: "Amex"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 298,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "https://cdn-icons-png.flaticon.com/512/5968/5968199.png",
                                alt: "Apple Pay"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 299,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "https://cdn-icons-png.flaticon.com/512/888/888871.png",
                                alt: "Google Pay"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "https://cdn-icons-png.flaticon.com/512/196/196052.png",
                                alt: "PayPal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 301,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 296,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mt-3 text-center",
                        style: {
                            fontSize: '13px',
                            color: '#555'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: [
                                "Order today for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                    children: "FREE delivery"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/details/content.jsx",
                                    lineNumber: 305,
                                    columnNumber: 40
                                }, ("TURBOPACK compile-time value", void 0)),
                                " between ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                    children: "Feb 25"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/details/content.jsx",
                                    lineNumber: 305,
                                    columnNumber: 79
                                }, ("TURBOPACK compile-time value", void 0)),
                                " and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                    children: "Mar 6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/details/content.jsx",
                                    lineNumber: 305,
                                    columnNumber: 107
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/product/details/content.jsx",
                            lineNumber: 305,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 304,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/details/content.jsx",
                lineNumber: 261,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$details$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["TrustBadges"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "badge-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "icon",
                                children: "🛡️"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 311,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "5 Years Warranty"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 310,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "badge-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "icon",
                                children: "🌙"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 315,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "60 Night Risk-Free Trial"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 314,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "badge-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "icon",
                                children: "📈"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 319,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "0% Interest Rate"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 318,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "badge-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "icon",
                                children: "🚚"
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/details/content.jsx",
                                lineNumber: 323,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Fast Free Delivery"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/details/content.jsx",
                        lineNumber: 322,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/details/content.jsx",
                lineNumber: 309,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/product/details/content.jsx",
        lineNumber: 160,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
ProductDetailsContent.propTypes = {
    product: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].object.isRequired
};
const __TURBOPACK__default__export__ = ProductDetailsContent;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/product/card/quick-view.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/offCanvas/style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$thumbnail$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/details/thumbnail.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$content$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/details/content.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$content$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$content$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const QuickView = ({ product, isOpen, onHandler })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Modal"], {
        isOpen: isOpen,
        toggle: ()=>onHandler(),
        size: "lg",
        modalClassName: "ht-modal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$offCanvas$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["OffCanvasCloseBtn"], {
                className: "btn-close",
                onClick: ()=>onHandler(),
                children: "x"
            }, void 0, false, {
                fileName: "[project]/src/components/product/card/quick-view.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["ModalBody"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                            md: 6,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$thumbnail$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                thumbnails: product?.images?.edges
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/card/quick-view.jsx",
                                lineNumber: 13,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/card/quick-view.jsx",
                            lineNumber: 12,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                            md: 6,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$details$2f$content$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/card/quick-view.jsx",
                                lineNumber: 17,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/card/quick-view.jsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/card/quick-view.jsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/product/card/quick-view.jsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/product/card/quick-view.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = QuickView;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/product/card/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__ = __turbopack_context__.i("[project]/src/hooks/useProduct.jsx [ssr] (ecmascript) <export default as useProduct>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$actions$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/card/actions.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/constant.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$thumbnail$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/card/thumbnail.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$add$2d$to$2d$cart$2d$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/card/add-to-cart-button.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$quick$2d$view$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/card/quick-view.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/card/product.style.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/product.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$actions$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$thumbnail$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$add$2d$to$2d$cart$2d$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$quick$2d$view$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$actions$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$thumbnail$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$add$2d$to$2d$cart$2d$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$quick$2d$view$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ProductCard = ({ product, className })=>{
    let { title, handle } = product;
    const { price, isStock, isDiscounted, compareAtPrice, isShowQuickView, onQuickViewHandler } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProduct$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useProduct$3e$__["useProduct"])(product);
    const percentage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getDiscountPercentage"])(price, compareAtPrice);
    console.log(percentage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Product"], {
                className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductThumb"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$thumbnail$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/card/index.jsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductBadges"], {
                                children: [
                                    isDiscounted && percentage > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        type: "sale",
                                        children: '-' + Math.round(percentage) + '%'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product/card/index.jsx",
                                        lineNumber: 46,
                                        columnNumber: 60
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isDiscounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        type: "winter",
                                        children: "Winter Sale"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product/card/index.jsx",
                                        lineNumber: 47,
                                        columnNumber: 42
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        type: "featured",
                                        children: "Stock out"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product/card/index.jsx",
                                        lineNumber: 48,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/product/card/index.jsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductActions"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$actions$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    product: product,
                                    onQuickViewHandler: onQuickViewHandler
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/card/index.jsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/card/index.jsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$add$2d$to$2d$cart$2d$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/card/index.jsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/card/index.jsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductMeta"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductTitle"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/product/${handle}`,
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/card/index.jsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/card/index.jsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductPrice"], {
                                children: isDiscounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("del", {
                                            className: "price old",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CURRENCY"] + compareAtPrice,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/product/card/index.jsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "price new",
                                            children: [
                                                product?.variants?.edges?.length > 1 ? 'From ' : '',
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CURRENCY"] + price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/product/card/index.jsx",
                                            lineNumber: 69,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "price new",
                                    children: [
                                        product?.variants?.edges?.length > 1 ? 'From ' : '',
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["CURRENCY"] + price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/product/card/index.jsx",
                                    lineNumber: 72,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/card/index.jsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/card/index.jsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$product$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ProductActionsMobile"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$actions$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            product: product,
                            onQuickViewHandler: onQuickViewHandler
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/card/index.jsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/card/index.jsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$add$2d$to$2d$cart$2d$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        product: product,
                        isShowInMobile: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/card/index.jsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/card/index.jsx",
                lineNumber: 42,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isShowQuickView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$quick$2d$view$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                product: product,
                isOpen: isShowQuickView,
                onHandler: onQuickViewHandler
            }, void 0, false, {
                fileName: "[project]/src/components/product/card/index.jsx",
                lineNumber: 91,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/product/card/index.jsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
ProductCard.propTypes = {
    product: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].object.isRequired,
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = ProductCard;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/product/feed/products-tab.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$loader$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/loader/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/card/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__ = __turbopack_context__.i("[externals]/swiper/react [external] (swiper/react, cjs, [project]/node_modules/swiper)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const ProductsTab = ({ products, limit = 8, className })=>{
    const settings = {
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: [
                !products && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$loader$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/product/feed/products-tab.jsx",
                    lineNumber: 33,
                    columnNumber: 33
                }, ("TURBOPACK compile-time value", void 0)),
                products && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "product-slider-wrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__["Swiper"], {
                        ...settings,
                        navigation: true,
                        pagination: false,
                        className: "product-slider",
                        children: products?.slice(0, limit)?.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__["SwiperSlide"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    product: product?.node
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/feed/products-tab.jsx",
                                    lineNumber: 45,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, product?.node?.id, false, {
                                fileName: "[project]/src/components/product/feed/products-tab.jsx",
                                lineNumber: 44,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/feed/products-tab.jsx",
                        lineNumber: 37,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/product/feed/products-tab.jsx",
                    lineNumber: 36,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/product/feed/products-tab.jsx",
            lineNumber: 30,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/product/feed/products-tab.jsx",
        lineNumber: 29,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
ProductsTab.propTypes = {
    products: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].array.isRequired
};
const __TURBOPACK__default__export__ = ProductsTab;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/product/feed/style.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductNav",
    ()=>ProductNav,
    "RelatedProductsWrapper",
    ()=>RelatedProductsWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__ = __turbopack_context__.i("[externals]/styled-system [external] (styled-system, cjs, [project]/node_modules/styled-system)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
;
const RelatedProductsWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].section`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
`;
const ProductNav = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  ${__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$system__$5b$external$5d$__$28$styled$2d$system$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$system$29$__["space"]}
  li {
    padding: 0;
    cursor: pointer;
    font-size: 18px;
    margin-right: 30px;
    vertical-align: top;
    display: inline-block;
    text-transform: capitalize;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.text')};
    transition: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('transition')};
    font-family: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fonts.body')};
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontWeights.subHeading')};
    
    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs}{
      margin-right: 10px;
      font-size: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('fontSizes.body')};
    }
    

    &:hover, &.react-tabs__tab--selected {
      color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }
  }

  ${({ align })=>align === "center" && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    text-align: center;
  `}
  ${({ align })=>align === "left" && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    text-align: left;
  `}
  ${({ align })=>align === "right" && __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["css"]`
    text-align: right;
  `}
`;
}),
"[project]/src/components/product/feed/related-products.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__ = __turbopack_context__.i("[externals]/classnames [external] (classnames, cjs, [project]/node_modules/classnames)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$loader$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/loader/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/empty/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/product.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/card/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/section-title/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/feed/style.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
const RelatedProducts = ({ products, categories, tags, limit, className, ...props })=>{
    const relatedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$product$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getRelatedProducts"])(categories, tags, products, limit);
    return relatedProducts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["RelatedProductsWrapper"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$classnames__$5b$external$5d$__$28$classnames$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$classnames$29$__["default"])(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        xs: 12,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            align: "left",
                            mb: [
                                27,
                                null,
                                47
                            ],
                            title: "Related Products"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/feed/related-products.jsx",
                            lineNumber: 23,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/feed/related-products.jsx",
                        lineNumber: 22,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/product/feed/related-products.jsx",
                    lineNumber: 21,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                !relatedProducts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$loader$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "mt-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/product/feed/related-products.jsx",
                    lineNumber: 31,
                    columnNumber: 44
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                    className: "products-grid-mobile mtn-30",
                    children: relatedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                            xs: 6,
                            md: 4,
                            lg: 3,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$card$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/feed/related-products.jsx",
                                lineNumber: 36,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, product?.id, false, {
                            fileName: "[project]/src/components/product/feed/related-products.jsx",
                            lineNumber: 35,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/product/feed/related-products.jsx",
                    lineNumber: 33,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/product/feed/related-products.jsx",
            lineNumber: 20,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/product/feed/related-products.jsx",
        lineNumber: 16,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "w-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$empty$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            message: "Related products not found!"
        }, void 0, false, {
            fileName: "[project]/src/components/product/feed/related-products.jsx",
            lineNumber: 44,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/product/feed/related-products.jsx",
        lineNumber: 43,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
};
RelatedProducts.defaultProps = {
    limit: 4
};
RelatedProducts.propTypes = {
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    tags: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].array.isRequired,
    products: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].array.isRequired,
    categories: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].array.isRequired
};
const __TURBOPACK__default__export__ = RelatedProducts;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/product/feed/index.jsx [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/feed/products-tab.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$related$2d$products$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/feed/related-products.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$related$2d$products$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$related$2d$products$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/product/feed/products-tab.jsx [ssr] (ecmascript) <export default as ProductsTab>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ProductsTab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/feed/products-tab.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/slider/slide/slide-one.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlideOne",
    ()=>SlideOne
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/slider/slider.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
const SlideOne = ({ subTitle, title, content, thumb })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideItem"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                className: "align-items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        xs: {
                            order: 1
                        },
                        sm: {
                            size: 7,
                            order: 0
                        },
                        xl: {
                            size: 6,
                            order: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideContent"], {
                            className: "slide-content",
                            children: [
                                subTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideSubTitle"], {
                                    children: subTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/slider/slide/slide-one.jsx",
                                    lineNumber: 13,
                                    columnNumber: 42
                                }, ("TURBOPACK compile-time value", void 0)),
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/slider/slide/slide-one.jsx",
                                    lineNumber: 14,
                                    columnNumber: 39
                                }, ("TURBOPACK compile-time value", void 0)),
                                content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: content
                                }, void 0, false, {
                                    fileName: "[project]/src/components/slider/slide/slide-one.jsx",
                                    lineNumber: 15,
                                    columnNumber: 41
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    tag: "a",
                                    href: "/shop",
                                    color: "white",
                                    bg: "primary",
                                    hvrBg: "black",
                                    hvrColor: "primary",
                                    className: "mt-4 mt-md-5",
                                    children: "Shop Now"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/slider/slide/slide-one.jsx",
                                    lineNumber: 16,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/slider/slide/slide-one.jsx",
                            lineNumber: 12,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/slider/slide/slide-one.jsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    thumb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        xs: {
                            order: 0
                        },
                        sm: {
                            size: 5,
                            order: 1
                        },
                        xl: {
                            size: 6,
                            order: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SliderThumb"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: thumb,
                                alt: title,
                                width: 540,
                                height: 458
                            }, void 0, false, {
                                fileName: "[project]/src/components/slider/slide/slide-one.jsx",
                                lineNumber: 33,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/slider/slide/slide-one.jsx",
                            lineNumber: 32,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/slider/slide/slide-one.jsx",
                        lineNumber: 31,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/slider/slide/slide-one.jsx",
                lineNumber: 10,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/slider/slide/slide-one.jsx",
            lineNumber: 9,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/slider/slide/slide-one.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
SlideOne.propTypes = {
    subTitle: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    title: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    content: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    thumb: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
;
}),
"[project]/src/components/slider/home-1.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/swiper/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__ = __turbopack_context__.i("[externals]/swiper/react [external] (swiper/react, cjs, [project]/node_modules/swiper) <export SwiperSlide as Slide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slide$2f$slide$2d$one$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/slider/slide/slide-one.jsx [ssr] (ecmascript)");
;
;
;
;
const SliderOne = ({ data, animate, settings, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        animate: animate,
        settings: settings,
        className: className,
        children: data.map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__["Slide"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slide$2f$slide$2d$one$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideOne"], {
                    title: slide.title,
                    thumb: slide.thumb,
                    content: slide.content,
                    subTitle: slide.subtitle
                }, void 0, false, {
                    fileName: "[project]/src/components/slider/home-1.jsx",
                    lineNumber: 14,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, slide.id, false, {
                fileName: "[project]/src/components/slider/home-1.jsx",
                lineNumber: 13,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/slider/home-1.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
SliderOne.propTypes = {
    data: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].array.isRequired,
    settings: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].shape({
        navigation: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
        pagination: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
        slidesPerView: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].number,
        spaceBetween: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].number,
        autoplay: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
        breakpoints: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].shape({})
    }),
    animate: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = SliderOne;
}),
"[project]/src/components/slider/slide/slide-two.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlideTwo",
    ()=>SlideTwo
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/slider/slider.style.jsx [ssr] (ecmascript)");
;
;
;
;
;
const SlideTwo = ({ subTitle, title, content, thumb })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideItem"], {
        children: [
            thumb && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SliderThumb"], {
                className: "style-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                    src: thumb,
                    alt: title
                }, void 0, false, {
                    fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                    lineNumber: 11,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                lineNumber: 10,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
                className: "align-self-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                    className: "justify-content-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        md: 8,
                        className: "m-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideContent"], {
                            mode: "light",
                            textAlign: "center",
                            children: [
                                subTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideSubTitle"], {
                                    children: subTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                                    lineNumber: 19,
                                    columnNumber: 42
                                }, ("TURBOPACK compile-time value", void 0)),
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                                    lineNumber: 20,
                                    columnNumber: 39
                                }, ("TURBOPACK compile-time value", void 0)),
                                content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: content
                                }, void 0, false, {
                                    fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                                    lineNumber: 21,
                                    columnNumber: 41
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        opacity: 0,
                                        animation: 'fadeInUp 0.8s ease forwards',
                                        animationDelay: '0.8s'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        tag: "a",
                                        href: "/shop",
                                        color: "white",
                                        bg: "primary",
                                        hvrBg: "black",
                                        hvrColor: "primary",
                                        className: "mt-4 mt-md-5",
                                        style: {
                                            padding: '14px 42px',
                                            fontSize: '13px',
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            fontWeight: 600,
                                            borderRadius: '0'
                                        },
                                        children: "Explore Collection"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                                        lineNumber: 23,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                                    lineNumber: 22,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                            lineNumber: 18,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slider$2e$style$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ScrollIndicator"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    children: "Scroll"
                }, void 0, false, {
                    fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/slider/slide/slide-two.jsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/slider/slide/slide-two.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
SlideTwo.propTypes = {
    subTitle: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    title: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    content: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string,
    thumb: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
;
}),
"[project]/src/components/slider/home-2.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__ = __turbopack_context__.i("[externals]/prop-types [external] (prop-types, cjs, [project]/node_modules/prop-types)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/swiper/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__ = __turbopack_context__.i("[externals]/swiper/react [external] (swiper/react, cjs, [project]/node_modules/swiper) <export SwiperSlide as Slide>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slide$2f$slide$2d$two$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/slider/slide/slide-two.jsx [ssr] (ecmascript)");
;
;
;
;
const SliderTwo = ({ data, animate, settings, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$swiper$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        animate: animate,
        settings: settings,
        className: className,
        children: data.map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$swiper$2f$react__$5b$external$5d$__$28$swiper$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$swiper$29$__$3c$export__SwiperSlide__as__Slide$3e$__["Slide"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$slide$2f$slide$2d$two$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SlideTwo"], {
                    title: slide.title,
                    thumb: slide.thumb,
                    content: slide.content,
                    subTitle: slide.subtitle
                }, void 0, false, {
                    fileName: "[project]/src/components/slider/home-2.jsx",
                    lineNumber: 14,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, slide.id, false, {
                fileName: "[project]/src/components/slider/home-2.jsx",
                lineNumber: 13,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/slider/home-2.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
SliderTwo.propTypes = {
    data: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].array.isRequired,
    settings: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].shape({
        navigation: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
        pagination: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
        slidesPerView: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].number,
        spaceBetween: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].number,
        autoplay: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
        breakpoints: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].shape({})
    }),
    animate: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].bool,
    className: __TURBOPACK__imported__module__$5b$externals$5d2f$prop$2d$types__$5b$external$5d$__$28$prop$2d$types$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$prop$2d$types$29$__["default"].string
};
const __TURBOPACK__default__export__ = SliderTwo;
}),
"[project]/src/components/slider/index.jsx [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$home$2d$1$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/slider/home-1.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$home$2d$2$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/slider/home-2.jsx [ssr] (ecmascript)");
;
;
;
}),
"[project]/src/components/slider/home-2.jsx [ssr] (ecmascript) <export default as SliderTwo>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderTwo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$home$2d$2$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$home$2d$2$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/slider/home-2.jsx [ssr] (ecmascript)");
}),
"[project]/src/components/features/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs, [project]/node_modules/styled-components)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.esm.js [ssr] (ecmascript)");
;
;
;
;
const float = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$styled$2d$components$29$__["keyframes"]`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;
const FeatureWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  background: #111;
  position: relative;
  z-index: 10;
  margin-top: -60px;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    margin-top: 0;
  }
`;
const FeatureInner = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  background: #fff;
  border-radius: 16px;
  padding: 10px 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 10;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    border-radius: 0;
    box-shadow: none;
    padding: 10px 0 0;
  }
`;
const FeatureItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  display: flex;
  align-items: center;
  padding: 32px 20px;
  transition: all 0.3s ease;
  border-radius: 12px;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 24px 15px;
  }

  &:hover {
    .feature-icon {
      animation: ${float} 2s ease infinite;
    }
  }
`;
const IconWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(135deg, ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')}, #ff4444);
  color: #fff;
  font-size: 26px;
  margin-right: 18px;
  flex-shrink: 0;
  box-shadow: 0 6px 20px rgba(212, 5, 17, 0.25);

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    margin-right: 0;
    margin-bottom: 14px;
  }
`;
const FeatureInfo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  h4 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 4px;
    color: #191919;
    letter-spacing: 0.3px;
  }
  p {
    margin: 0;
    font-size: 13px;
    color: #888;
    line-height: 1.5;
  }
`;
const Features = ()=>{
    const featureData = [
        {
            id: 1,
            title: "Free Delivery",
            content: "On all orders across the UK",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineTruck"], {}, void 0, false, {
                fileName: "[project]/src/components/features/index.jsx",
                lineNumber: 99,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: 2,
            title: "0% Finance",
            content: "Spread the cost easily",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineCreditCard"], {}, void 0, false, {
                fileName: "[project]/src/components/features/index.jsx",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: 3,
            title: "Crafted in UK",
            content: "Artisan quality guarantee",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineClock"], {}, void 0, false, {
                fileName: "[project]/src/components/features/index.jsx",
                lineNumber: 111,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            id: 4,
            title: "Secure Payment",
            content: "100% secure checkouts",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["HiOutlineShieldCheck"], {}, void 0, false, {
                fileName: "[project]/src/components/features/index.jsx",
                lineNumber: 117,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FeatureWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FeatureInner, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                    className: "justify-content-center align-items-center",
                    children: featureData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                            xs: 6,
                            sm: 6,
                            lg: 3,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FeatureItem, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(IconWrap, {
                                        className: "feature-icon",
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/index.jsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FeatureInfo, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/index.jsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                children: item.content
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/index.jsx",
                                                lineNumber: 132,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/index.jsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/index.jsx",
                                lineNumber: 128,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, item.id, false, {
                            fileName: "[project]/src/components/features/index.jsx",
                            lineNumber: 127,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/features/index.jsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/features/index.jsx",
                lineNumber: 124,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/features/index.jsx",
            lineNumber: 123,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/features/index.jsx",
        lineNumber: 122,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Features;
}),
"[project]/src/components/brand-showcase/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__ = __turbopack_context__.i("[externals]/@bootstrap-styled/v4 [external] (@bootstrap-styled/v4, cjs, [project]/node_modules/@bootstrap-styled/v4)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__ = __turbopack_context__.i("[externals]/@styled-system/theme-get [external] (@styled-system/theme-get, cjs, [project]/node_modules/@styled-system/theme-get)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button/index.jsx [ssr] (ecmascript)");
;
;
;
;
const ShowcaseWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].section`
  overflow: hidden;
  position: relative;
  background-color: #fafaeb; /* Subtle warm tone */
`;
const ContentCol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"])`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShowcaseContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  padding: 100px 0;
  max-width: 540px;
  
  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    padding: 60px 0;
    text-align: center;
    margin: 0 auto;
  }

  h5 {
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 20px;
    font-size: 13px;
    display: inline-block;
    position: relative;
    padding-left: 50px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      height: 2px;
      width: 40px;
      background: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    }

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
      padding-left: 0;
      &::before {
        display: none;
      }
    }
  }

  h2 {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 30px;
    line-height: 1.15;
    color: #191919;
    letter-spacing: -1px;

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].lg} {
      font-size: 42px;
    }

    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
      font-size: 36px;
    }
  }

  p {
    font-size: 17px;
    line-height: 1.8;
    color: #666;
    margin-bottom: 45px;
    
    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
      margin: 0 auto 35px;
    }
  }
`;
const ImageContainer = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: relative;
  height: 100%;
  min-height: 600px;
  width: 100%;
  
  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    min-height: 400px;
    margin-top: 40px;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].sm} {
    min-height: 300px;
  }
`;
const ImageWrap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: -20px 0 60px rgba(0,0,0,0.1);
    
    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
      box-shadow: none;
      border-radius: 12px;
    }
  }
`;
const FloatingCard = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  position: absolute;
  bottom: 80px;
  left: -60px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  max-width: 280px;
  z-index: 2;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].lg} {
    left: -30px;
    bottom: 50px;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
    display: none;
  }

  h4 {
    font-size: 42px;
    color: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f40$styled$2d$system$2f$theme$2d$get__$5b$external$5d$__$2840$styled$2d$system$2f$theme$2d$get$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$29$__["themeGet"])('colors.primary')};
    font-weight: 800;
    line-height: 1;
    margin-bottom: 5px;
  }

  span {
    font-size: 14px;
    color: #555;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
const BrandShowcase = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ShowcaseWrap, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
            fluid: true,
            className: "p-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Row"], {
                className: "g-0 align-items-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ContentCol, {
                        lg: 6,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Container"], {
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ShowcaseContent, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                                            children: "Our Craftsmanship"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/brand-showcase/index.jsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            children: "Designed for Life, Built to Last."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/brand-showcase/index.jsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: "Every Birmingham Kitchen & Bedroom is a masterpiece of British engineering. We combine traditional artisan techniques with modern innovation to create spaces that are as functional as they are beautiful. Experience the difference of bespoke design tailored perfectly to your home."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/brand-showcase/index.jsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            tag: "a",
                                            href: "/about",
                                            color: "white",
                                            bg: "primary",
                                            hvrBg: "black",
                                            hvrColor: "white",
                                            className: "px-5 py-3",
                                            style: {
                                                borderRadius: '0',
                                                letterSpacing: '2px',
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                textTransform: 'uppercase'
                                            },
                                            children: "Discover Our Story"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/brand-showcase/index.jsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/brand-showcase/index.jsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/brand-showcase/index.jsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/brand-showcase/index.jsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$bootstrap$2d$styled$2f$v4__$5b$external$5d$__$2840$bootstrap$2d$styled$2f$v4$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$29$__["Col"], {
                        lg: 6,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImageContainer, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImageWrap, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
                                        alt: "Modern Kitchen Showcase"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/brand-showcase/index.jsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/brand-showcase/index.jsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FloatingCard, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                            children: "25+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/brand-showcase/index.jsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "Years of Excellence in British Design"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/brand-showcase/index.jsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/brand-showcase/index.jsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/brand-showcase/index.jsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/brand-showcase/index.jsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/brand-showcase/index.jsx",
                lineNumber: 162,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/brand-showcase/index.jsx",
            lineNumber: 161,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/brand-showcase/index.jsx",
        lineNumber: 160,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BrandShowcase;
}),
"[project]/src/graphql/query/blogs.js [ssr] (ecmascript) <export default as blogsQuery>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogsQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$blogs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$blogs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/blogs.js [ssr] (ecmascript)");
}),
"[project]/src/graphql/query/products.js [ssr] (ecmascript) <export default as productsQuery>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "productsQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$products$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$products$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/products.js [ssr] (ecmascript)");
}),
"[project]/src/graphql/query/collections.js [ssr] (ecmascript) <export default as collectionsQuery>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectionsQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$collections$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$collections$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/query/collections.js [ssr] (ecmascript)");
}),
"[project]/src/pages/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$settings$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/settings.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$posts$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blog/posts/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promotions$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/promotions/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$categories$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/categories/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$slider$2f$home$2d$2$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/slider/home-2.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/categories.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/product/feed/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProductsTab$3e$__ = __turbopack_context__.i("[project]/src/components/product/feed/products-tab.jsx [ssr] (ecmascript) <export default as ProductsTab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/slider/index.jsx [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$home$2d$2$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SliderTwo$3e$__ = __turbopack_context__.i("[project]/src/components/slider/home-2.jsx [ssr] (ecmascript) <export default as SliderTwo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$showcase$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand-showcase/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/section-title/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/graphql/index.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$client$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__client$3e$__ = __turbopack_context__.i("[project]/src/graphql/client.js [ssr] (ecmascript) <export default as client>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$blogs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__blogsQuery$3e$__ = __turbopack_context__.i("[project]/src/graphql/query/blogs.js [ssr] (ecmascript) <export default as blogsQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$products$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__productsQuery$3e$__ = __turbopack_context__.i("[project]/src/graphql/query/products.js [ssr] (ecmascript) <export default as productsQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$collections$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__collectionsQuery$3e$__ = __turbopack_context__.i("[project]/src/graphql/query/collections.js [ssr] (ecmascript) <export default as collectionsQuery>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$categories$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProductsTab$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$categories$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProductsTab$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const HomeTwo = ({ blogs, products, collections })=>{
    const displayCollections = collections?.length > 0 ? collections : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$json__$28$json$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        bg: "#fcfcfc",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Birmingham Kitchen & Bedroom | Bespoke Design"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$settings$2e$json__$28$json$29$__["default"]?.description
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 20,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slider$2f$home$2d$2$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SliderTwo$3e$__["SliderTwo"], {
                animate: true,
                data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$slider$2f$home$2d$2$2e$json__$28$json$29$__["default"],
                settings: {
                    effect: "fade",
                    speed: 1000,
                    autoplay: {
                        delay: 6000,
                        disableOnInteraction: false
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 25,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "collection-section py-5 my-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Curated Collections",
                        content: "Explore our signature ranges, designed to bring elegance and functionality to every corner of your home."
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$categories$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        categories: displayCollections,
                        pt: 0,
                        pb: 60
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 40,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2d$showcase$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "products-section py-5 my-5 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Best Sellers",
                        content: "Discover the pieces our customers love most. Timeless quality meets modern design."
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$feed$2f$products$2d$tab$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProductsTab$3e$__["ProductsTab"], {
                        products: products,
                        limit: 8
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-center mt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            href: "/shop",
                            style: {
                                textDecoration: 'underline',
                                color: '#333',
                                fontWeight: 600,
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                fontSize: '13px'
                            },
                            children: "View All Products"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/index.jsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "my-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$promotions$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    fluid: true
                }, void 0, false, {
                    fileName: "[project]/src/pages/index.jsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 63,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "blog-section py-5 my-5 bg-light",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$section$2d$title$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Design Journal",
                        content: "Inspiration, tips, and stories from the world of bespoke interiors."
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$posts$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        posts: blogs,
                        pt: 0,
                        pb: 80
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/index.jsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const getStaticProps = async ()=>{
    const blogsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$client$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__client$3e$__["client"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$blogs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__blogsQuery$3e$__["blogsQuery"])(4)), blogs = blogsData?.blogs?.edges[0]?.node?.articles?.edges, productsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$client$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__client$3e$__["client"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$products$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__productsQuery$3e$__["productsQuery"])(50)), products = productsData?.products?.edges, collectionsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$client$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__client$3e$__["client"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$query$2f$collections$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__collectionsQuery$3e$__["collectionsQuery"])(5)), collections = collectionsData?.collections?.edges;
    return {
        props: {
            blogs,
            products,
            collections
        },
        revalidate: 60
    };
};
const __TURBOPACK__default__export__ = HomeTwo;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bc99afef._.js.map