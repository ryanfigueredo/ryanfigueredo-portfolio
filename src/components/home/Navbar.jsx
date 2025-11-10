import React from 'react';

function Navbar() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-6 valign">
            <a href="/" className="logo logo-text">
              Ryan <span>Figueredo</span>
            </a>
          </div>
          <div className="col-md-6 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="#contato" className="butn butn-md butn-bord radius-5">
                  <span>Fale Comigo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
