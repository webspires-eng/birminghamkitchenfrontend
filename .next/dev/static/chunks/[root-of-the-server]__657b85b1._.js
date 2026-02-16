(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/src/styled/bootstrap.jsx [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$provider$2f$dist$2f40$bootstrap$2d$styled$2f$provider$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@bootstrap-styled/provider/dist/@bootstrap-styled/provider.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$v4$2f$dist$2f40$bootstrap$2d$styled$2f$v4$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@bootstrap-styled/v4/dist/@bootstrap-styled/v4.esm.js [client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bootstrap$2d$styled$2f$provider$2f$dist$2f40$bootstrap$2d$styled$2f$provider$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/styled/theme.jsx [client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/styled/index.jsx [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "devices",
    ()=>devices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$theme$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styled/theme.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@styled-system/theme-get/dist/index.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$system$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/styled-system/dist/index.esm.js [client] (ecmascript) <locals>");
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
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/constant.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CURRENCY",
    ()=>CURRENCY,
    "PREFIX",
    ()=>PREFIX,
    "placeholder",
    ()=>placeholder,
    "previewModeNotification",
    ()=>previewModeNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [client] (ecmascript)");
;
const PREFIX = "ht";
const CURRENCY = "£";
const placeholder = "https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_380x.gif";
const previewModeNotification = (e)=>{
    e.preventDefault();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error("On Demo Mode this functionality is disabled!");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/global/slices/cartSlice.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "cartSlice",
    ()=>cartSlice,
    "clear",
    ()=>clear,
    "decrement",
    ()=>decrement,
    "default",
    ()=>__TURBOPACK__default__export__,
    "increment",
    ()=>increment,
    "removeCart",
    ()=>removeCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/v4.js [client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [client] (ecmascript) <locals>");
;
;
const cartSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'shoppingCart',
    initialState: [],
    reducers: {
        addToCart: (state, action)=>{
            const product = action.payload;
            const productInCart = state.find((item)=>item.id === product.id && item.variations.title === product.variations.title);
            if (productInCart) {
                const cartProductIndex = state.findIndex((item)=>item.id === product.id);
                state[cartProductIndex].quantity = state[cartProductIndex].quantity + product.quantity;
            } else {
                product['cartId'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                return [
                    product,
                    ...state
                ];
            }
        },
        removeCart: (state, action)=>{
            const product = action.payload;
            return state.filter((item)=>item.cartId !== product.cartId);
        },
        increment: (state, action)=>{
            const product = action.payload;
            const isIncrementProduct = state.find((item)=>item?.cartId === product?.cartId);
            if (isIncrementProduct) {
                const incrementProductIndex = state.findIndex((item)=>item.cartId === product.cartId);
                state[incrementProductIndex].quantity += 1;
                return state;
            } else {
                return state;
            }
        },
        decrement: (state, action)=>{
            const product = action.payload;
            const isDecrementProduct = state.find((item)=>item.cartId === product.cartId);
            if (isDecrementProduct) {
                const decrementProductIndex = state.findIndex((item)=>item.cartId === product.cartId);
                state[decrementProductIndex].quantity -= 1;
                return state;
            } else {
                return state;
            }
        },
        clear: ()=>{
            return [];
        }
    }
});
const { reducer, actions } = cartSlice;
const { addToCart, removeCart, increment, decrement, clear } = actions;
const __TURBOPACK__default__export__ = reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/global/slices/compareSlice.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCompare",
    ()=>addToCompare,
    "compareSlice",
    ()=>compareSlice,
    "default",
    ()=>__TURBOPACK__default__export__,
    "removeCompare",
    ()=>removeCompare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [client] (ecmascript) <locals>");
;
const compareSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'compareList',
    initialState: [],
    reducers: {
        addToCompare: (state, action)=>{
            const product = action.payload;
            const productInCompareList = state.find(({ id })=>id === product.id);
            if (productInCompareList) {
                return state;
            } else {
                return [
                    product,
                    ...state
                ];
            }
        },
        removeCompare: (state, action)=>{
            const product = action.payload;
            return state.filter((item)=>item.id !== product.id);
        }
    }
});
const { reducer, actions } = compareSlice;
const { addToCompare, removeCompare } = actions;
const __TURBOPACK__default__export__ = reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/global/slices/customerSlice.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "customerSlice",
    ()=>customerSlice,
    "default",
    ()=>__TURBOPACK__default__export__,
    "saveData",
    ()=>saveData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [client] (ecmascript) <locals>");
;
const customerSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "customer",
    initialState: {},
    reducers: {
        saveData: (state, action)=>{
            state = {
                ...action.payload
            };
            return state;
        }
    }
});
const { reducer, actions } = customerSlice;
const { saveData } = actions;
const __TURBOPACK__default__export__ = reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/global/slices/wishlistSlice.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToWishlist",
    ()=>addToWishlist,
    "default",
    ()=>__TURBOPACK__default__export__,
    "removeWishlist",
    ()=>removeWishlist,
    "wishlistSlice",
    ()=>wishlistSlice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [client] (ecmascript) <locals>");
;
const wishlistSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishlist: (state, action)=>{
            const product = action.payload;
            const productInWishlist = state.find(({ id })=>id === product.id);
            if (productInWishlist) {
                return state;
            } else {
                return [
                    product,
                    ...state
                ];
            }
        },
        removeWishlist: (state, action)=>{
            const product = action.payload;
            return state.filter((item)=>item.id !== product.id);
        }
    }
});
const { reducer, actions } = wishlistSlice;
const { addToWishlist, removeWishlist } = actions;
const __TURBOPACK__default__export__ = reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/global/rootReducers.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rootReducer",
    ()=>rootReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$cartSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/slices/cartSlice.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$es$2f$redux$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux/es/redux.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$compareSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/slices/compareSlice.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$customerSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/slices/customerSlice.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$wishlistSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/slices/wishlistSlice.js [client] (ecmascript)");
