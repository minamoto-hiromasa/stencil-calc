import { newSpecPage } from '@stencil/core/testing';
import { KsCalc } from './ks-calc';

describe('ks-calc', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KsCalc],
      html: '<ks-calc></ks-calc>',
    });
    expect(root).toEqualHtml(`
      <ks-calc>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ks-calc>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [KsCalc],
      html: `<ks-calc first="Stencil" last="'Don't call me a framework' JS"></ks-calc>`,
    });
    expect(root).toEqualHtml(`
      <ks-calc first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ks-calc>
    `);
  });
});
