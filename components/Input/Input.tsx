import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { defaultLightTheme, defaultDarkTheme } from "./theme"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setTheme?: string;
  type?: string;
  as?: string;
  label?: string;
  helpText?: string;
  icon?: any;
  clearable?: boolean;
  validationMessage?: string;
  characterLimit?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  variant?: 'normal' | 'floating' | 'outlined' | 'filled' | 'underlined' | 'rounded';
  isHoveredOutline?: boolean;
  isFocusedOutline?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  inputStyle?: React.CSSProperties;
}

const baseBorderColor = (props: any) => props.theme.inputBoxBorder || (props?.setTheme === "dark" ? defaultDarkTheme?.inputBoxBorder : defaultLightTheme?.inputBoxBorder)
const focusBorderColor = (props: any) => props.theme.focusBorderColor || (props?.setTheme === "dark" ? defaultDarkTheme?.focusBorderColor : defaultLightTheme?.focusBorderColor)
const hoverBorderColor = (props: any) => props.theme.hoverBorderColor || (props?.setTheme === "dark" ? defaultDarkTheme?.hoverBorderColor : defaultLightTheme?.hoverBorderColor);

const errorColor = (props: any) =>
  props.theme.errorColor ||
  (props?.setTheme === "dark" ? defaultDarkTheme?.errorColor : defaultLightTheme?.errorColor);

const warningColor = (props: any) =>
  props.theme.warningColor ||
  (props?.setTheme === "dark" ? defaultDarkTheme?.warningColor : defaultLightTheme?.warningColor);

const successColor = (props: any) =>
  props.theme.successColor ||
  (props?.setTheme === "dark" ? defaultDarkTheme?.successColor : defaultLightTheme?.successColor);

const validationMessageColor = (props: any) =>
  props.state === 'warning' ? props.theme.errorColor || warningColor(props) :
    props.state === 'success' ? props.theme.successColor || successColor(props) :
      props.state === 'warning' ? props.theme.warningColor || errorColor(props) :
        props.theme.validationMessageColor || (props?.setTheme === "dark" ? defaultDarkTheme?.validationMessageColor : defaultLightTheme?.validationMessageColor)

const statusBorderColor = (props: any) =>
  props?.isWarning ? warningColor(props) :
    props?.isSuccess ? successColor(props) :
      props?.isError ? errorColor(props) :
        baseBorderColor(props);

const hoverStatusBorderColor = (props: any) =>
  props?.isWarning ? warningColor(props) :
    props?.isSuccess ? successColor(props) :
      props?.isError ? warningColor(props) :
        hoverBorderColor(props);

const filledBgColor = (props: any) => props.theme.filledBackgroundColor || (props?.setTheme === "dark" ? defaultDarkTheme?.filledBackgroundColor : defaultLightTheme?.filledBackgroundColor)
const affixBgColor = (props: any) => props.theme.affixBackgroundColor || (props?.setTheme === "dark" ? defaultDarkTheme?.affixBackgroundColor : defaultLightTheme?.affixBackgroundColor)
const affixColor = (props: any) => props.theme.affixColor || (props?.setTheme === "dark" ? defaultDarkTheme?.affixColor : defaultLightTheme?.affixColor)
const disabledBgColor = (props: any) => props.theme.disabledBackgroundColor || (props?.setTheme === "dark" ? defaultDarkTheme?.disabledBackgroundColor : defaultLightTheme?.disabledBackgroundColor)

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  position: relative;
  z-index: 0;
  width: 100%;
`;

const Label = styled.label<{
  setTheme?: string;
  variant: string;
  isFocused: boolean;
  hasValue: boolean;
  isError?: boolean;
}>`
  margin-bottom: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
  font-size: 14px;
  color: ${props => props.theme.labelColor || (props?.setTheme === "dark" ? defaultDarkTheme?.labelColor : defaultLightTheme?.labelColor)}
  
  ${props => props.variant === 'floating' && css`
    width: fit-content;
    position: absolute;
    z-index: 10;
    left: 10px;
    background-color: ${props => props.theme.primaryColor};
    padding: 0 8px;
    font-size: ${props.isFocused || props.hasValue ? '12px' : '14px'};
    transform: translateY(${props.isFocused || props.hasValue ? '2px' : '-50%'});
    top: ${props.isFocused || props.hasValue ? '-8px' : '50%'};
  `}