;
;
;
;
;
const rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2f$es$2f$redux$2e$js__$5b$client$5d$__$28$ecmascript$29$__["combineReducers"])({
    shoppingCart: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$cartSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    wishlist: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$wishlistSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    customer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$customerSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    compareList: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$slices$2f$compareSlice$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/global/store.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "persistor",
    ()=>persistor,
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/constant.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$rootReducers$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/rootReducers.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/lib/storage/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistReducer.js [client] (ecmascript) <export default as persistReducer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/persistStore.js [client] (ecmascript) <export default as persistStore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [client] (ecmascript) <locals>");
;
;
;
;
;
const persistConfig = {
    key: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constant$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PREFIX"]}-furns`,
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
};
const persistedReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistReducer$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistReducer$3e$__["persistReducer"])(persistConfig, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$rootReducers$2e$js__$5b$client$5d$__$28$ecmascript$29$__["rootReducer"]);
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'persist/PERSIST'
                ]
            }
        }),
    devTools: ("TURBOPACK compile-time value", "development") !== 'production'
});
const persistor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__["persistStore"])(store);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/css/global.style.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorPage",
    ()=>ErrorPage,
    "GlobalStyle",
    ()=>GlobalStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@styled-system/theme-get/dist/index.esm.js [client] (ecmascript)");
