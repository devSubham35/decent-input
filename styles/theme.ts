// // styles/theme.ts
// export const lightTheme = {
//     primaryColor: '#000',
//     secondaryColor: '#FFF',
//     backgroundColor: '#FFF', // White background for light mode
//     textColor: '#000',
//     inputBackgroundColor: '#FFF', // White background for inputs in light mode
//     inputBorderColor: '#CCC', // Greyish border color for inputs in light mode
//     buttonBackgroundColor: '#000',
//     buttonTextColor: '#FFF',
//     buttonHoverBackgroundColor: '#333',
//     affixColor: '#CCC',
//     placeholderColor: '#ccc',
//     filledInputBackgroundColor: '#EDE9FE',
//     filledInputFocusBackgroundColor: '#F5F3FF',
//   };
  
//   export const darkTheme = {
//     primaryColor: '#FFF',
//     secondaryColor: '#000',
//     backgroundColor: '#000', // Black background for dark mode
//     textColor: '#FFF',
//     inputBackgroundColor: '#333', // Dark background for inputs in dark mode
//     inputBorderColor: '#666', // Greyish border color for inputs in dark mode
//     buttonBackgroundColor: '#FFF',
//     buttonTextColor: '#000',
//     buttonHoverBackgroundColor: '#666',
//     affixColor: '#666',
//     placeholderColor: '#666',
//     filledInputBackgroundColor: '#26282B',
//     filledInputFocusBackgroundColor: '#26282B',
//   };
  


// # React Input Component

// This is a highly customizable and feature-rich Input component for React applications. It's built with TypeScript and styled-components, providing a flexible and reusable input field that can be easily integrated into various projects.

// ## Features

// - Multiple input types support (text, password, email, number, date, etc.)
// - Various visual variants (normal, outlined, filled, underlined, rounded, floating label)
// - Icon support
// - Prefix and suffix
// - Clearable input
// - Password visibility toggle
// - Loading state
// - Disabled and read-only states
// - Error, warning, and success states
// - Help text and validation messages
// - Character limit
// - Fully customizable styling

// ## Installation

// To use this component in your project, you need to have React and styled-components installed. If you haven't already, install them:

// ```bash
// npm install react styled-components
// npm install --save-dev @types/styled-components



/**
 * Props Documentation for Input Component
 * 
 * @prop {string} type - Input type (e.g., 'text', 'password', 'email', 'number', etc.)
 * @prop {string} label - Label text for the input
 * @prop {string} placeholder - Placeholder text for the input
 * @prop {boolean} isLoading - Whether the input is in a loading state
 * @prop {string} variant - Visual style variant ('normal', 'outlined', 'filled', 'underlined', 'rounded', 'floating')
 * @prop {boolean} isDisabled - Whether the input is disabled
 * @prop {boolean} isReadOnly - Whether the input is read-only
 * @prop {boolean} isError - Whether the input is in an error state
 * @prop {boolean} isWarning - Whether the input is in a warning state
 * @prop {boolean} isSuccess - Whether the input is in a success state
 * @prop {React.ReactNode} icon - Icon component to display with the input
 * @prop {string} prefix - Text or symbol to display before the input
 * @prop {string} suffix - Text or symbol to display after the input
 * @prop {boolean} clearable - Whether the input can be cleared
 * @prop {string} helpText - Additional help text to display below the input
 * @prop {number} characterLimit - Maximum number of characters allowed
 * @prop {string} validationMessage - Message to display for validation states (error, warning, success)
 * @prop {string} value - Controlled value for the input
 * @prop {function} onChange - Function to handle input changes
 */