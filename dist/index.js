"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("./components/Card"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SliderTest = /*#__PURE__*/function (_React$Component) {
  _inherits(SliderTest, _React$Component);

  var _super = _createSuper(SliderTest);

  function SliderTest(props) {
    var _this;

    _classCallCheck(this, SliderTest);

    _this = _super.call(this, props);
    _this.state = {
      cards: {}
    };
    return _this;
  }

  _createClass(SliderTest, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('http://localhost:8000/getData').then(function (resp) {
        resp.text().then(function (textData) {
          var data = JSON.parse(textData);
          console.log("data", data);

          _this2.setState({
            cards: {
              body: data.bodyContent,
              script: data.scriptContent,
              style: data.styleContent
            }
          }, function () {
            var scriptTag = document.createElement('script');
            scriptTag.type = 'text/javascript';
            scriptTag.async = true;
            scriptTag.innerHTML = _this2.state.cards.script;
            scriptTag.setAttribute("id", "offer-script");
            document.body.appendChild(scriptTag);
            var styles = document.createElement('style');
            styles.type = 'text/css';
            styles.appendChild(document.createTextNode(_this2.state.cards.style));
            document.head.appendChild(styles);
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cards = this.state.cards;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "slider",
        dangerouslySetInnerHTML: {
          __html: this.state.cards.body
        }
      });
    }
  }]);

  return SliderTest;
}(_react["default"].Component);

var _default = SliderTest;
exports["default"] = _default;