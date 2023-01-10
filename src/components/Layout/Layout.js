import React, {Component} from 'react'
import Auxilary from '../../hoc/Auxilary'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';


class Layout extends Component {
  state={
    showSideDrawer: false
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return(
      {showSideDrawer: !prevState.showSideDrawer}
      )
    });
  }

  sideDrawerCloseHandler = ()  =>  {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <Auxilary>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
        open={this.state.showSideDrawer} 
        close={this.sideDrawerCloseHandler} />
        <main className='Content'>
          {this.props.children}
        </main>
      </Auxilary>
    )
  }
}
export default Layout;