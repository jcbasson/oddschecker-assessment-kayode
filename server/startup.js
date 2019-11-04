const fs = require("fs");

const getEventsData = () => {
  try {
    return JSON.parse(
      fs.readFileSync(`${__dirname}/repository/data/data.json`, "utf8")
    );
  } catch (err) {
    console.error(err);
    return false;
  }
};
const buildEventEndpoint = () => {
  const events = getEventsData();
  const { EventRepository } = require("./repository/eventRepository");
  const { EventService } = require("./services/eventService");
  const { EventController } = require("./controllers/eventController");

  const eventRepository = new EventRepository(events);
  const eventService = new EventService(eventRepository);
  return new EventController(eventService);
};

module.exports = {
  buildEventEndpoint
};
