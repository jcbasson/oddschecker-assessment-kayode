const _ = require("lodash");

class EventService {
  constructor(eventRepository) {
    this.eventRepository = eventRepository;
  }

  findById(id) {
    return _.get(this, `eventRepository.events.byId.${id}`, {});
  }
}

module.exports = { EventService };
