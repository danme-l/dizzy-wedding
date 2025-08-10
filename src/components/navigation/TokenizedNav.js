import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import NavBar from './NavBar';

// wrapper around react-router-dom's Link that prepends the token
const LinkWithToken = React.forwardRef(function LinkWithToken(props, ref) {
  const { token } = useParams();
  console.log("the nav token:", token)
  let newTo = props.to || '';

  if (!newTo.startsWith('http')) {
    // if no leading slash, add one
    if (!newTo.startsWith('/')) newTo = '/' + newTo;
    newTo = `/${token}${newTo}`;
  }

  return <RouterLink ref={ref} {...props} to={newTo} />;
});

export default function TokenizedNav() {
  // NavBar gets LinkWithToken as a prop and uses it for all links
  return <NavBar Link={LinkWithToken} />;
}
