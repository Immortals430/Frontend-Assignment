import { useSelector } from "react-redux";
import { githubSelector } from "../../redux/reducers/github_reducer";
import Loading from "./Loading";
import Welcomepage from "./Welcomepage"
import GitHubUserDetails from "../../Components/GitHubUserDetails/GitHubUserDetails"
import ErrorState from "./Error";


export default function Component({loading, error}) {
  const { user } = useSelector(githubSelector);

  if (loading) return <Loading />;
  if (error) return <ErrorState error={error} />;

  return user ? <GitHubUserDetails /> : <Welcomepage />
}
