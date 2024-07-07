This is a [Next.js](https://nextjs.org/) project

## Getting Started

# React Input Component

This is a highly customizable and feature-rich Input component for React applications. It's built with TypeScript and styled-components, providing a flexible and reusable input field that can be easily integrated into various projects.

## Features

- Multiple input types support (text, password, email, number, date, etc.)
- Various visual variants (normal, outlined, filled, underlined, rounded, floating label)
- Icon support
- Prefix and suffix
- Clearable input
- Password visibility toggle
- Loading state
- Disabled and read-only states
- Error, warning, and success states
- Help text and validation messages
- Character limit
- Fully customizable styling
- Theme configuration supported

## Installation

To use this component in your project, you need to 

Create React / Next Js app or existing use in existing project

```bash

  npm i decent-input styled-components react-icons
  yarn add decent-input styled-components react-icons
  
```


```bash

import { ThemeProvider } from 'styled-components';
import { Input, defaultDarkTheme, defaultLightTheme } from 'decent-input';

```

## Custom theme configuration supported


## React Input Component


| Prop                | Type                | Description                                            |
|---------------------|---------------------|--------------------------------------------------------|
| `type`              | `string`            | Input type (e.g., 'text', 'password', 'email', 'number', etc.) |
| `label`             | `string`            | Label text for the input                               |
| `placeholder`       | `string`            | Placeholder text for the input                         |
| `isLoading`         | `boolean`           | Whether the input is in a loading state                |
| `variant`           | `string`            | Visual style variant ('normal', 'outlined', 'filled', 'underlined', 'rounded', 'floating') |
| `isDisabled`        | `boolean`           | Whether the input is disabled                          |
| `isReadOnly`        | `boolean`           | Whether the input is read-only                         |
| `isError`           | `boolean`           | Whether the input is in an error state                 |
| `isWarning`         | `boolean`           | Whether the input is in a warning state                |
| `isSuccess`         | `boolean`           | Whether the input is in a success state                |
| `icon`              | `React.ReactNode`   | Icon component to display with the input               |
| `prefix`            | `string`            | Text or symbol to display before the input             |
| `suffix`            | `string`            | Text or symbol to display after the input              |
| `clearable`         | `boolean`           | Whether the input can be cleared                       |
| `helpText`          | `string`            | Additional help text to display below the input        |
| `characterLimit`    | `number`            | Maximum number of characters allowed                   |
| `validationMessage` | `string`            | Message to display for validation states (error, warning, success) |
| `value`             | `string`            | Controlled value for the input                         |
| `onChange`          | `function`          | Function to handle input changes                       |
| `setTheme`          | `string`            | Switch for Dark or Light Mode                       |



 ## Example
 ```ruby
 
"use client" /// for app router user
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Input, defaultDarkTheme, defaultLightTheme } from 'decent-input';

import { FaUser } from 'react-icons/fa';
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

const MyForm = () => {

  /// theme state
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  /// Change the theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  /// Set the theme
  const currentTheme = isDarkTheme ? defaultDarkTheme : defaultLightTheme;


  return (
    <ThemeProvider theme={currentTheme}>
      <div style={{ backgroundColor: currentTheme.primaryColor }} className='w-full min-h-screen flex flex-col justify-center items-center pt-20 transition-colors duration-300'>
 

        <div className='w-[90%] sm:w-[500px] md:w-[600px] xl:w-[30%]'>
          <h1 style={{ color: currentTheme.secondaryColor }} className='text-[22px] md:text-3xl font-bold mb-8 transition-colors duration-300 text-center'>Form Using decent-input</h1>

            <div style={{ backgroundColor: currentTheme.inputBackgroundColor }} className='w-full p-6 rounded-xl shadow-2xl flex flex-col gap-6 transition-colors duration-300'>
              <Input
                value="Enter User Name"
                type="text"
                name="userName"
                label="User Name"
                placeholder="Enter Your email"
                suffix='.com'
                icon={<FaUser />}
                setTheme={isDarkTheme ? 'dark' : 'light'}
              />

              <Input
                value="12345678"
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your Password"
                icon={<RiGitRepositoryPrivateFill />}
                setTheme={isDarkTheme ? 'dark' : 'light'}
              />

              <button 
                type="submit" 
                className={`${isDarkTheme ? 'bg-slate-800 hover:bg-slate-700' : 'bg-violet-500 hover:bg-violet-600'} 
                  text-white font-bold py-[13px] px-4 rounded transition-colors duration-300`}
              >
                Submit
              </button>
            </div>
        </div>

      </div>
    </ThemeProvider>
  );
};

export default MyForm;

```

