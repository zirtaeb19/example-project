import { LitElement, html } from 'lit-element';

class ButtonElement extends LitElement {
    render() {
        return html`
        <button>Hello</button>
      `;
    }
}

customElements.define('button-element', ButtonElement);