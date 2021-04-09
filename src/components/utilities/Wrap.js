export const Wrap = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

export default Wrap
