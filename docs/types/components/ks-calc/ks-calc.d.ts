import { EventEmitter } from '../../stencil-public-runtime';
export declare class KsCalc {
  input: string;
  _input: string;
  changeResult: EventEmitter;
  componentWillLoad(): string;
  private calcText;
  handleInputChange(event: Event): void;
  render(): any;
}
