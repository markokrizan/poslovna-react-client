import React from 'react';

export default function Company(){
    return (
        <div className="container">
        <br/>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4 text-left">Company information:</h4>
                <div className="row">
                  <div className="col-md-6 border-right">
                    <h5 className="text-right">City:</h5>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-left">Novi Sad, Serbia</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 border-right">
                    <h5 className="text-right">PIB:</h5>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-left">28937498273</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
