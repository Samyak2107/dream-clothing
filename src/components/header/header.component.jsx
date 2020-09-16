import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/clouds.svg';
import { Avatar } from '@material-ui/core';
import { auth } from '../../components/firebase/firebase';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (<div className='header'>
    <Link className='logo-container' to='/'>
        <Logo className='logo' />
    </Link>
    <div className='options'>
       <Link className='option' to='/shop'>SHOP</Link>
       <Link className='option' to='/shop'>CONTACT</Link>
       {
           currentUser ?
           <div className='option'>
               <Avatar alt='userpic' src={currentUser?.photoURL} />
               </div>
           :<Link className='option' to='/signin'>SIGN IN</Link>
       }
       {
         currentUser ?
         <div className='option'>
           {['Primary'].map(
    (variant) => (
      <DropdownButton
        key={variant}
        id={`dropdown-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={currentUser?.displayName}
      >
        <Dropdown.Item eventKey="1" onClick={() => auth.signOut()}>SIGN OUT</Dropdown.Item>
      </DropdownButton>
    ),
  )}
         </div> 
         : <div className='option'>Guest</div>
       }
       <CartIcon />
    </div>
    {hidden ? null :<CartDropdown />}
</div>)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
   currentUser,
   hidden
})

export default connect(mapStateToProps)(Header);
