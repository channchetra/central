import Container from 'components/container';

// import styles from './Header.module.scss';

const Header = ({ children }) => {
   <header>
      <Container>{children}</Container>
    </header>
};

export default Header;