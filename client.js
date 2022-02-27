export default (element) => {
  return (Component, props, childHTML) => {
      Component,{ ...props, innerHTML: childHTML }, element;
    };
}
