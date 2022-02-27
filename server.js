import Asciidoctor from "asciidoctor";
const asciidoctor = Asciidoctor();

export default {
  check(component, props, childHTML) {
    try {
      const { html } = renderToStaticMarkup(component, props, childHTML);
      return Boolean(html);
    } catch (e) {}
    return false;
  },
  renderToStaticMarkup(component, props, childHTML) {
    const html = asciidoctor.convert(component, {
      ...props,
      innerHTML: childHTML,
    });
    return { html };
  },
};
