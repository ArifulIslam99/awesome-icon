import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import "./icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import resetfig from "../../figures/reset.png";
import { Button, Form } from "react-bootstrap";
const Icons = () => {
  var [icons, setIcons] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch("/icons.json")
      .then((res) => res.json())
      .then((data) => setIcons(data));
  }, []);
  const [selectedOption, setSelectedOption] = useState("");
  const [search, setSearch] = useState("");
  var filterData = [];

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (search === "brands" || search === "free") {
        var searchOperation;
        if (search === "brands") {
          searchOperation = icons.filter((ic) => ic.brands === true);
        } else if (search === "free") {
          searchOperation = icons.filter((ic) => ic.free === true);
        }
        setIcons(searchOperation);
      } else {
        const searchOperation = icons.filter((ic) =>
          ic.class.toLowerCase().includes(search.toLowerCase())
        );
        setIcons(searchOperation);
      }
    }
  };
  var sortedData = null;
  if (sortType) {
    if (sortType === "ascending") {
      sortedData = icons.slice().sort((a, b) => a.class.localeCompare(b.class));
    }
    if (sortType === "descending") {
      sortedData = icons.slice().sort((a, b) => b.class.localeCompare(a.class));
    }
  }
  if (selectedOption != null) {
    var showFilteredData = [];
    if (selectedOption === "brand") {
      filterData = icons.filter((ic) => ic.brands === true);
      showFilteredData.push(filterData);
    } else if (selectedOption === "classic") {
      filterData = icons.filter((ic) => ic.classic === true);
      showFilteredData.push(filterData);
    } else if (selectedOption === "free") {
      filterData = icons.filter((ic) => ic.free === true);
      showFilteredData.push(filterData);
    }
  }
  const clearSearch = () => {
    setSearch("");
    window.location.reload();
  };

  return (
    <div>
      {/* Implementing Search Bar*/}
      <div className="input-group mb-3 w-50 mx-auto">
        <input
          style={{
            height: "50px",
            border: "1px solid grey",
            borderRadius: "10px",
          }}
          type="text"
          className="form-control"
          placeholder="Search Icons"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleSearch}
        />
        {search && (
          <button
            className="btn "
            type="button"
            id="button-addon2"
            onClick={clearSearch}
          >
            <FontAwesomeIcon icon={faDeleteLeft} size="xl" />
          </button>
        )}
      </div>

      {/* Filtering Menu */}

      <div className="filterDiv mx-auto">
        <div className="App">
          <div className="menu">
            <div
              className={`menu-option ${
                selectedOption === "classic" ? "selected" : ""
              }`}
              onClick={() => setSelectedOption("classic")}
            >
              Classic
            </div>
            <div
              className={`menu-option ${
                selectedOption === "brand" ? "selected" : ""
              }`}
              onClick={() => setSelectedOption("brand")}
            >
              Brand
            </div>
            <div
              className={`menu-option ${
                selectedOption === "free" ? "selected" : ""
              }`}
              onClick={() => setSelectedOption("free")}
            >
              Free
            </div>
            {selectedOption && (
              <div className="reset">
                <Button
                  onClick={() => setSelectedOption("")}
                  className="btn-secondary"
                >
                  <img className="w-75" src={resetfig} alt="" />
                </Button>
              </div>
            )}
          </div>
          {/* Display content based on the selected option */}
        </div>

        <div className="selectForm">
          <Form.Select
            value={sortType}
            onChange={(event) => setSortType(event.target.value)}
            
          >
            <option>Sorted View</option>
            <option value="ascending">A-Z</option>
            <option value="descending">Z-A</option>
          </Form.Select>
        </div>
      </div>

      {/* Showing Icons from JsonData */}
      <div className="mx-4">
        <div className="icons-container center-div width-85">
          { 
          sortedData!==null ? (
            sortedData.map((icon) => <Icon key={icon.id} icon={icon}></Icon>)
          ):
          selectedOption !== ""
            ? filterData.map((icon) => <Icon key={icon.id} icon={icon}></Icon>)
            : icons.map((icon) => <Icon key={icon.id} icon={icon}></Icon>)}
        </div>
      </div>
    </div>
  );
};

export default Icons;
