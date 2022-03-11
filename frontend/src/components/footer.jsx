import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mt-5"  style={{ width:"100%"}}>
            <div className="col-md-4 d-flex align-items-center mx-auto">
                <p className="text-muted text-center mx-auto">© 2021-2022 FullStack Bootcamp</p>
            </div>
        </footer>
    )
  }
}

export default Footer;
