"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/* Controls react-nativescript log verbosity. true: all logs; false: only error logs. */
Object.defineProperty(global, '__DEV__', { value: false });
var ReactNativeScript = require("react-nativescript");
var AppContainer_1 = require("./components/AppContainer");
exports.rootRef = React.createRef();
ReactNativeScript.start(React.createElement(AppContainer_1.default, {
    forwardedRef: exports.rootRef
}, null), 
/* This ref MUST match the ref that you pass into the base component of your app container. */
exports.rootRef);
