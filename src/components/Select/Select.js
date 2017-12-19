import React, { PureComponent } from 'react';

import Container from './Container';
import MenuOuter from './MenuOuter/MenuOuter';

/**
 * @component
 */

class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Container onClick={this.toggle}>
        123
        {
          this.state.isOpen &&
            <MenuOuter onClick={e => e.stopPropagation()} />
        }
      </Container>
    );
  }
}

export default Select;
