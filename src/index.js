//import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";

import { ImportCSV } from "./import-csv";
import { showMatches } from "./show-matches";

class App extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      leads: [],
      contacts: [],
      newLeads: []
    };
  }

  updateData(data, importType) {
    switch (importType) {
      case "Leads":
        this.setState({
          leads: data
        });
        break;
      case "Contacts":
        this.setState({
          contacts: data
        });
        break;
      case "New Leads":
        this.setState({
          newLeads: data
        });
        break;
    }
  }

  render() {
    return (
      <div>
        <ImportCSV
          updateData={data => this.updateData(data, "Leads")}
          importType="Leads"
        />
        <ImportCSV
          updateData={data => this.updateData(data, "Contacts")}
          importType="Contacts"
        />
        <ImportCSV
          updateData={data => this.updateData(data, "New Leads")}
          importType="New Leads"
        />
        <div>
          {showMatches(this.state.contacts, this.state.newLeads, "Contacts")}
        </div>
        <div>{showMatches(this.state.leads, this.state.newLeads, "Leads")}</div>
      </div>
    );
  }
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
