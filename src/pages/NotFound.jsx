import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")} className="btn btn-success me-2">
        Home
      </button>
      <button onClick={() => navigate(-1)} className="btn btn-warning">
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
