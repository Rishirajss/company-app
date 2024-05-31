import React from "react";
import Mainheader from "../comman/Mainheader";
import Mainfooter from "../comman/Mainfooter";

export default function Contact() {
  return (
    <div>
      <Mainheader />
            <div className="container">
                    <div className="conatct-main py-3">
                        <h1 className="text-center py-4">
                            Get in Touch
                        </h1>
                        <div class="row">
                            <div className="col-sm-12 col-lg-2 d-none d-lg-block"></div>
                            <div class="col-sm-12 col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Reach Out to Us</h5>
                                        <p class="card-text">
                                            Need assistance? Our team is just a call away, ready to help with anything you need.
                                        </p>
                                        <a href="telto:78783 29711" class="btn btn-primary text-white w-100">
                                            +91 78783 29711
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-lg-4 mt-4 mt-lg-0">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Send Us an Emai</h5>
                                        <p class="card-text">
                                            Feel free to reach out to us anytime, anywhere with your queries or feedback via email. 
                                        </p>
                                        <a href="mailto:vikas@pwnexperts.com" class="btn btn-primary text-white w-100">
                                            vikas@pwnexperts.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
  );
}
