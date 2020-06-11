import React from "react";

export const AppContext = React.createContext({});

export const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
  class WrappedComponent extends React.Component {
    componentDidMount() {
      this.context.store.subscribe(this.handleChange);
    }

    handleChange = () => {
      this.forceUpdate();
    };

    componentWillUnmount() {
      this.context.store.unsubscribe(this.handleChange);
    }

    render() {
      return (
        <Component
          {...this.props}
          {...mapStateToProps(this.context.store.getState())}
          {...mapDispatchToProps(this.context.store.dispatch)}
        />
      );
    }
  }

  WrappedComponent.contextType = AppContext;

  return WrappedComponent;
};
