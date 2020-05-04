"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

// import '../css/card.css';
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
      // return <div className="card" style={{background:this.props.cardColor}}>
      //             <div className="tag" style={{background:this.props.cardTagColor}}>
      //               <p>{this.props.cardTag}</p>   
      //             </div>
      //             <div className="offerLabel">{this.props.offerLabel}</div>
      //             <div className="offerDesc">{this.props.offerDesc}</div>
      //             <div className="tnc">{this.props.tnc}</div>
      //             <div className="conditionLimit">{this.props.conditionLimit}</div>
      //             <div className="campaignEndDate">{this.props.campaignEndDate}</div>
      //             <div className="progressBar">
      //                 <div className="progress" style={{width:this.props.progress,background:this.props.progressBarColor}}></div>
      //             </div>
      //             <div className="goalAchievement">{this.props.goalAchievement}</div>
      //             <div className="cta">Show products</div>
      //        </div>
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          background: this.props.cardColor
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          background: this.props.cardTagColor
        }
      }, /*#__PURE__*/_react["default"].createElement("p", null, this.props.cardTag)), /*#__PURE__*/_react["default"].createElement("div", null, this.props.offerLabel), /*#__PURE__*/_react["default"].createElement("div", null, this.props.offerDesc), /*#__PURE__*/_react["default"].createElement("div", null, this.props.tnc), /*#__PURE__*/_react["default"].createElement("div", null, this.props.conditionLimit), /*#__PURE__*/_react["default"].createElement("div", null, this.props.campaignEndDate), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: this.props.progress,
          background: this.props.progressBarColor
        }
      })), /*#__PURE__*/_react["default"].createElement("div", null, this.props.goalAchievement), /*#__PURE__*/_react["default"].createElement("div", null, "Show products"));
    }
  }]);

  return Card;
}(_react["default"].Component);

var _default = Card;
exports["default"] = _default;