'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f67eb3e3.js');
const utils = require('./utils-7f4134fb.js');

const ksCalcCss = ":host{display:block}";

const KsCalc = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.changeResult = index.createEvent(this, "changeResult", 7);
    this.input = "12+4";
    this._input = "12+4";
  }
  componentWillLoad() {
    return this._input = this.input;
  }
  calcText() {
    return utils.calc(this._input);
  }
  handleInputChange(event) {
    this._input = event.target["value"];
    this.changeResult.emit(this.calcText());
  }
  render() {
    return index.h("div", null, index.h("input", { value: this._input, onChange: (event) => this.handleInputChange(event) }), index.h("div", null, this.calcText()));
  }
};
KsCalc.style = ksCalcCss;

exports.ks_calc = KsCalc;