`;

const InputContainer = styled.div<{
  setTheme?: string;
  variant: string;
  isHoveredOutline?: boolean;
  isFocusedOutline?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  as: string;
}>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.variant === 'floating' || props.variant === 'underlined')  ? 'transparent' : props.theme.inputBackgroundColor || "transparent"};

  border-left: ${props => props.variant === 'underlined' ? 'none' : ''};
  border-right: ${props => props.variant === 'underlined' ? 'none' : ''};
  border-top: ${props => props.variant === 'underlined' ? 'none' : ''};
  border-bottom: ${props => props.variant === 'underlined' ? '2px' : ''} solid ${statusBorderColor};
  border: ${props => props.variant === 'outlined' ? '2px' : props.variant === 'underlined' ? 'none' : '1px'} solid ${statusBorderColor};

  ${props => props.isHoveredOutline && !props.isLoading && !props.isDisabled && !props.isReadOnly && css`
    &:hover {
      border-radius: ${props.variant === 'rounded' ? '8px' : '0px'};
      border-left: ${props.variant === 'underlined' ? 'none' : ''};
      border-right: ${props.variant === 'underlined' ? 'none' : ''};
      border-top: ${props.variant === 'underlined' ? 'none' : ''};
      border-bottom: ${props.variant === 'underlined' ? '2px' : ''} solid ${statusBorderColor};
      border: ${props.variant === 'outlined' ? '2px' : props.variant === 'underlined' ? 'none' : '1px'} solid ${hoverStatusBorderColor};
    }
  `}

  ${props => props.isFocusedOutline && css`
    &:focus-within {
      outline: none;
      border-radius: ${props.variant === 'rounded' ? '8px' : '0px'};
      border-left: ${props.variant === 'underlined' ? 'none' : ''};
      border-right: ${props.variant === 'underlined' ? 'none' : ''};
      border-top: ${props.variant === 'underlined' ? 'none' : ''};
      border-bottom: ${props.variant === 'underlined' ? '2px' : ''} solid ${props.isReadOnly ? baseBorderColor : focusBorderColor};
      border: ${props.variant === 'outlined' ? '2px' : props.variant === 'underlined' ? 'none' : '1px'} solid ${props.isReadOnly ? baseBorderColor : focusBorderColor};
    }
  `}

  ${props => (props.variant === 'normal' || props.variant === 'rounded' || props.variant === 'outlined' || props.variant === 'underlined'|| props.variant === "filled" || props.variant === "floating") && css`
      background-color: ${props.variant === 'filled' ? filledBgColor : 
       ( props.variant === 'floating' || props.variant === 'underlined') ? 'transparent' :
          'transparent'};
      border-radius: ${props.variant === 'rounded' ? '8px' : '0px'};
      &:focus-within {
        background-color: ${props.variant === 'filled' ? filledBgColor :
        ( props.variant === 'floating' || props.variant === 'underlined') ? 'transparent' :
          'transparent'};
        opacity: ${props.variant === 'filled' ? '0.8' : '1'};
      }
    `}

  ${props => props.isDisabled && css`
    outline: none;
    cursor: not-allowed;
    background-color: ${disabledBgColor};
    opacity: 0.5;
  `}

  ${props => props.isLoading && css`
    border:${props.variant === 'underlined' ? "0px 0px 2px 0px" : "1px"} solid rgb(226, 232, 240, 0.2);
    outline: none;
    cursor: not-allowed;
  `}
`;

const InputTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input<{ isDisabled?: boolean; variant: string; setTheme: string; }>`
  display: flex;
  align-items: center;
  padding: ${props => props.as === 'textarea' ? '10px' : '0px 10px'};
  border: 0px;
  font-size: 14px;
  background-color: transparent;

  color: ${props => props.theme.inputTextColor || (props?.setTheme === "dark" ? defaultDarkTheme?.inputTextColor : defaultLightTheme?.inputTextColor)};

  ${props => props.isDisabled && css`
    cursor: not-allowed;
  `}

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${props => props.theme.placeholderColor || (props?.setTheme === "dark" ? defaultDarkTheme?.placeholderColor : defaultLightTheme?.placeholderColor)};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }

  ${props => props.as === 'textarea' && css`
    resize: vertical;
    min-height: 100px;
  `}

  &[type="date"],
  &[type="datetime-local"],
  &[type="time"] {
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      right: 10px;
      cursor: pointer;
      filter: ${props => props.setTheme === "dark" ? "invert(1) brightness(200%) contrast(90%)" : "none"};
      opacity: ${props => props.setTheme === "dark" ? "0.7" : "1"};
    }
`;


const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  padding: 0px 15px;
  border: none;
  color: ${props => props.theme.iconColor || '#4a5568'};
  background-color: transparent;
`;

const Affix = styled.div<{ isDisabled?: boolean; variant?: string; setTheme?: string, }>`
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;

  color: ${affixColor};
  background-color: ${affixBgColor};

  ${props => props.isDisabled && css`
    background-color: ${props.theme.disabledAffixBackgroundColor || 'transparent'};
    cursor: not-allowed;
  `}
`;

const ClearButton = styled.button< { setTheme?: string } >`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  padding: 0px 5px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.clearButtonColor || (props?.setTheme === "dark" ? defaultDarkTheme?.clearButtonColor : defaultLightTheme?.clearButtonColor)};
`;

const EyeIcon = styled.button<{ setTheme?: any }>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  padding: 0px 5px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.passwordShowIcon || (props?.setTheme === "dark" ? defaultDarkTheme?.passwordShowIcon : defaultLightTheme?.passwordShowIcon)};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Spinner = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid ${props => props.theme.loadingColor || '#1D4ED8'};
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 5px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const HelpText = styled.p<{ setTheme?: string }>`
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.helpTextColor || (props?.setTheme === "dark" ? defaultDarkTheme?.helpTextColor : defaultLightTheme?.helpTextColor)};
`;

const ValidationMessage = styled.p`
  margin-top: 5px;
  font-size: 13px;
  font-weight: 500;
  color: ${validationMessageColor};