;
const GlobalStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createGlobalStyle"]`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-style: normal;
    position: relative;
    visibility: visible;
    color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("colors.text")};
    font-family: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fonts.body")};
    font-size: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fontSizes.body")};
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fontWeights.body")};
    line-height: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("lineHeights.body")};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &[dir="rtl"] {
      text-align: right;
    }
  }

  strong {
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])('fontWeights.heading')};
  }

  img {
    display: block;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("colors.heading")};
    font-family: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fonts.heading")};
  }

  a,
  button {
    border: 0;
    text-decoration: none;
    background-color: transparent;
    transition: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("transition")};
  }

  a {
    &:hover {
      color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])('colors.primary')};
    }
  }

  button {
    cursor: pointer;
    box-shadow: none;
    outline: 0;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #999;
  }

  /* Hero Slider - Force proper height */
  .hero-slider-one {
    &.swiper-container,
    &.swiper {
      height: 600px;
    }

    .swiper-wrapper {
      height: 100%;
    }

    .swiper-slide {
      height: 100% !important;
    }

    .swiper-pagination {
        display: none !important;
    }
  }

  /* FadeInUp animation for slide CTA */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  textarea {
    width: 100%;
    padding-left: 20px;
    padding-top: 20px;
    outline: 0;
  }

  .form-control {
    &.furns-form-control {
      min-height: 50px;
      padding: 6px 80px 6px 20px;
      font-family: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fonts.body")};
      font-weight: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fontWeights.body")};
      line-height: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("lineHeights.body")};
      color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("colors.text")};
      border-radius: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("radii.sm")};

      &:focus {
        border-color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])('colors.primary')};
      }
    }
  }

  label {
    margin-bottom: 15px;
  }

  p {
    color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("colors.text")};
    font-family: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fonts.body")};

    &:last-child {
      margin-bottom: 0;
    }
  }

  input:focus,
  button:focus {
    outline: 0;
    box-shadow: none;
  }

  .mtn-30 {
    margin-top: -30px;
  }

  .products-grid-mobile {
    &.row {
      ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].xs} {
        margin-left: -5px;
        margin-right: -5px;

        [class*='col'] {
          padding-left: 5px;
          padding-right: 5px;
        }
      }
    }
  }

  .ct-heading {
    font-size: 12px;
  }

  .overflow {
    overflow: hidden;
  }

  .modal {
    text-align: center;

    &:before {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }

    &-dialog {
      display: inline-block;
      vertical-align: middle;
    }

    &-lg {
      max-width: 85%;
    }

    &-body {
      overflow: hidden;
      text-align: left;

      ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["devices"].md} {
        overflow-y: auto;
        max-height: 80vh;
      }
    }

    &.ht-modal {
      .modal {
        &-content {
          border: none;
          border-radius: 0;
        }

        &-lg {
          @media (min-width: 768px) {
            max-width: 750px;
          }
          @media (min-width: 992px) {
            max-width: 960px;
          }
        }

        &-body {
          padding-top: 30px;
          padding-bottom: 30px;
        }
      }
    }

    .btn-close {
      top: -10px;
      right: -10px;
      width: 25px;
      height: 25px;
      z-index: 99;
      position: absolute;
      border-radius: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])('radii.circle')};
      background-color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])('colors.primary')};

      &:before, &:after {
        left: 7px;
        width: 12px;
        background-color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])('colors.white')};
      }
    }
  }


  .about-page-wrapper {
    h2 {
      font-size: 32px;
      font-weight: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fontWeights.heading")};
    }

    h4 {
      font-size: 20px;
      margin-bottom: 15px;
      font-weight: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fontWeights.subHeading")};
    }

    .about-store {
      line-height: 2;
      font-size: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fontSizes.standard")};
    }
  }

  /* Selection color */
  ::selection {
    background: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])('colors.primary')};
    color: #fff;
  }
`;
const ErrorPage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].div`
  height: 100vh;
  width: 100vw;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 32px;
    margin: 20px 0 10px;
    font-family: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fonts.body")};
    font-weight: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$styled$2d$system$2f$theme$2d$get$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["themeGet"])("fontWeights.heading")};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/_app.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/es/exports.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/bootstrap.jsx [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styled/index.jsx [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$theme$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styled/theme.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$store$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/global/store.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$global$2e$style$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/css/global.style.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/redux-persist/es/integration/react.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [client] (ecmascript)");
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
;
;
;
;
;
;
;
// Customize Bootstrap
const themeBootstrap = {
    "$container-max-widths": {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1280px"
    }
};
const FurnsAPP = ({ Component, pageProps })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Birmingham Kitchens & Bedrooms | Premium Bespoke Design"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Premium bespoke kitchens and bedrooms designed and crafted in Birmingham, UK."
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/_app.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$theme$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["theme"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styled$2f$bootstrap$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    theme: themeBootstrap,
                    reset: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$css$2f$global$2e$style$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["GlobalStyle"], {}, void 0, false, {
                            fileName: "[project]/src/pages/_app.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$exports$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Provider"], {
                            store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$store$2e$js__$5b$client$5d$__$28$ecmascript$29$__["store"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PersistGate"], {
                                loading: null,
                                persistor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$global$2f$store$2e$js__$5b$client$5d$__$28$ecmascript$29$__["persistor"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Toaster"], {
                                        position: "top-right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/_app.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
                                        ...pageProps
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/_app.jsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/_app.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_app.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/_app.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/_app.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FurnsAPP;
const __TURBOPACK__default__export__ = FurnsAPP;
var _c;
__turbopack_context__.k.register(_c, "FurnsAPP");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/_app.jsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/_app";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/src/pages/_app.jsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/src/pages/_app\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/_app.jsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__657b85b1._.js.map