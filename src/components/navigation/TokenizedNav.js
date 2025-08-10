import NavBar from './NavBar';
import { LinkWithToken } from './NavUtils';

export default function TokenizedNav() {
  // NavBar gets LinkWithToken as a prop and uses it for all links
  return <NavBar Link={LinkWithToken} />;
}
