

import chai from 'chai';
import chaiHttp from 'chai-http';

// import our app so the test code can use it to call the API
//
// Notice that if the srvr.js file does not expose the API calls with 
// a module.export command you get an interesting but to help error!!
import app from '../srvr.js';

chai.use(chaiHttp);
chai.should();

describe( "players", () => {
    describe("GET /graph", () => {
        it("Should get all players", (done) => {
            chai.request(app)
                .get("/graph")
                .end( (err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    done();
                })
               
        })
    })
}

);