/**
 * Created by sunxin on 2017/4/13.
 */
let mongoose = require('mongoose');
let mongoomise = require("mongoomise");
let db = require("../util/db.js");
let model = new mongoose.Schema({
  name: String,
  project: {
    type: mongoose.Schema.ObjectId,
    ref: "Project"
  },
  data: {
    type: Array,
    default: []
  },
  id: String
}, {
  timestamps: true
});

let dbManage = db.model("Status", model);
mongoomise.promisifyAll(dbManage, require("bluebird"));
module.exports = dbManage;