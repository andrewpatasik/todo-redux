import { connect } from "react-redux";
import { deleteCompletedTask } from "../actions/index";

const ClearButton = ({ deleteCompletedTask }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    deleteCompletedTask();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <button>Clear completed</button>
    </form>
  );
};

export default connect(null, { deleteCompletedTask })(ClearButton);
