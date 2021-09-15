const css = require("./assets/css");

const email = {
  // The default width for <mj-body> is 600px.
  template: `
    <mjml>
      <mj-head>
        <mj-title>Trek Bikes</mj-title>
        <mj-preview>Vue.js is just plain awesome, so let's use it to build HTML email and bring some joy into HTML email development.</mj-preview>
        <mj-attributes>
          <mj-all font-family="Arial, sans-serif" />
          <mj-section padding="10px" background-color="#fff" />
          <mj-column padding="0" />
          <mj-text padding="0" />
        </mj-attributes>
        <mj-style inline="inline">
          ${css.inlineCSS}
        </mj-style>
        <mj-style>
          ${css.headCSS}
        </mj-style> 
      </mj-head>
      <mj-body background-color="#1C1C1C;">
        <slot />
      </mj-body>
    </mjml>
  `,
};

exports.email = email;
