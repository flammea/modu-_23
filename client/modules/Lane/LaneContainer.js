import { connect } from 'react-redux';
import Lane from './Lane';
import { createNote } from '../Note/NoteActions';
import { editLane } from './LaneActions';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId))
  };
};

const mapDispatchToProps = {
  addNote: createNote,
  editLane,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);