import React from 'react';

const Qheader = (props) => {
  return (
    <header className="App-header">
      <h1>Welcome to the Random Quiz Generator!</h1>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="menuContainer">
        <div className="menuDiv">
          <label>Select category:</label><br></br>
          <select onChange={props.selectCategory}>
            <option></option>
            <option value="9">General knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals and Theaters</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="29">Entertainment: Comics</option>
            <option value="17">Science and Nature</option>
            <option value="18">Computers</option>
            <option value="19">Mathematics</option>
            <option value="30">Gadgets</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
          </select>
        </div>

        <div className="menuDiv">
          <label>Select difficulty:</label><br></br>
          <select onChange={props.selectDifficulty}>
            <option></option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="menuDiv">
          <label>Select number of questions:</label><br></br>
          <select onChange={props.selectQuestions}>
            <optgroup>
              <option></option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div id="boo"></div>
    </header>
  );
}

export default Qheader;