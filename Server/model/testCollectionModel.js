var mongoose = require('mongoose');
var mongoomise = require("mongoomise")
var db = require("../util/db.js");
var model = new mongoose.Schema({
  name: String,
  project: {
    type: mongoose.Schema.ObjectId,
    ref: "TestProject"
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  tests: {
    type: [
      {
        test: {
          type: mongoose.Schema.ObjectId,
          ref: "Test"
        },
        output: {
          type: String,
          default: ""
        },
        argv: {
          type: Array,
          default: []
        },
        status: {
          type: Number,
          default: 0
        },
        id: Number,
        time: {
          type: Number,
          default: 0
        },
        mode: String,
        _id: false
      }
    ],
    default: []
  },
  poll: {
    type: mongoose.Schema.ObjectId,
    ref: "Poll"
  },
  output: {
    total: {
      type: Number,
      default: 0
    },
    success: {
      type: Number,
      default: 0
    },
    fail: {
      type: Number,
      default: 0
    },
    unknown: {
      type: Number,
      default: 0
    },
    time: {
      type: Number,
      default: 0
    },
  }
}, {
  timestamps: true
});
model.configOutputField(null, [
  "createdAt",
  "updatedAt"
]);
var dbManage = db.model("TestCollection", model);
mongoomise.promisifyAll(dbManage, require("bluebird"));
module.exports = dbManage;