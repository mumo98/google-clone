import React, { useState } from "react";
import "./Search.css";
import { SearchIcon } from "@material-ui/icons/Search";
import { MicIocn } from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

// the history hooks below pushs your search into the browsers history
import { useHistory } from "react-router-dom";
// ths hooks will help in dealing with the data layer
import { useStateValue } from "../state/StateProvider";
// this imports the the actions types to be dispathecd from the reducer
import { actionTypes } from "../state/reducer";

function Search({ hideButtons = false }) {
  //thus useStateValue  hooks gives the sate of the data layer and the dispathc to be used to shoot action into the data layer
  //   const [state, dispatch] = useStateValue();
  // the state of the dat layer has to be broken so to acces the term thus the use of the '{}'
  const [{}, dispatch] = useStateValue();
  //
  const [input, setInput] = useState("");
  const history = useHistory();
  //
  //
  const search = (e) => {
    e.preventDefault();
    console.log("you hit search btn >> ", input);

    // the type of the action to be dispathced
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      // refer to the switc case where the switch case was used
      // so modifying the term ensures that the searched term is used pushed into the data layer
      term: input,
    });
    // the history hooks below pushs your search into the browser
    history.push("./search");
  };
  //
  //
  return (
    <form action="" className="search">
      <div className="search">
        <div className="search__input">
          {/* <SearchIcon className="search__inputIcon" /> */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <MicIcon className="/> */}
        </div>

        {!hideButtons ? (
          <div className="search__buttons">
            {/* the material icons buttons are good bc hey give ouine variant */}
            <Button type="submit" onClick={search} variant="outlined">
              Google Search
            </Button>
            <Button onClick={search} variant="outlined">
              I'm Feeling Lucky
            </Button>
          </div>
        ) : (
          <div className="search__buttons">
            {/* the material icons buttons are good bc hey give ouine variant */}
            <Button
              className="search__buttonsHidden"
              type="submit"
              onClick={search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button
              className="search__buttonsHidden"
              onClick={search}
              variant="outlined"
            >
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default Search;
