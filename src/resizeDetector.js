import createResizeDetector from 'element-resize-detector';

const usePlaceholder = (`undefined` !== typeof window);

const resizeDetector = usePlaceholder ? createResizeDetector({
  strategy: `scroll`
}) : {};

export { resizeDetector as default, usePlaceholder };
