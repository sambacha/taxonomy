"use strict";
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 67349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ proPlan),
/* harmony export */   "R": () => (/* binding */ freePlan)
/* harmony export */ });
const freePlan = {
    name: "Free",
    description: "The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.",
    stripePriceId: null
};
const proPlan = {
    name: "PRO",
    description: "The PRO plan has unlimited posts.",
    stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID
};


/***/ }),

/***/ 55271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ withMethods)
/* harmony export */ });
function withMethods(methods, handler) {
    return async function(req, res) {
        if (!methods.includes(req.method)) {
            return res.status(405).end();
        }
        return handler(req, res);
    };
}


/***/ }),

/***/ 15382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getUserSubscriptionPlan)
/* harmony export */ });
/* harmony import */ var _config_subscriptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67349);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54572);


async function getUserSubscriptionPlan(userId) {
    const user = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findFirst({
        where: {
            id: userId
        },
        select: {
            stripeSubscriptionId: true,
            stripeCurrentPeriodEnd: true,
            stripeCustomerId: true,
            stripePriceId: true
        }
    });
    // Check if user is on a pro plan.
    const isPro = user.stripePriceId && user.stripeCurrentPeriodEnd?.getTime() + 86400000 > Date.now();
    const plan = isPro ? _config_subscriptions__WEBPACK_IMPORTED_MODULE_0__/* .proPlan */ .H : _config_subscriptions__WEBPACK_IMPORTED_MODULE_0__/* .freePlan */ .R;
    return {
        ...plan,
        ...user,
        stripeCurrentPeriodEnd: user.stripeCurrentPeriodEnd?.getTime(),
        isPro
    };
}


/***/ })

};
;