//Test get booking api
const { callGetBookingApi, responseSchema } = require('../src/api.js');
describe('GET Booking Suite', function () {
    var res;
    before(async function () {
        let id = 1;
        res = await callGetBookingApi(id);
        logger.log(res.body);
    });
    it('should validate response status', function () {
        expect(res.status).to.equal(200);
    });
    it('should validate response schema', function () {
        expect(res.body).to.be.jsonSchema(responseSchema);
    });
});