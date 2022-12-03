"use strict";
exports.id = 2278;
exports.ids = [2278];
exports.modules = {

/***/ 17691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82327);
/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9097);
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45158);
/* harmony import */ var postmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3780);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46214);





const postmarkClient = new postmark__WEBPACK_IMPORTED_MODULE_3__/* .Client */ .KU(process.env.POSTMARK_API_TOKEN);
const POSTMARK_SIGN_IN_TEMPLATE = parseInt(process.env.POSTMARK_SIGN_IN_TEMPLATE);
const POSTMARK_ACTIVATION_TEMPLATE = parseInt(process.env.POSTMARK_ACTIVATION_TEMPLATE);
const authOptions = {
    // huh any! I know.
    // This is a temporary fix for prisma client.
    // @see https://github.com/prisma/prisma/issues/16117
    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__/* .PrismaAdapter */ .N)(_lib_db__WEBPACK_IMPORTED_MODULE_4__.db),
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login"
    },
    providers: [
        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        (0,next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
            server: {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD
                }
            },
            from: process.env.SMTP_FROM,
            sendVerificationRequest: async ({ identifier , url , provider  })=>{
                const user = await _lib_db__WEBPACK_IMPORTED_MODULE_4__.db.user.findUnique({
                    where: {
                        email: identifier
                    },
                    select: {
                        emailVerified: true
                    }
                });
                const result = await postmarkClient.sendEmailWithTemplate({
                    TemplateId: user?.emailVerified ? POSTMARK_SIGN_IN_TEMPLATE : POSTMARK_ACTIVATION_TEMPLATE,
                    To: identifier,
                    From: provider.from,
                    TemplateModel: {
                        action_url: url,
                        product_name: "Taxonomy"
                    },
                    Headers: [
                        {
                            // Set this to prevent Gmail from threading emails.
                            // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
                            Name: "X-Entity-Ref-ID",
                            Value: new Date().getTime() + ""
                        }
                    ]
                });
                if (result.ErrorCode) {
                    throw new Error(result.Message);
                }
            }
        })
    ],
    callbacks: {
        async session ({ token , session  }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
            }
            return session;
        },
        async jwt ({ token , user  }) {
            const dbUser = await _lib_db__WEBPACK_IMPORTED_MODULE_4__.db.user.findFirst({
                where: {
                    email: token.email
                }
            });
            if (!dbUser) {
                token.id = user.id;
                return token;
            }
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image
            };
        }
    }
};


/***/ }),

/***/ 46214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
const db = prisma;


/***/ }),

/***/ 63658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getCurrentUser)
/* harmony export */ });
/* unused harmony export getSession */
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62660);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17691);


async function getSession() {
    return await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__/* .unstable_getServerSession */ .NP)(_lib_auth__WEBPACK_IMPORTED_MODULE_1__/* .authOptions */ .L);
}
async function getCurrentUser() {
    const session = await getSession();
    return session?.user;
}


/***/ }),

/***/ 62350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64880);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19679);


function Skeleton({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("h-5 w-2/5 animate-pulse rounded-lg bg-slate-100", className),
        ...props
    });
}


/***/ })

};
;