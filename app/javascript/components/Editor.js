import React from 'react';
import axios from 'axios';
import Header from './Header';
import EventList from './EventList';

import PropTypes from 'prop-types';
import PropsRoute from './PropsRoute';
import Event from './Event';

class Editor extends React.Component {
  ...
  render() {
    const { events } = this.state;
    if (events === null) return null;

    const { match } = this.props;
    const eventId = match.params.id;
    const event = events.find(e => e.id === Number(eventId));

    return (
      <div>
        <Header />
        <EventList events={events} />
        <PropsRoute path="/events/:id" component={Event} event={event} />
      </div>
    );
  }
}

Editor.propTypes = {
  match: PropTypes.shape(),
};

Editor.defaultProps = {
  match: undefined,
};

export default Editor;