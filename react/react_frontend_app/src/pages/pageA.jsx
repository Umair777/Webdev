
import { useNavigate } from "react-router-dom";

export default function PageA() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate("/pageB", {
          state: { message: "Hello from Page A!" }
        })
      }
    >
      Go to Page B
    </button>
  );
}
