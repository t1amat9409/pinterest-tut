"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("react-hot-loader/root");
var React = require("react");
var react_nativescript_1 = require("react-nativescript");
var react_nativescript_2 = require("react-nativescript");
var react_nativescript_3 = require("react-nativescript");
var react_nativescript_4 = require("react-nativescript");
var AppContainer = /** @class */ (function (_super) {
    __extends(AppContainer, _super);
    function AppContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageRef = React.createRef();
        return _this;
    }
    AppContainer.prototype.render = function () {
        var forwardedRef = this.props.forwardedRef;
        return (React.createElement(react_nativescript_1.$Frame, { ref: forwardedRef },
            React.createElement(react_nativescript_1.$Page, { ref: this.pageRef, actionBarHidden: false },
                React.createElement(react_nativescript_1.$ActionBar, { title: "Home" }),
                React.createElement(react_nativescript_2.$ScrollView, null,
                    React.createElement(react_nativescript_3.$StackLayout, { className: "home-panel" },
                        React.createElement(react_nativescript_4.$Label, { textWrap: true, text: "Play with NativeScript!", className: "h2 description-label" }),
                        React.createElement(react_nativescript_4.$Label, { textWrap: true, text: "Write code in the editor or drag and drop components to build a NativeScript mobile application", className: "h2 description-label" }),
                        React.createElement(react_nativescript_4.$Label, { textWrap: true, text: "Scan the QR code with your mobile device and watch the changes sync live while you play with the code.", className: "h2 description-label" }))))));
    };
    AppContainer.prototype.componentDidMount = function () {
        var _this = this;
        var frame = this.props.forwardedRef.current;
        frame.navigate({
            create: function () {
                var page = _this.pageRef.current;
                return page;
            }
        });
    };
    return AppContainer;
}(React.Component));
exports.default = root_1.hot(AppContainer);
