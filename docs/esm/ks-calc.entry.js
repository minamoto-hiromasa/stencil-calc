import { r as registerInstance, c as createEvent, h } from './index-c9d5924e.js';
import { c as calc } from './utils-63c26cee.js';

const ksCalcCss = ":host{display:block}";

const KsCalc = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeResult = createEvent(this, "changeResult", 7);
    this.input = "12+4";
    this._input = "12+4";
  }
  componentWillLoad() {
    return this._input = this.input;
  }
  calcText() {
    return calc(this._input);
  }
  handleInputChange(event) {
    this._input = event.target["value"];
    this.changeResult.emit(this.calcText());
  }
  render() {
    return h("div", null, h("input", { value: this._input, onChange: (event) => this.handleInputChange(event) }), h("div", null, this.calcText()));
  }
};
KsCalc.style = ksCalcCss;

export { KsCalc as ks_calc };
