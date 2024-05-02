import React from 'react';
import styled from 'styled-components';
import Vid from './veed.mp4'; // Correct the path to the video file

const Container = styled.div`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roblox, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f5f5f5;
  padding-bottom: 4rem;
`;

const Navbar = styled.nav`
  background-color: #fff;
  border-bottom: none;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #47a248; /* MongoDB Green */
`;

const Footer = styled.footer`
  background-color: #fff;
  border-top: 1px solid #ddd;
  padding: 1.5rem 2rem;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const CommandsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 2rem;
`;

const CommandItem = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  position: relative;
`;

const CommandTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #0070c9; /* MongoDB Blue */
`;

const CommandText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #47a248; /* MongoDB Green */
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3a942b; /* Darker MongoDB Green */
  }
`;

const VideoPage = () => {
  const commands = [
    'sudo apt-get install gnupg curl',
    'curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor',
    'echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list',
    'sudo apt-get update',
    'sudo apt-get install -y mongodb-org',
    'sudo systemctl start mongod',
    'sudo systemctl daemon-reload',
    'sudo systemctl status mongod',
    'sudo systemctl enable mongod',
    'sudo systemctl restart mongod',
    'mongosh',
    'exit',
    'sudo nano /etc/mongod.conf',
    'mongosh [IP]',
    'sudo systemctl restart mongod',
    'mongosh [IP]'
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Command copied to clipboard!');
  };

  return (
    <Container>
      <Navbar>
        <Logo>MongoDB Veiledning</Logo>
        {/* Add navigation links if needed */}
      </Navbar>
      <video src={Vid} controls />
      <CommandsContainer>
        {commands.map((command, index) => (
          <CommandItem key={index}>
            <CommandTitle>Command {index + 1}:</CommandTitle>
            <CommandText>{command}</CommandText>
            <CopyButton onClick={() => handleCopy(command)}>Copy</CopyButton>
          </CommandItem>
        ))}
      </CommandsContainer>
      <Footer>
        <p>&copy; 2023 MongoDB Veiledning. Alle rettigheter reservert.</p>
      </Footer>
    </Container>
  );
};

export default VideoPage;
