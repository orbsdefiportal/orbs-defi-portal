import { useHistory } from "react-router-dom";
import { routesLinks, menuAddressLinks } from "../../../constants";

const IFrame = () => {
  let articleLink, linkTo, articleName, type, linkId;
  const history = useHistory();

  let url = history.location.pathname.substring(1);

  Object.keys(routesLinks).map((key) => {
    if (key === url) {
      type = routesLinks[key].type;
      linkId = routesLinks[key].linkId;
    }
    return key;
  });

  articleLink = menuAddressLinks[linkId][`link${type}`];
  linkTo = menuAddressLinks[linkId][type];
  articleName = menuAddressLinks[linkId][`${type}Name`];

  return (
    <>
      <a
        href={articleLink}
        style={{
          textDecoration: "none",
          fontFamily: "Montserrat",
          fontSize: "12px",
          color: "#6dbbcc",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          textTransform: "uppercase",
          backgroundColor: "#1a1a1a",
          backgroundImage:
            "url(/static/media/right_assets.5297a280.svg), url(/static/media/right_assets.5297a280.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "129% 50%, -40% 33%",
        }}
      >
        {articleName}
      </a>
      <iframe
        src={linkTo}
        height="100%"
        width="100%"
        style={{ border: "none", height: "100vh" }}
        title="New"
        id="theiframe"
      />
    </>
  );
};

export default IFrame;
