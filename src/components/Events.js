import Event from './Event';
import useStore from "../store";

function Events () {
  const events = useStore((state) => state.events);
  return (
    <>
         {events.map(item => <Event title={ item.title } datetime={ item.datetime } place={ item.place } description={ item.description } />) }
    </>
  );
}

export default Events;