exports.id = 8360;
exports.ids = [8360];
exports.modules = {

/***/ 27450:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useSearchParams = useSearchParams;
exports.usePathname = usePathname;
Object.defineProperty(exports, "ServerInsertedHTMLContext", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.ServerInsertedHTMLContext;
    }
}));
Object.defineProperty(exports, "useServerInsertedHTML", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.useServerInsertedHTML;
    }
}));
exports.useRouter = useRouter;
exports.useSelectedLayoutSegments = useSelectedLayoutSegments;
exports.useSelectedLayoutSegment = useSelectedLayoutSegment;
Object.defineProperty(exports, "redirect", ({
    enumerable: true,
    get: function() {
        return _redirect.redirect;
    }
}));
Object.defineProperty(exports, "notFound", ({
    enumerable: true,
    get: function() {
        return _notFound.notFound;
    }
}));
var _react = __webpack_require__(3835);
var _appRouterContext = __webpack_require__(92584);
var _hooksClientContext = __webpack_require__(373);
var _staticGenerationBailout = __webpack_require__(342);
var _serverInsertedHtml = __webpack_require__(90878);
var _redirect = __webpack_require__(26945);
var _notFound = __webpack_require__(59332);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        // Since `new Headers` uses `this.append()` to fill the headers object ReadonlyHeaders can't extend from Headers directly as it would throw.
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
function useSearchParams() {
    (0, _staticGenerationBailout).staticGenerationBailout("useSearchParams");
    const searchParams = (0, _react).useContext(_hooksClientContext.SearchParamsContext);
    if (!searchParams) {
        throw new Error("invariant expected search params to be mounted");
    }
    const readonlySearchParams = (0, _react).useMemo(()=>{
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    return readonlySearchParams;
}
function usePathname() {
    return (0, _react).useContext(_hooksClientContext.PathnameContext);
}
function useRouter() {
    const router = (0, _react).useContext(_appRouterContext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// TODO-APP: handle parallel routes
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _children;
        node = (_children = parallelRoutes.children) != null ? _children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = Array.isArray(segment) ? segment[1] : segment;
    if (!segmentValue) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey = "children") {
    const { tree  } = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = "children") {
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 59332:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.notFound = notFound;
exports.NOT_FOUND_ERROR_CODE = void 0;
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
exports.NOT_FOUND_ERROR_CODE = NOT_FOUND_ERROR_CODE;
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 26945:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.redirect = redirect;
exports.REDIRECT_ERROR_CODE = void 0;
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
exports.REDIRECT_ERROR_CODE = REDIRECT_ERROR_CODE;
function redirect(url) {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + url;
    throw error;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 342:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.staticGenerationBailout = staticGenerationBailout;
var _hooksServerContext = __webpack_require__(59913);
var _staticGenerationAsyncStorage = __webpack_require__(93863);
function staticGenerationBailout(reason) {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage && "getStore" in _staticGenerationAsyncStorage.staticGenerationAsyncStorage ? _staticGenerationAsyncStorage.staticGenerationAsyncStorage == null ? void 0 : _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore() : _staticGenerationAsyncStorage.staticGenerationAsyncStorage;
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        // TODO: honor the dynamic: 'force-static'
        if (staticGenerationStore) {
            staticGenerationStore.fetchRevalidate = 0;
        }
        throw new _hooksServerContext.DynamicServerError(reason);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map


/***/ }),

/***/ 92584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(29960);
module.exports = createProxy("/Users/sbacha/taxonomy/node_modules/.pnpm/next@13.0.4_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.js");
 //# sourceMappingURL=app-router-context.js.map


/***/ }),

/***/ 373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(29960);
module.exports = createProxy("/Users/sbacha/taxonomy/node_modules/.pnpm/next@13.0.4_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/hooks-client-context.js");
 //# sourceMappingURL=hooks-client-context.js.map


/***/ }),

/***/ 90878:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(29960);
module.exports = createProxy("/Users/sbacha/taxonomy/node_modules/.pnpm/next@13.0.4_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.js");
 //# sourceMappingURL=server-inserted-html.js.map


/***/ }),

/***/ 96131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(27450);


/***/ }),

/***/ 61504:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(42648)


/***/ })

};
;