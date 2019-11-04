class EventController {
  constructor(eventService) {
    this.eventService = eventService;
  }

  findById(id) {
    return this.eventService.findById(id);
  }

  static handleError(err) {
    let status;
    switch (err.type) {
      case "INVALID":
        status = 400;
        break;
      case "NOT_FOUND":
      default:
        status = 404;
        break;
    }
    return {
      status,
      data: {
        message: err.message,
        error: true
      }
    };
  }
}

module.exports = { EventController };
