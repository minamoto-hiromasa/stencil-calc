import { attachShadow, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
function calc(input) {
  const inputNums = input.split(/\+|\-|\*|\//).map(s => parseInt(s));
  const inputOpe = input.split(/\d+/).filter(s => s !== "");
  if (inputNums == null || inputOpe == null) {
    return 0;
  }
  if (inputNums.length <= 1 || inputOpe.length <= 0) {
    return 0;
  }
  if (inputNums.length - inputOpe.length !== 1) {
    return 0;
  }
  return inputOpe.reduce((acc, cur, index) => {
    return _calc(acc, inputNums[index + 1], cur);
  }, inputNums[0]);
}
function _calc(num1, num2, ope) {
  switch (ope) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

const ksCalcCss = ":host{display:block}";

const KsCalc = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
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
  static get style() { return ksCalcCss; }
};

const myComponentCss = ":host{display:block}";

const MyComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const KsCalc$1 = /*@__PURE__*/proxyCustomElement(KsCalc, [1,"ks-calc",{"input":[1],"_input":[32]}]);
const MyComponent$1 = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      KsCalc$1,
  MyComponent$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { KsCalc$1 as KsCalc, MyComponent$1 as MyComponent, defineCustomElements };
