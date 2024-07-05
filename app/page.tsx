'use client';

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {Input} from '../components/Input';
import styled from 'styled-components';
import { FaUser, FaLock, FaEnvelope, FaSearch } from 'react-icons/fa';

const ShowcaseWrapper = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  min-height: 100vh;
  transition: background-color 0.3s ease;
`;

const TopButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
`;

const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  color: ${(props) => props.theme.buttonTextColor};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBackgroundColor};
  }
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const Showcase = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const theme = {
    backgroundColor: isDarkMode ? '#1a202c' : '#f7fafc',
    textColor: isDarkMode ? '#f7fafc' : '#1a202c',
    buttonBackgroundColor: isDarkMode ? '#4a5568' : '#e2e8f0',
    buttonTextColor: isDarkMode ? '#f7fafc' : '#1a202c',
    buttonHoverBackgroundColor: isDarkMode ? '#718096' : '#cbd5e0',
    inputBackgroundColor: isDarkMode ? 'transparent' : '#ffff',
    filledInputBackgroundColor: isDarkMode ? '#2d3748' : '#EDE9FE',
    filledInputFocusBackgroundColor: isDarkMode ? '#2d3748' : '#F5F3FF',
    inputBorderColor: isDarkMode ? '#4a5568' : 'grey',
    inputTextColor: isDarkMode ? '#f7fafc' : '#1a202c',
    placeholderColor: isDarkMode ? '#a0aec0' : '#718096',
    iconColor: isDarkMode ? '#a0aec0' : '#4a5568',
    helpTextColor: isDarkMode ? '#a0aec0' : '#718096',
    errorColor: '#f94449',
    warningColor: '#F59E0B',
    successColor: '#38a169',
    disabledBackgroundColor: isDarkMode ? 'rgba(74, 85, 104, 0.2)' : '#dfdfdf',
    disabledTextColor: isDarkMode ? '#718096' : '#a0aec0',
  };

  return (
    <ThemeProvider theme={theme}>
      <ShowcaseWrapper>
        <TopButtonsContainer>
          <ToggleButton onClick={() => setIsDarkMode(!isDarkMode)}>
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </ToggleButton>
          <ToggleButton onClick={toggleLoading}>
            Toggle Loading State
          </ToggleButton>
        </TopButtonsContainer>

        <Section>
          <SectionTitle>Basic Input Types</SectionTitle>
          <SectionDescription>Demonstrating various input types supported by our Input component.</SectionDescription>
          <InputGrid>
            <Input type="text" label="Text Input" placeholder="Enter text" isLoading={isLoading} />
            <Input type="password" label="Password Input" placeholder="Enter password" isLoading={isLoading} />
            <Input type="email" label="Email Input" placeholder="Enter email" isLoading={isLoading} />
            <Input type="number" label="Number Input" placeholder="Enter number" isLoading={isLoading} />
            <Input type="date" label="Date Input" isLoading={isLoading} />
            <Input type="time" label="Time Input" isLoading={isLoading} />
            <Input type="datetime-local" label="Datetime Input" isLoading={isLoading} />
            <Input type="month" label="Month Input" isLoading={isLoading} />
            <Input type="search" label="Search Input" placeholder="Enter search query" isLoading={isLoading} />
            <Input type="url" label="URL Input" placeholder="Enter URL" isLoading={isLoading} />
            <Input type="tel" label="Telephone Input" placeholder="Enter phone number" isLoading={isLoading} />
            <Input type="file" label="File Input" isLoading={isLoading} />
            <Input as="textarea" label="Textarea" placeholder="Enter multiline text" isLoading={isLoading}/>
          </InputGrid>
        </Section>

        <Section>
          <SectionTitle>Input Variants</SectionTitle>
          <SectionDescription>Different visual styles for the Input component.</SectionDescription>
          <InputGrid>
            <Input variant="normal" label="Normal Input" placeholder="Normal input" isLoading={isLoading} />
            <Input variant="outlined" label="Outlined Input" placeholder="Outlined input" isLoading={isLoading} />
            <Input variant="filled" label="Filled Input" placeholder="Filled input" isLoading={isLoading} />
            <Input variant="underlined" label="Underlined Input" placeholder="Underlined input" isLoading={isLoading} />
            <Input variant="rounded" label="Rounded Input" placeholder="Rounded input" isLoading={isLoading} />
            <Input variant="floating" label="Floating Label" placeholder="Floating label input" isLoading={isLoading} />
          </InputGrid>
        </Section>

        <Section>
          <SectionTitle>Input States</SectionTitle>
          <SectionDescription>Various states of the Input component.</SectionDescription>
          <InputGrid>
            <Input label="Disabled Input" placeholder="Disabled input" isDisabled={true} />
            <Input label="Read-only Input" placeholder="Read-only input" isReadOnly={true} value="This is read-only" />
            <Input label="Error State" placeholder="Error input" isError={true} validationMessage="This field has an error" />
            <Input label="Warning State" placeholder="Warning input" isWarning={true} validationMessage="This is a warning" />
            <Input label="Success State" placeholder="Success input" isSuccess={true} validationMessage="This is successful" />
            <Input label="Loading State" placeholder="Loading input" isLoading={isLoading} />
          </InputGrid>
        </Section>

        <Section>
          <SectionTitle>Input Features</SectionTitle>
          <SectionDescription>Additional features of the Input component.</SectionDescription>
          <InputGrid>
            <Input label="With Icon" placeholder="Enter username" icon={<FaUser />} isLoading={isLoading} />
            <Input label="With Prefix" placeholder="Enter amount" prefix="$" isLoading={isLoading} />
            <Input label="With Suffix" placeholder="Enter email" suffix="@example.com" isLoading={isLoading} />
          </InputGrid>
          <InputGrid>
            <Input label="Clearable Input" placeholder="Clearable text" clearable={true} isLoading={isLoading} />
            <Input label="With Help Text" placeholder="Enter text" helpText="This is some help text" isLoading={isLoading} />
            <Input label="With Character Limit" placeholder="Limited text" characterLimit={20} isLoading={isLoading} />
          </InputGrid>
        </Section>

        <Section>
          <SectionTitle>Complex Examples</SectionTitle>
          <SectionDescription>Combining multiple features of the Input component.</SectionDescription>
          <InputGrid>
            <Input
              label="Username"
              placeholder="Enter username"
              icon={<FaUser />}
              prefix="@"
              clearable={true}
              helpText="Your unique username"
              characterLimit={15}
              isLoading={isLoading}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter password"
              icon={<FaLock />}
              isError={true}
              validationMessage="Password must be at least 8 characters"
              isLoading={isLoading}
            />
            <Input
              type="email"
              label="Email Address"
              placeholder="Enter email"
              icon={<FaEnvelope />}
              suffix="@gmail.com"
              isSuccess={true}
              validationMessage="Email is valid"
              isLoading={isLoading}
            />
          </InputGrid>
            <Input
              type="search"
              label="Search"
              placeholder="Search..."
              icon={<FaSearch />}
              variant="outlined"
              clearable={true}
              isLoading={isLoading}
            />
        </Section>
      </ShowcaseWrapper>
    </ThemeProvider>
  );
};

export default Showcase;