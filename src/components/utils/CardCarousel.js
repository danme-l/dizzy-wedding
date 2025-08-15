import Carousel from "react-material-ui-carousel";
import ThingToDoCard from "./ThingToDoCard";

const cardItems = [
    {
        name: "Old Montreal",
        info: "Wander the beautiful streets",
        imgLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F105465851%2Fimage.jpg&f=1&nofb=1&ipt=c80d577aa52043aa44747f9bd77e6aa9531440e130ed7d29fd2da6bd3c76f705",
        spotLink: false
    },
    {
        name: "Mont Royal Park",
        info: "Climb the mountain (or drive), walk around Beaver Lake, and take in the beautiful views",
        imgLink: "https://www.thegeographicalcure.com/wp-content/uploads/2021/10/img_61598d7c1d9f9.",
        spotLink: false

    },
    {
        name: "La Banquise",
        info: "Try the World's greatest poutine (sorry Julep fans, you are wrong)",
        imgLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.cntraveler.com%2Fphotos%2F5b6dab0c890b740fb9121ecb%2F16%3A9%2Fw_2560%2Cc_limit%2FLa-Banquise__2018_173.jpg&f=1&nofb=1&ipt=6dee73bb30a13f035db74f496ec9d196dee30d4a0b73b09abbca2dc795b56f02",
        spotLink: "https://labanquise.com/"
    },
    {
        name: "Drogheria Fine",
        info: "A Hadziomerovic favourite. Grab a delicious carton of fresh gnocchi and take some incredible jarred pasta sauce home with you.",
        imgLink: "https://lasalsadellanonna.com/wp-content/uploads/2019/02/13217427_1173106762722647_2984380847391492570_o.jpg",
        spotLink: "https://drogheriafine.website/"
    }

];

const CardCarousel = () => {
  return (
    <Carousel
      animation="slide"
      indicators={true}
      timeout={800}
      navButtonsAlwaysVisible={true}
      navButtonsAlwaysInvisible={false}
      cycleNavigation={true}
      fullHeightHover={false}
      sx={{
        maxWidth: "600px",
        flexGrow: 1,
        margin: "auto",
        mt: 5,
      }}
    >
      {cardItems.map((item, i) => (
        <ThingToDoCard key={i} imgLink={item.imgLink} name={item.name} info={item.info} spotLink={item.spotLink}/>
      ))}
    </Carousel>
  );
};

export default CardCarousel;