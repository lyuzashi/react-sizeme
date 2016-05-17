import createResizeDetector from 'element-resize-detector';

const resizeDetector = (`undefined` !== typeof window) ? createResizeDetector({
  strategy: `scroll`
}) : {};

export default resizeDetector;
