class App {
  constructor(nodeModules, eventController) {
    this.nodeModules = nodeModules;
    this.eventController = eventController;
    this.server = null;
  }

  init(port) {
    const { express, cors, qs } = this.nodeModules;

    const app = express();
    app.use(cors());
    app.set("query parser", function(str) {
      return qs.parse(str, {
        decode: function(s) {
          return decodeURIComponent(s);
        }
      });
    });
    app.get("/event/:id", (req, res) =>
      this.serve(res, this.eventController.findById(req.params.id))
    );
    // Error handling
    app.use((err, req, res, next) => {
      console.log("err = ", err);

      next(err);
    });

    this.server = app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  }

  close() {
    this.server && this.server.close();
    this.server = null;
  }

  serve(res, data) {
    setTimeout(() => res.send(data), 0);
  }

  serveError(res, { status, data }) {
    res.status(status).send(data);
  }
}

module.exports = { App };
