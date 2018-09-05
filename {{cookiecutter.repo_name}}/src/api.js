//Use this detail to generate api docs
/**
 * @api {post} /booking/ Get Booking Details
 * @apiName Get Booking Details
 * @apiGroup Booking
 *
 * @apiParam {String} id The id of the booking you would like to retrieve.
 *
 * @apiSuccess {String} firstname Firstname for the guest who made the booking.
 * @apiSuccess {String} lastname  Lastname for the guest who made the booking.
 * @apiSuccess {Number} totalprice  The total price for the booking.
 * @apiSuccess {Boolean} depositpaid  Whether the deposit has been paid or not.
 * @apiSuccess {Object} bookingdates  Sub-object that contains the checkin and checkout dates.
 * @apiSuccess {Date} checkin  Date the guest is checking in.
 * @apiSuccess {Date} checkout  Date the guest is checking out.
 * @apiSuccess {String} additionalneeds  Any other needs the guest has
 */

const bookingApi = 'booking/';
exports.callGetBookingApi = async (id) => {
    return baseUrl.get(bookingApi + id)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
};

exports.responseSchema = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
        "firstname",
        "lastname",
        "totalprice",
        "depositpaid",
        "bookingdates"
    ],
    "properties": {
        "firstname": {
            "$id": "#/properties/firstname",
            "type": "string",
            "title": "The Firstname Schema",
            "default": "",
            "examples": [
                "Sally"
            ],
            "pattern": "^(.*)$"
        },
        "lastname": {
            "$id": "#/properties/lastname",
            "type": "string",
            "title": "The Lastname Schema",
            "default": "",
            "examples": [
                "Brown"
            ],
            "pattern": "^(.*)$"
        },
        "totalprice": {
            "$id": "#/properties/totalprice",
            "type": "integer",
            "title": "The Totalprice Schema",
            "default": 0,
            "examples": [
                111
            ]
        },
        "depositpaid": {
            "$id": "#/properties/depositpaid",
            "type": "boolean",
            "title": "The Depositpaid Schema",
            "default": false,
            "examples": [
                true
            ]
        },
        "bookingdates": {
            "$id": "#/properties/bookingdates",
            "type": "object",
            "title": "The Bookingdates Schema",
            "required": [
                "checkin",
                "checkout"
            ],
            "properties": {
                "checkin": {
                    "$id": "#/properties/bookingdates/properties/checkin",
                    "type": "string",
                    "title": "The Checkin Schema",
                    "default": "",
                    "examples": [
                        "2013-02-23"
                    ],
                    "pattern": "^(.*)$"
                },
                "checkout": {
                    "$id": "#/properties/bookingdates/properties/checkout",
                    "type": "string",
                    "title": "The Checkout Schema",
                    "default": "",
                    "examples": [
                        "2014-10-23"
                    ],
                    "pattern": "^(.*)$"
                }
            }
        },
        "additionalneeds": {
            "$id": "#/properties/additionalneeds",
            "type": "string",
            "title": "The Additionalneeds Schema",
            "default": "",
            "examples": [
                "Breakfast"
            ],
            "pattern": "^(.*)$"
        }
    }
};