import React from 'react';

export default function Footer(props) {
  return (
    <div style={{ paddingRight: 0 }} className="footer">
      <div className="footer-content" >&copy; Kenneth Wang | Orange County , CA | United States</div>
      <div className="anchor-holder col-one-fifth">
        <a className="footer-content" target="_blank" href="https://www.linkedin.com/in/kenneth-wang8/" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a className="footer-content" target="_blank" href="https://github.com/Kenneth-Y-Wang" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a className="footer-content" target="_blank" rel="noopener noreferrer" href='mailto:yunfeiw@me.com'><i className="far fa-envelope"></i></a>
      </div>

    </div>
  );
}
