import { connect } from "react-redux";
import { deleteAllTask } from "../actions/index";

const ClearButton = ({ deleteAllTask }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    deleteAllTask();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <button>Clear completed</button>
    </form>
  );
};

export default connect(null, { deleteAllTask })(ClearButton);
