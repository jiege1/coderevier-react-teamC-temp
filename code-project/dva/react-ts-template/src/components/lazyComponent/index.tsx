
import React from 'react';

const lazyComponent = (path: string): React.ComponentType => {

  return class extends React.Component<{}, { component: any }> {

    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    public async componentDidMount() {
      import('pages/' + path).then(res => {
        this.setState({
          component: res.default,
        });
      }).catch(res => {
        console.error('lazyComponent error:', res);
      });
    }

    public render() {
      const { component } = this.state;
      if (component) {
        const C = component;
        return <C {...this.props} />;
      }
      return <div>加载中。。。</div>;
    }

  };

};

export default lazyComponent;
