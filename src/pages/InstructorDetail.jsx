import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

const InstructorDetail = () => {
  //? You can use the useParams Hook to get the parameter in the link.
  const { id } = useParams();

  const navigate = useNavigate();

  const [inst, setInst] = useState(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => setInst(data))
      //!   If there is no response from the server in the fetch request, the catch structure works. That's why we did error handling with the res.ok structure above 👆.
      .catch((err) => console.log(err));
  }, [id]);

  console.log(inst);

  if (error) {
    return <NotFound />;
  } else if (!inst) {
    return (
      <div className="text-center">
        <h2>Data is Fetching</h2>
      </div>
    );
  } else {
    return (
      <div className="container text-center">
        <h3>{inst.name}</h3>
        <img
          className="w-25"
          src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
          alt="instructor"
        />
        <h4>{inst.email}</h4>
        <h4>{inst.phone}</h4>
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-2"
          >
            Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default InstructorDetail;
