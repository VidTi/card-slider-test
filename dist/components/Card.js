"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 22px;\n    width: 120px;\n    height: 24px;\n    border-radius: 64px;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 0.75rem;\n    line-height: 1.5rem;\n    background-color: #fff;\n    text-align: center;\n    float: right;\n    color: #E95F62;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: 600;\n    font-size: 0.625rem;\n    line-height: 0.875rem;\n    margin-top:9px;\n    color: #000000;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    height:100%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    width: 233px;\n    height: 4px;\n    margin-top:8px;\n    background-color: #fff;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: normal;\n    font-size: 0.625rem;\n    line-height: 0.875rem;\n    margin-top: 2px;\n    color: #8F8F8F;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: 600;\n    font-size: 0.625rem;\n    line-height: 0.875rem;\n    margin-top: 10px;\n    color: #4A4A4A;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: 600;\n    font-size: 0.563rem;\n    line-height: 1.125rem;\n    color: #8F8F8F;\n    margin-top: 2px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-style: normal;\n    font-weight: normal;\n    font-size: 0.813rem;\n    line-height: 1rem;\n    color: #6B6E7B;\n    margin-top: 10px;\n    white-space: normal;\n    height: 2rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n font-size: 1.063rem;\n    font-style: normal;\n    font-weight: bold;\n    line-height: 1.313rem;\n    margin-top: 27px;\n    text-transform: capitalize;\n    color: #000000;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 20px;\n    width: 230px;\n    margin-left:0px;\n    margin-top: 10px;\n    background-color: blue;\n    color: #fff;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 0.75rem;\n    line-height: 1.25rem;\n    color: #FFFFFF;\n    border-radius: 0px 35px 35px 0px;\n\n    & p {\n       margin:0;\n      margin-left: 55px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 16px;\n    display: inline-block;\n    box-sizing: border-box;\n    padding: 20px 30px 20px 30px;\n    margin-left: 13px;\n    background-color: aqua;\n    position: relative;\n    height: 300px;\n    width: 300px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardBackground = _styledComponents["default"].div(_templateObject());

var CardTag = _styledComponents["default"].div(_templateObject2());

var OfferLabel = _styledComponents["default"].div(_templateObject3());

var OfferDesc = _styledComponents["default"].div(_templateObject4());

var TnC = _styledComponents["default"].div(_templateObject5());

var ConditionLimit = _styledComponents["default"].div(_templateObject6());

var CampaignEndDate = _styledComponents["default"].div(_templateObject7());

var ProgressBar = _styledComponents["default"].div(_templateObject8());

var Progress = _styledComponents["default"].div(_templateObject9());

var GoalAchievement = _styledComponents["default"].div(_templateObject10());

var Cta = _styledComponents["default"].div(_templateObject11());

var Card = /*#__PURE__*/function (_React$Component) {
  _inherits(Card, _React$Component);

  var _super = _createSuper(Card);

  function Card(props) {
    _classCallCheck(this, Card);

    return _super.call(this, props);
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(CardBackground, {
        style: {
          background: this.props.cardColor
        }
      }, /*#__PURE__*/_react["default"].createElement(CardTag, {
        style: {
          background: this.props.cardTagColor
        }
      }, /*#__PURE__*/_react["default"].createElement("p", null, this.props.cardTag)), /*#__PURE__*/_react["default"].createElement(OfferLabel, null, this.props.offerLabel), /*#__PURE__*/_react["default"].createElement(OfferDesc, null, this.props.offerDesc), /*#__PURE__*/_react["default"].createElement(TnC, null, this.props.tnc), /*#__PURE__*/_react["default"].createElement(ConditionLimit, null, this.props.conditionLimit), /*#__PURE__*/_react["default"].createElement(CampaignEndDate, null, this.props.campaignEndDate), /*#__PURE__*/_react["default"].createElement(ProgressBar, null, /*#__PURE__*/_react["default"].createElement(Progress, {
        style: {
          width: this.props.progress,
          background: this.props.progressBarColor
        }
      })), /*#__PURE__*/_react["default"].createElement(GoalAchievement, null, this.props.goalAchievement), /*#__PURE__*/_react["default"].createElement(Cta, null, "Show products"));
    }
  }]);

  return Card;
}(_react["default"].Component);

var _default = Card;
exports["default"] = _default;