`;

const CharacterCount = styled.p<{ setTheme?: string }>`
  width: fit-content;
  margin-top: 3px;
  font-size: 12px;
  text-align: right;
  color: ${props => props.theme.characterCountColor || (props?.setTheme === "dark" ? defaultDarkTheme?.characterCountColor : defaultLightTheme?.characterCountColor)};
`;

const BottomContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    setTheme = "light",
    type = "text",
    label,
    helpText,
    icon,
    clearable,
    validationMessage,
    characterLimit,
    prefix,
    suffix,
    variant = 'normal',
    isHoveredOutline = true,
    isFocusedOutline = true,
    isDisabled,
    isReadOnly,
    isError,
    isWarning,
    isSuccess,
    isLoading,
    style,
    inputStyle,
    ...props
  }, ref) => {
    const [inputValue, setInputValue]: any = useState(props.value || '');
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const inputId = `input-${Math.random().toString(36).substring(7)}`;

    const handleFocus = (e: any) => {
      setIsFocused(true);
      if (props.onFocus) props.onFocus(e);
    };

    const handleBlur = (e: any) => {
      setIsFocused(false);
      if (props.onBlur) props.onBlur(e);
    };

    /// Onchange function
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (!characterLimit || newValue.length <= characterLimit) {
        setInputValue(newValue);
        if (props.onChange) {
          props.onChange(e);
        }
      }
    };

  //// For clear the input
    const handleClear = () => {
      setInputValue('');
      if (props.onChange) {
        const event = { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>;
        props.onChange(event);
      }
    };

    //// For Forgot password
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <InputWrapper style={style} >
        {label && (
          <Label
            setTheme={setTheme}
            htmlFor={inputId}
            variant={variant}
            isFocused={isFocused}
            hasValue={!!inputValue}
            isError={isError}
          >
            {label}
          </Label>
        )}
        <InputContainer
          style={style}
          setTheme={setTheme}
          variant={variant}
          isHoveredOutline={isHoveredOutline}
          isFocusedOutline={isFocusedOutline}
          isDisabled={isDisabled || isLoading}
          isReadOnly={isReadOnly}
          isError={isError}
          isWarning={isWarning}
          isSuccess={isSuccess}
          isLoading={isLoading}
        >
          {prefix && <Affix setTheme={setTheme} variant={variant} isDisabled={isDisabled || isLoading}
            style={{ height: `${style?.height ? style?.height : "50px"}`, borderRight: `${variant === "filled" ? '1px solid #718096' : null}` }} >{prefix}</Affix>}

          <InputTextContainer>
            {icon && <IconWrapper>{icon}</IconWrapper>}
            <StyledInput
              {...props}
              setTheme={setTheme}
              variant={variant}
              type={type === "password" ? (showPassword ? "text" : "password") : type}
              style={{
                ...inputStyle,
                width: "100%",
                minHeight: `${style?.height ? style?.height : "50px"}`,
              }}
              isDisabled={isDisabled || isLoading}
              disabled={isDisabled || isLoading}
              readOnly={isReadOnly}

              id={inputId}
              ref={ref}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={variant === "floating" ? isFocused ? props.placeholder : '' : props.placeholder}
              onKeyDown={(e) =>
                type === "number" && (["e", "E", "+", "-"].includes(e.key) && e.preventDefault())
              }
              aria-describedby={`${inputId}-helpText ${inputId}-validationMessage`}
              aria-invalid={isError}
            />
            {type === "password" && !isReadOnly && (
              <EyeIcon
                type="button"
                onClick={togglePasswordVisibility}
                setTheme={setTheme}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </EyeIcon>
            )}
            {clearable && inputValue && !isLoading && !isReadOnly && (
              <ClearButton type="button" onClick={handleClear} setTheme={setTheme} > ✕ </ClearButton>
            )}
          </InputTextContainer>

          {suffix && <Affix setTheme={setTheme} variant={variant} isDisabled={isDisabled || isLoading}
            style={{ height: `${style?.height ? style?.height : "50px"}`, borderLeft: `${variant === "filled" ? '1px solid #718096' : null}` }}>{suffix}</Affix>}

        </InputContainer>
        <BottomContent>
          {(helpText || isLoading) && (
            <HelpText id={`${inputId}-helpText`} setTheme={setTheme}>
              {isLoading ? (
                <>
                  <Spinner />
                  Please wait...
                </>
              ) : (
                helpText
              )}
            </HelpText>
          )}
          {validationMessage && !isLoading && (
            <ValidationMessage
              id={`${inputId}-validationMessage`}
            >
              {validationMessage}
            </ValidationMessage>
          )}
          {characterLimit && !isLoading && (
            <CharacterCount setTheme={setTheme} >
              {inputValue?.length}/{characterLimit}
            </CharacterCount>
          )}
        </BottomContent>
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';
export default Input;