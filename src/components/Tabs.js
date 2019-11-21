import React, { Component } from "react";

import Tab from "../components/Tab";

/* Learned from https://alligator.io/react/tabs-component/ */
class Tabs extends Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };

  handleClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      handleClickTabItem,
      props: { children },
      state: { activeTab },
    } = this; // interesting way of declaring all variables in one go

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={handleClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if( child.props.label !== activeTab) return undefined; // only shows active tab content
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
