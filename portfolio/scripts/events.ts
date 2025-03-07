import mitt from "mitt";

type Events = {
    routeChanged: string;
};

const events = mitt<Events>();

export default events;
