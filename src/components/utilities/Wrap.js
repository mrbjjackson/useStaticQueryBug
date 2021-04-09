export const Wrap = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

export default Wrap


/* E.G.

  <Wrap
    condition={link}
    wrapper={children => <a href={link}>{children}</a>}
    >
    <>
      <h2>{brand}</h2>
    </>
  </Wrap>
*/