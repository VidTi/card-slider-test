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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Proxima Nova\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  width: 100%;\n  margin: 0 auto;\n  overflow-x: scroll;\n  white-space: nowrap;\n  max-width: 680px;\n  text-align: left;\n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardContainer = _styledComponents["default"].div(_templateObject());

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

      fetch("http://demo9772522.mockable.io/").then(function (resp) {
        resp.json().then(function (data) {
          console.log(data);

          _this2.setState({
            cards: data.cards
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cards = this.state.cards;
      return /*#__PURE__*/_react["default"].createElement(CardContainer, null, Object.keys(cards).map(function (key) {
        return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
          key: key,
          cardTag: cards[key].card_tag,
          offerLabel: cards[key].offer_label,
          offerDesc: cards[key].offer_desc,
          tnc: cards[key].tnc,
          conditionLimit: cards[key].cond_limit,
          campaignEndDate: cards[key].campaign_end_date,
          goalAchievement: cards[key].goal_achievement,
          cardColor: cards[key].card_bg,
          cardTagColor: cards[key].card_tag_bg,
          progressBarColor: cards[key].progress_bar_bg,
          progress: cards[key].progress
        });
      }));
    }
  }]);

  return SliderTest;
}(_react["default"].Component);

var _default = SliderTest;
exports["default"] = _default;