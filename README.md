This is a [Next.js](https://nextjs.org/) project

## Getting Started

First, run the development server :
yarn dev

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

## Installation

To use this component in your project, you need to have React and styled-components installed. If you haven't already, install them:


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



 ## Example
 ```ruby

import React, { useState } from 'react';
import Input from 'decent-input';

const MyForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // You can add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
        helpText="Enter a valid email address"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        validationMessage="Password must be at least 8 characters long"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
```

