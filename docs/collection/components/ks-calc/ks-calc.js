import { Component, Prop, h, State, Event } from '@stencil/core';
import { calc } from '../../utils/utils';
export class KsCalc {
  constructor() {
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
    return h("div", null,
      h("input", { value: this._input, onChange: (event) => this.handleInputChange(event) }),
      h("div", null, this.calcText()));
  }
  static get is() { return "ks-calc"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ks-calc.css"]
  }; }
  static get styleUrls() { return {
    "$": ["ks-calc.css"]
  }; }
  static get properties() { return {
    "input": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "input",
      "reflect": false,
      "defaultValue": "\"12+4\""
    }
  }; }
  static get states() { return {
    "_input": {}
  }; }
  static get events() { return [{
      "method": "changeResult",
      "name": "changeResult",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
