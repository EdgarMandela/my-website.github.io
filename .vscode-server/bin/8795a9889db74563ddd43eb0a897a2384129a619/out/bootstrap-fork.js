/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";const bootstrap=require("./bootstrap");function pipeLoggingToParent(){const e=1e5;function n(n){const t=[],o=[];let r;if(n.length)for(let e=0;e<n.length;e++){if(void 0===n[e])n[e]="undefined";else if(n[e]instanceof Error){const t=n[e];t.stack?n[e]=t.stack:n[e]=t.toString()}o.push(n[e])}if("true"===process.env.VSCODE_LOG_STACK){const e=(new Error).stack;o.push({__$stack:e.split("\n").slice(3).join("\n")})}try{r=JSON.stringify(o,(function(e,n){if(!("object"!=typeof(o=n)||null===o||Array.isArray(o)||o instanceof RegExp||o instanceof Date)||Array.isArray(n)){if(-1!==t.indexOf(n))return"[Circular]";t.push(n)}var o;return n}))}catch(e){return"Output omitted for an object that cannot be inspected ("+e.toString()+")"}return r&&r.length>e?"Output omitted for a large object that exceeds the limits":r}function t(e){try{process.send(e)}catch(e){}}"true"===process.env.VERBOSE_LOGGING?(console.log=function(){t({type:"__$console",severity:"log",arguments:n(arguments)})},console.info=function(){t({
type:"__$console",severity:"log",arguments:n(arguments)})},console.warn=function(){t({type:"__$console",severity:"warn",arguments:n(arguments)})}):(console.log=function(){},console.warn=function(){},console.info=function(){}),console.error=function(){t({type:"__$console",severity:"error",arguments:n(arguments)})}}function disableSTDIO(){const e=new(require("stream").Writable)({write:function(){}});process.__defineGetter__("stdout",(function(){return e})),process.__defineGetter__("stderr",(function(){return e})),process.__defineGetter__("stdin",(function(){return e}))}function handleExceptions(){process.on("uncaughtException",(function(e){console.error("Uncaught Exception: ",e)})),process.on("unhandledRejection",(function(e){console.error("Unhandled Promise Rejection: ",e)}))}function terminateWhenParentTerminates(){const e=Number(process.env.VSCODE_PARENT_PID);"number"!=typeof e||isNaN(e)||setInterval((function(){try{process.kill(e,0)}catch(e){process.exit()}}),5e3)}function configureCrashReporter(){
const e=process.env.CRASH_REPORTER_START_OPTIONS;if("string"==typeof e)try{const n=JSON.parse(e);n&&process.crashReporter.start(n)}catch(e){console.error(e)}}bootstrap.enableASARSupport(),process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH&&bootstrap.injectNodeModuleLookupPath(process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH),process.send&&"true"===process.env.PIPE_LOGGING&&pipeLoggingToParent(),process.env.VSCODE_ALLOW_IO||disableSTDIO(),process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS||handleExceptions(),process.env.VSCODE_PARENT_PID&&terminateWhenParentTerminates(),configureCrashReporter(),require("./bootstrap-amd").load(process.env.AMD_ENTRYPOINT);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8795a9889db74563ddd43eb0a897a2384129a619/core/bootstrap-fork.js.map
