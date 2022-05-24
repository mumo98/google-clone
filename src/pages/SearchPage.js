import React from "react";
import useGoogleSearch from "../keys/useGoogleSearch";
import { useStateValue } from "../state/StateProvider";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";
// import SearchIcon from "@material-ui/icons/Search";
// import DescriptionIcon from "@material-ui/icons/Description";
// import ImagesIcon from "@material-ui/icons/Image";
// import LocalOfferIcon from "@material-ui/icons/LocalOffer";
// import RoomIcon from "@material-ui/icons/Room";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

//
function SearchPage() {
  // when value is grabbed from the data layer, a state and dispathc are provided
  // the state is then de-structured to get the term
  const [{ term }, dispatch] = useStateValue();
  //
  // this is live api call
  const { data } = useGoogleSearch(term);
  console.log(data);

  // to get the google api, the link is =========>
  // https://developers.google.com/custom-search/v1/using_rest

  // to creaate the search engine follow the link
  // https://cse.google.com/cse/create/new
  // entre site to search and click create
  // then clsick "EDIT SEARCH ENGINE" and click on set up
  // then go on toggle the "SEARCH THE NETIRE WEB"
  // THE GRAB THE "search engine ID"

  // the create a page under keys called useGoogleSearch

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="
            https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          {/*  */}
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                {/* <SearchIcon /> */}
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                {/* <DescriptionIcon /> */}
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage__option">
                {/* <ImagesIcon /> */}
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPage__option">
                {/* <LocalOfferIcon /> */}
                <Link to="/all">Shopping</Link>
              </div>
              <div className="searchPage__option">
                {/* <RoomIcon /> */}
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage__option">
                {/* <MoreVertIcon /> */}
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}⭐
              </a>
              {/*  */}
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              {/*  */}
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
      {/* the data/input of the user can be didpayed with this since it has been de-structred in the useStateValue */}
      {/*  */}
      {/* <h1>{term}</h1> */}
      {/*  */}
      {/* <div className="searchPage__results"></div> */}
    </div>
  );
}

export default SearchPage;
