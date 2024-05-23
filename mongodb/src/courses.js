import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #fff;
  border-bottom: none;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${props => props.isSticky ? 'fixed' : 'relative'};
  top: 0;
  width: 100%;
  z-index: 999;
  transition: top 0.3s ease;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  margin-right: -20px;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #0070c9;
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
`;

const NavLink = styled.a`
  color: #333;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #0070c9;
  }
`;

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar isSticky={isSticky}>
      <Logo>MongoDB Veiledning</Logo>
      <NavMenu>
        <NavItem>
          <NavLink href="/">Hjem</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Kurs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Om</NavLink>
        </NavItem>
      </NavMenu>
    </Navbar>
  );
};

const ProductPageContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 1rem 0;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CardButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #0070c9;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005bb5;
  }
`;

const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductPageContainer>
        <Card>
          <CardImage src="https://a.storyblok.com/f/42126/47d7a4e46c/mongodb-the-complete-developers-guide.png" alt="MongoDB Course" />
          <CardTitle>MongoDB Course</CardTitle>
          <CardDescription>Learn MongoDB from scratch with our comprehensive course.</CardDescription>
          <CardButton href="/vid">Watch Here</CardButton>
        </Card>
        <Card>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>Stay tuned for more exciting courses!</CardDescription>
          <CardButton href="#">Watch Here</CardButton>
        </Card>
        <Card>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>Stay tuned for more exciting courses!</CardDescription>
          <CardButton href="#">Watch Here</CardButton>
        </Card>
      </ProductPageContainer>
    </>
  );
};

export default ProductPage;
