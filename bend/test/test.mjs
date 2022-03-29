

import chai from 'chai';
import chaiHttp from 'chai-http';
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