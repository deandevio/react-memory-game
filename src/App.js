import "./App.css";
import { Fragment, useState } from "react";
import Title from "./Title";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "title number 1", id: 1 },
    { title: "title number 2", id: 2 },
    { title: "title number 3", id: 3 },
  ]);

  console.log(showModal);

  const handleClick = (id) => setEvents((prevEvents) => prevEvents.filter((event) => id !== event.id));
  const handleClose = () => setShowModal(false);
  const subtitle = "this subtitle comes from props object";

  return (
    <div className="App">
      <Title title="This title comes from props!" subtitle={subtitle} />
      <Title title="Another title" subtitle="some stupid subtitle" />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents &&
        events.map((event, index) => (
          <Fragment key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>delete events</button>
          </Fragment>
        ))}
      {/* <Modal>
        <h2>10$ Off Coupon Code!</h2>
        <p>Please buy this from me I need the money</p>
      </Modal> */}
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>Term of conditions</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati
            deserunt nobis suscipit eaque?
          </p>
          <a href="/">find out more.....</a>
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
    </div>
  );
};

export default App;
