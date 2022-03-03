import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <h1>BeSpoked Bikes</h1>
        <hr />
        <div className="links">
          <NavLink to="/" className="link" activeClassName="active" exact>
            All
          </NavLink>
          <NavLink to="/salesperson" className="link" activeClassName="active" exact>
            SalesPerson
          </NavLink>
          <NavLink to="/customer" className="link" activeClassName="active" exact>
            Customer
          </NavLink>
          <NavLink to="/sales" className="link" activeClassName="active" exact>
            Sales
          </NavLink>
          <NavLink to="/add" className="link" activeClassName="active">
            Add
          </NavLink>
        </div>
      </header>
    );
  };
  
  export default Header;