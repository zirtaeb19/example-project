import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';

import '../packages/button/src/index.js';

storiesOf('Button', module)
  .add('button-element', () => {
    return html`<button-element></button-element>`;
  });