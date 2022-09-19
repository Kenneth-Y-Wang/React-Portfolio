import * as React from 'react';

export default function Heading({
  color,
  classes,
  font,
  type,
  size,
  textAlign,
  weight,
  children
}) {

  const headingType = type => {
    if (type === 'h2') {
      return <h2 style={{ fontSize: size, fontWeight: weight }}>{children}</h2>;
    } else if (type === 'h3') {
      return <h3 style={{ fontSize: size, fontWeight: weight }}>{children}</h3>;
    } else if (type === 'h4') {
      return <h4 style={{ fontSize: size, fontWeight: weight }}>{children}</h4>;
    } else if (type === 'h5') {
      return <h5 style={{ fontSize: size, fontWeight: weight }}>{children}</h5>;
    } else if (type === 'h6') {
      return <h6 style={{ fontSize: size, fontWeight: weight }}>{children}</h6>;
    } else {
      return <h1 style={{ fontSize: size, fontWeight: weight }}>{children}</h1>;
    }
  };
  return (
    <div className={classes} style={{ color: color, fontFamily: font, textAlign: textAlign }}>{headingType(type)}</div>
  );

}
