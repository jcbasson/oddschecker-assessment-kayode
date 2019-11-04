const express = require("express");
const cors = require("cors");
const qs = require("qs");
const { App } = require("./app");
const { buildEventEndpoint } = require("./startup");

const nodeModules = { express, cors, qs };

const server = new App(nodeModules, buildEventEndpoint());
server.init(8765);
