import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import vid from "./veed.mp4";

const Container = styled.div`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roblox, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f5f5f5;
  padding-bottom: 4rem; /* Legger til mer plass nederst */
`;

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
  transition: top 0.3s ease; /* Legg til en overgangsstil for animasjon */
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  margin-right: -20px; /* Flytt knappene nærmere midten */
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

const Main = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  margin-top: 5em;
`;

const ProductImage = styled.img`
  width: 50%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductDetails = styled.div`
  width: 45%;
`;

const ProductTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #0070c9;
`;

const ProductDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
`;

const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const BuyNowButton = styled.a`
  display: inline-block;
  background-color: #4db33d; /* MongoDB Green */
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3a942b; /* Mørkere nyanse av MongoDB Green */
  }
`;

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  margin-top: 10rem; /* Legger til mer plass øverst */
`;

const AboutContentContainer = styled.div``;

const AboutTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #0070c9;
`;

const AboutContent = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #555;
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  background-color: #fff;
  border-top: 1px solid #ddd;
  padding: 1.5rem 2rem;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 4rem; /* Legger til mer plass øverst */
`;

function App() {
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

  const product = {
    title: 'MongoDB Mesterklasse: Den komplette MongoDB-kurset',
    description:
      'Lær MongoDB fra grunnen av og bli en MongoDB-ekspert! Denne omfattende kurset dekker alt du trenger å vite om MongoDB.',
    price: '$0,  only for jens',
    image:'https://webimages.mongodb.com/_com_assets/cms/kykgzd0sd3qiv9n36-atlas-hero.svg?auto=format%252Ccompress',
  };

  const aboutContent = `MongoDB er en dokumentorientert NoSQL-database som brukes for lagring av høyvolumdata. 
    Den er fleksibel, skalerbar og gir høy ytelse. MongoDB fungerer på konseptet med samlinger 
    og dokumenter. Den er skrevet i C++ og har ulike funksjoner som full indekseringsstøtte, replikering 
    og høy tilgjengelighet.`;

  return (
    <Container>
      <Navbar isSticky={isSticky}>
        <Logo>MongoDB Veiledning</Logo>
        <NavMenu>
          <NavItem>
            <NavLink href="#">Hjem</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Kurs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Om</NavLink>
          </NavItem>
        </NavMenu>
      </Navbar>
      <Main>
        <ProductSection>
          <ProductImage src={product.image} alt="Produkt" />
          <ProductDetails>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>{product.price}</ProductPrice>
            <BuyNowButton href="/vid">Se nå!</BuyNowButton>
          </ProductDetails>
        </ProductSection>
        <AboutSection>
          <AboutContentContainer>
            <AboutTitle>Om MongoDB</AboutTitle>
            <AboutContent>{aboutContent}</AboutContent>
          </AboutContentContainer>
          <AboutImage src="https://a.storyblok.com/f/42126/47d7a4e46c/mongodb-the-complete-developers-guide.png" alt="Om MongoDB" />
        </AboutSection>
      </Main>
      <Footer>
        <p>&copy; 2023 MongoDB Veiledning. Alle rettigheter reservert.</p>
      </Footer>
    </Container>
  );
}

export default App;
