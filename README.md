## Dan and Izzy's wedding website
PERN-based web application that achieves the same functionality as off-the-shelf wedding websites like With Joy or The Knot, but custom built for our wedding.

Try it out: go to dizzywedding.info and use the code 'sample123'

**Front end:** React, styled with [Material UI](https://mui.com/material-ui/).

**Back end:** Node- and Express-based API (find the repo [here](https://github.com/danme-l/dizzy-wedding-back)). 

We send custom links by email to our guests via script with a hard-coded token that brings them to dizzywedding.info/{token}, so that each guest can have customized views based on various attributes (like if they're in the wedding party, if they have a plus one, etc). The navigation functionality automatically prepends their token to the links the guest navigates to.

**Database:** Postgres, with three tables: guests, passwords (tokens), and rsvps. 
Guests and tokens are stored seperately so that couples and families can have the same token and therefore be on the same invite, go to the same link, and RSVP as one (if they want). RSVPS are stored seperately as well to track whether they are a plus one, food choice, etc. The guests table connects to rsvps via the guest_id if they are a guest or the invited_id if they are a plus one and were invited by a guest. It also stores their name if they are a plus one.

Schema:

[![schema.png](https://i.postimg.cc/wBVdnsPK/schema.png)](https://postimg.cc/7Cfc2bwX)

### Other services
* All the services are deployed to [Render](https://render.com/).
* Images hosted by [postimages](https://postimages.org/).

### TODO
(1) Necessary
* Proper hotel link
* Admin section
