import React from 'react';

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-content" >&copy; Kenneth Wang | Orange County , CA | United States</div>
      <div className="anchor-holder col-one-third">
        <a className="footer-content" target="_blank" href="https://www.linkedin.com/in/kenneth-wang8/" rel="noreferrer">LinkedIn</a>
        <a className="footer-content" target="_blank" href="https://github.com/Kenneth-Y-Wang" rel="noreferrer">GitHub</a>
        <a className="footer-content" target="_blank" rel="noopener noreferrer" href='mailto:yunfeiw@me.com'>YunfeiW@me.com</a>
      </div>

    </div>
  );
}
