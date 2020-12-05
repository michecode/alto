import React from 'react';
import {navigate} from 'gatsby';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
import Paper from '@material-ui/core/Paper';
import PlantSuggestions from '../../data/PlantSuggestions';
import "fontsource-montserrat/400-normal.css";
import 'fontsource-montserrat/700-normal.css';
import "./SearchBar.css";

// && makes it take priority over the material-ui default styling
const StyledPaper = styled(Paper)`
  && {
    background-color: var(--magnolia);
    align-items: center;
    padding: 10px 5px;
    width: 75%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }
`

const Button = styled.button`
background-color: none;
  border: none;
  fill: var(--dark-text);
  margin-bottom: auto;
`;

const plantSuggestionRedirect = require("../../data/plantTable.json");

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : PlantSuggestions.filter(
        (lang) => lang.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => suggestion;

const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

export default function SearchBar() {
  const [value, setValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

  // Autosuggest is a controlled component.
  // This means that you need to provide an input value
  // and an onChange handler that updates this value (see below).
  // Suggestions also need to be provided to the Autosuggest,
  // and they are initially empty because the Autosuggest is closed.

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Searching function. Handles the reformat of the string and sends the user
  function submitSearch(value) {
    value = value.replace(/\W+/gim, "-");
    value = plantSuggestionRedirect[value];
    // history.push(`/plants/${value}`);
    navigate(`/plants/${value}`);
  }

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: "Search for plants",
    value,
    onChange: onChange,
    type: "search",
  };

  return (
    <StyledPaper>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={(_, { suggestionValue }) =>
          submitSearch(suggestionValue)
        }
        // onSuggestionSelected={console.log(value)}
        inputProps={inputProps}
      />

      <Button
        onClick={() => submitSearch(value)}
        aria-label="search"
      >
        <SearchIcon />
      </Button>
    </StyledPaper>
  );
}

function SearchIcon() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
      <path xmlns="http://www.w3.org/2000/svg" d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z"></path>
    </svg>
  )
}
