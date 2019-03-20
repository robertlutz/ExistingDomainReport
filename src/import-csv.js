import React, { Component } from "react";

import { CSVReader } from "react-papaparse";

export class ImportCSV extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      rowCount: 0
    };
  }

  handleReadCSV(data) {
    this.props.updateData(data.data.map(a => anythingToString(a.Email)));
    this.setState({
      rowCount: data.data.length
    });
  }

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleImportOffer = () => {
    this.fileInput.current.click();
  };

  render() {
    return (
      <div>
        <CSVReader
          onFileLoaded={this.handleReadCSV.bind(this)}
          inputRef={this.fileInput}
          style={{ display: "none" }}
          onError={this.handleOnError}
          configOptions={{ header: true /* Header row support */ }}
        />
        <button onClick={this.handleImportOffer}>
          {this.props.importType} Import
        </button>
        <p>
          {this.state.rowCount} {this.props.importType}
        </p>
      </div>
    );
  }
}

function anythingToString(value) {
  if (value == null) {
    return "";
  }
  return value.toString();
}
