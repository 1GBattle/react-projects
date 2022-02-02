import React, { useEffect } from "react";
import { connect } from "react-redux";

import { deleteStream, getStream } from "../../actions";
import history from "../../history";
import Modal from "../Modal";

const StreamDelete = ({ deleteStream, stream, getStream, ...props }) => {
  const streamId = props.match.params.id
  useEffect(() => {
    getStream(streamId);
  }, [getStream, streamId]);

  const handleClick = () => {
    deleteStream(props.match.params.id)
  };

  const onDismiss = () => {
    history.push("/")
  };

  const actions = (
    <React.Fragment>
      <button onClick={handleClick} className="ui primary button negative">
        Yes
      </button>
      <button onClick={onDismiss} className="ui button">
        No
      </button>
    </React.Fragment>
  );

  const textFunction = () => {
    return <div>Some text</div>
  };
  const renderModalContent = () => {
    if (stream) {
      return `Are you sure you want to delete "${stream.title}" stream? This action cannot be undone.`;
    } else {
      return "Are you sure you want to delete this stream";
    }
  };

  if (!stream) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Modal
        headerMessage={"Delete Stream"}
        contentMessage={renderModalContent()}
        actions={actions}
        onDismiss={onDismiss}
        streamTitle={stream.title}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { deleteStream, getStream })(
  StreamDelete
);
