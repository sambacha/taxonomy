"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "postmark":
/*!***************************!*\
  !*** external "postmark" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("postmark");

/***/ }),

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var postmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! postmark */ \"postmark\");\n/* harmony import */ var postmark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(postmark__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.ts\");\n\n\n\n\n\nconst postmarkClient = new postmark__WEBPACK_IMPORTED_MODULE_3__.Client(process.env.POSTMARK_API_TOKEN);\nconst POSTMARK_SIGN_IN_TEMPLATE = parseInt(process.env.POSTMARK_SIGN_IN_TEMPLATE);\nconst POSTMARK_ACTIVATION_TEMPLATE = parseInt(process.env.POSTMARK_ACTIVATION_TEMPLATE);\nconst authOptions = {\n    // huh any! I know.\n    // This is a temporary fix for prisma client.\n    // @see https://github.com/prisma/prisma/issues/16117\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_4__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET\n        }),\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default()({\n            server: {\n                host: process.env.SMTP_HOST,\n                port: Number(process.env.SMTP_PORT),\n                auth: {\n                    user: process.env.SMTP_USER,\n                    pass: process.env.SMTP_PASSWORD\n                }\n            },\n            from: process.env.SMTP_FROM,\n            sendVerificationRequest: async ({ identifier , url , provider  })=>{\n                const user = await _lib_db__WEBPACK_IMPORTED_MODULE_4__.db.user.findUnique({\n                    where: {\n                        email: identifier\n                    },\n                    select: {\n                        emailVerified: true\n                    }\n                });\n                const result = await postmarkClient.sendEmailWithTemplate({\n                    TemplateId: user?.emailVerified ? POSTMARK_SIGN_IN_TEMPLATE : POSTMARK_ACTIVATION_TEMPLATE,\n                    To: identifier,\n                    From: provider.from,\n                    TemplateModel: {\n                        action_url: url,\n                        product_name: \"Taxonomy\"\n                    },\n                    Headers: [\n                        {\n                            // Set this to prevent Gmail from threading emails.\n                            // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.\n                            Name: \"X-Entity-Ref-ID\",\n                            Value: new Date().getTime() + \"\"\n                        }\n                    ]\n                });\n                if (result.ErrorCode) {\n                    throw new Error(result.Message);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ token , session  }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.image = token.picture;\n            }\n            return session;\n        },\n        async jwt ({ token , user  }) {\n            const dbUser = await _lib_db__WEBPACK_IMPORTED_MODULE_4__.db.user.findFirst({\n                where: {\n                    email: token.email\n                }\n            });\n            if (!dbUser) {\n                token.id = user.id;\n                return token;\n            }\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image\n            };\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxHQUFHakMsS0FBS2lDLEVBQUU7Z0JBQ2xCLE9BQU9EO1lBQ1QsQ0FBQztZQUVELE9BQU87Z0JBQ0xDLElBQUlLLE9BQU9MLEVBQUU7Z0JBQ2JDLE1BQU1JLE9BQU9KLElBQUk7Z0JBQ2pCdEIsT0FBTzBCLE9BQU8xQixLQUFLO2dCQUNuQndCLFNBQVNFLE9BQU9ILEtBQUs7WUFDdkI7UUFDRjtJQUNGO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RheG9ub215Ly4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBHaXRIdWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxuaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZW1haWxcIlxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCJwb3N0bWFya1wiXG5cbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL2RiXCJcblxuY29uc3QgcG9zdG1hcmtDbGllbnQgPSBuZXcgQ2xpZW50KHByb2Nlc3MuZW52LlBPU1RNQVJLX0FQSV9UT0tFTilcblxuY29uc3QgUE9TVE1BUktfU0lHTl9JTl9URU1QTEFURSA9IHBhcnNlSW50KFxuICBwcm9jZXNzLmVudi5QT1NUTUFSS19TSUdOX0lOX1RFTVBMQVRFXG4pXG5jb25zdCBQT1NUTUFSS19BQ1RJVkFUSU9OX1RFTVBMQVRFID0gcGFyc2VJbnQoXG4gIHByb2Nlc3MuZW52LlBPU1RNQVJLX0FDVElWQVRJT05fVEVNUExBVEVcbilcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIC8vIGh1aCBhbnkhIEkga25vdy5cbiAgLy8gVGhpcyBpcyBhIHRlbXBvcmFyeSBmaXggZm9yIHByaXNtYSBjbGllbnQuXG4gIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvaXNzdWVzLzE2MTE3XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoZGIgYXMgYW55KSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIEVtYWlsUHJvdmlkZXIoe1xuICAgICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LlNNVFBfSE9TVCxcbiAgICAgICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LlNNVFBfUE9SVCksXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5TTVRQX1VTRVIsXG4gICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuU01UUF9QQVNTV09SRCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5TTVRQX0ZST00sXG4gICAgICBzZW5kVmVyaWZpY2F0aW9uUmVxdWVzdDogYXN5bmMgKHsgaWRlbnRpZmllciwgdXJsLCBwcm92aWRlciB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBlbWFpbDogaWRlbnRpZmllcixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgZW1haWxWZXJpZmllZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvc3RtYXJrQ2xpZW50LnNlbmRFbWFpbFdpdGhUZW1wbGF0ZSh7XG4gICAgICAgICAgVGVtcGxhdGVJZDogdXNlcj8uZW1haWxWZXJpZmllZFxuICAgICAgICAgICAgPyBQT1NUTUFSS19TSUdOX0lOX1RFTVBMQVRFXG4gICAgICAgICAgICA6IFBPU1RNQVJLX0FDVElWQVRJT05fVEVNUExBVEUsXG4gICAgICAgICAgVG86IGlkZW50aWZpZXIsXG4gICAgICAgICAgRnJvbTogcHJvdmlkZXIuZnJvbSxcbiAgICAgICAgICBUZW1wbGF0ZU1vZGVsOiB7XG4gICAgICAgICAgICBhY3Rpb25fdXJsOiB1cmwsXG4gICAgICAgICAgICBwcm9kdWN0X25hbWU6IFwiVGF4b25vbXlcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIEhlYWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gU2V0IHRoaXMgdG8gcHJldmVudCBHbWFpbCBmcm9tIHRocmVhZGluZyBlbWFpbHMuXG4gICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzQzNDExMC9mb3JjZS1lbWFpbHMtbm90LXRvLWJlLWdyb3VwZWQtaW50by1jb252ZXJzYXRpb25zLzI1NDM1NzIyLlxuICAgICAgICAgICAgICBOYW1lOiBcIlgtRW50aXR5LVJlZi1JRFwiLFxuICAgICAgICAgICAgICBWYWx1ZTogbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBcIlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChyZXN1bHQuRXJyb3JDb2RlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5NZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHsgdG9rZW4sIHNlc3Npb24gfSkge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkXG4gICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZVxuICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbFxuICAgICAgICBzZXNzaW9uLnVzZXIuaW1hZ2UgPSB0b2tlbi5waWN0dXJlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBjb25zdCBkYlVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgZW1haWw6IHRva2VuLmVtYWlsLFxuICAgICAgICB9LFxuICAgICAgfSlcblxuICAgICAgaWYgKCFkYlVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkXG4gICAgICAgIHJldHVybiB0b2tlblxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogZGJVc2VyLmlkLFxuICAgICAgICBuYW1lOiBkYlVzZXIubmFtZSxcbiAgICAgICAgZW1haWw6IGRiVXNlci5lbWFpbCxcbiAgICAgICAgcGljdHVyZTogZGJVc2VyLmltYWdlLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59XG4iXSwibmFtZXMiOlsiR2l0SHViUHJvdmlkZXIiLCJFbWFpbFByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsIkNsaWVudCIsImRiIiwicG9zdG1hcmtDbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiUE9TVE1BUktfQVBJX1RPS0VOIiwiUE9TVE1BUktfU0lHTl9JTl9URU1QTEFURSIsInBhcnNlSW50IiwiUE9TVE1BUktfQUNUSVZBVElPTl9URU1QTEFURSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJzZXJ2ZXIiLCJob3N0IiwiU01UUF9IT1NUIiwicG9ydCIsIk51bWJlciIsIlNNVFBfUE9SVCIsImF1dGgiLCJ1c2VyIiwiU01UUF9VU0VSIiwicGFzcyIsIlNNVFBfUEFTU1dPUkQiLCJmcm9tIiwiU01UUF9GUk9NIiwic2VuZFZlcmlmaWNhdGlvblJlcXVlc3QiLCJpZGVudGlmaWVyIiwidXJsIiwicHJvdmlkZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsInNlbGVjdCIsImVtYWlsVmVyaWZpZWQiLCJyZXN1bHQiLCJzZW5kRW1haWxXaXRoVGVtcGxhdGUiLCJUZW1wbGF0ZUlkIiwiVG8iLCJGcm9tIiwiVGVtcGxhdGVNb2RlbCIsImFjdGlvbl91cmwiLCJwcm9kdWN0X25hbWUiLCJIZWFkZXJzIiwiTmFtZSIsIlZhbHVlIiwiRGF0ZSIsImdldFRpbWUiLCJFcnJvckNvZGUiLCJFcnJvciIsIk1lc3NhZ2UiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImlkIiwibmFtZSIsImltYWdlIiwicGljdHVyZSIsImp3dCIsImRiVXNlciIsImZpbmRGaXJzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBTzdDLElBQUlDO0FBQ0osSUFBSUMsS0FBcUMsRUFBRSxFQUUxQyxNQUFNO0lBQ0wsSUFBSSxDQUFDQyxPQUFPQyxZQUFZLEVBQUU7UUFDeEJELE9BQU9DLFlBQVksR0FBRyxJQUFJSix3REFBWUE7SUFDeEMsQ0FBQztJQUNEQyxTQUFTRSxPQUFPQyxZQUFZO0FBQzlCLENBQUM7QUFFTSxNQUFNQyxLQUFLSixPQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGF4b25vbXkvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgdmFyIGNhY2hlZFByaXNtYTogUHJpc21hQ2xpZW50XG59XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLmNhY2hlZFByaXNtYSkge1xuICAgIGdsb2JhbC5jYWNoZWRQcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwuY2FjaGVkUHJpc21hXG59XG5cbmV4cG9ydCBjb25zdCBkYiA9IHByaXNtYVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiLCJjYWNoZWRQcmlzbWEiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(api)/./lib/auth.ts\");\n\n\n// @see ./lib/auth\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7QUFDUTtBQUV4QyxrQkFBa0I7QUFDbEIsaUVBQWVBLGdEQUFRQSxDQUFDQyxrREFBV0EsQ0FBQ0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RheG9ub215Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIlxuXG4vLyBAc2VlIC4vbGliL2F1dGhcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();