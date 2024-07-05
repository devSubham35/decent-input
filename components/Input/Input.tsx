import React, { useState } from "react";
import styled, { css } from 'styled-components';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 0px;
  position: relative;
  width: fit-content;
`;

const Label = styled.label<{
  variant: string;
  isFocused: boolean;
  hasValue: boolean;
  isError?: boolean;
}>`
  margin-bottom: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
  font-size: 14px;
  
  ${props => props.variant === 'floating' && css`
    position: absolute;
    z-index: 10;
    left: 10px;
    background-color: ${props.theme.backgroundColor};
    padding: 0 5px;
    font-size: ${props.isFocused || props.hasValue ? '12px' : '14px'};
    color: ${props.isError
      ? props.theme.errorColor || '#f94449'
      : props.isFocused || props.hasValue
        ? props.theme.textColorLight
        : props.theme.textColor};
    transform: translateY(${props.isFocused || props.hasValue ? '2px' : '-50%'});
    top: ${props.isFocused || props.hasValue ? props.theme.floatingLabelTop || '-8px' : '50%'};
  `}
`;

const InputContainer = styled.div<{
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
  min-height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: ${props => props.theme.inputBackgroundColor || 'transparent'};
  border: 1px solid ${props => props.theme.inputBorderColor || '#dfdfdf'};
  border-radius: 4px;
  padding: 5px;

  ${props => props.variant === 'outlined' && css`
    background-color: transparent;
    border: 2px solid ${props => props.theme.inputBorderColor || '#e2e8f0'};
  `}

  ${props => props.variant === "filled" && css`
    background-color: ${props.theme.filledInputBackgroundColor || '#EDE9FE'};
    &:focus-within {
      background-color: ${props.theme.filledInputFocusBackgroundColor || '#F5F3FF'};
    }
  `}  

  ${props => props.variant === 'underlined' && css`
    border: none;
    border-bottom: 2px solid ${props.theme.inputBorderColor || '#e2e8f0'};
    border-radius: 0;
  `}


  ${props => props.variant === 'rounded' && css`
    border-radius: 8px;
  `}





 ${props => props.isHoveredOutline && !props.isDisabled && css`

  &:hover {
    border-color: ${props.theme.hoverBorderColor || '#000'};
    border: ${props.variant === 'underlined' ? "0px" : props.variant === 'outlined' ? '2px' : '1px'}  solid;
    border-bottom: ${props.variant === 'underlined' ? "1px" : props.variant === 'outlined' ? '2px' : '1px'}  solid;
    border-radius: ${props.variant === 'rounded' ? "8px" : "4px"};
  }
 `}




  ${props => props.isFocusedOutline && css`
    &:focus-within {
      border-radius: ${props.variant === 'rounded' ? "8px" : props.variant === 'underlined' ? "0px" : "4px"};
      border-color: ${props => props.theme.primaryColor5 || 'rgb(29, 78, 216)'};
      border: ${props.variant === 'underlined' ? "0px 0px 2px 0px" : (props.variant === 'normal' || props.variant === 'rounded') ? '1px' : '2px'}  solid rgb(29, 78, 216);
      outline: none;
  }
  `}




  ${props => props.isDisabled && css`
    border:${props.variant === 'underlined' ? "0px 0px 2px 0px" : "0px"};
    outline: none;
    background-color: ${props.theme.disabledBackgroundColor || 'rgb(71, 85, 105, 0.1)'};
    cursor: not-allowed;
  `}

  ${props => props.isLoading && css`
    border:${props.variant === 'underlined' ? "0px 0px 2px 0px" : "1px"} solid rgb(226, 232, 240, 0.2);
    outline: none;
    cursor: not-allowed;
  `}

  ${props => props.isReadOnly && css`
    background-color: ${props.theme.readOnlyBackgroundColor || '#f7fafc'};
    cursor: default;
  `}

  ${props => props.isError && css`
    border-color: ${props.theme.errorColor || '#e53e3e'};
  `}

  ${props => props.isWarning && css`
    border-color: ${props.theme.warningColor || '#F59E0B'};
  `}

  ${props => props.isSuccess && css`
    border-color: ${props.theme.successColor || '#38a169'};
  `}
`;

const InputTextContainer = styled.div<{
  prefix?: string;
  suffix?: string;
}>`
  position: relative;
  background-color: ${props => props.theme.secondaryColor || '#1a202c'};
  ${props => props.prefix && props.suffix && css`
    border-left: 1px solid ${props => props.theme.inputBorderColor || '#efefef'};
    border-right: 1px solid ${props => props.theme.inputBorderColor || '#efefef'};
  `}
`;

const StyledInput = styled.input<{ isDisabled?: boolean; variant: string; }>`
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0px 40px 0px 10px;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.textColor || '#efefef'};
  font-size: 14px;
  line-height: 1;

  background-color: ${props => props.theme.inputBackgroundColor};
  color: ${props => props.theme.inputTextColor};

  ${props => props.isDisabled && css`
    background-color: ${props.theme.disabledBackgroundColor || '#dfdfdf'};
    cursor: not-allowed;
  `}

   color: ${props => props.theme.textColor || '#efefef'};

  ${props => props.variant === "filled" && css`
    background-color: ${props.theme.filledInputBackgroundColor || '#EDE9FE'};
    &:focus {
      background-color: ${props.theme.filledInputFocusBackgroundColor || '#F5F3FF'};
    }
  `} 

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${props => props.theme.placeholderColor || '#CCC'};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  padding: 0px 3px 0px 10px;
  color: ${props => props.theme.iconColor || '#4a5568'};
  border: none;
`;

const Affix = styled.span<{ isDisabled?: boolean; variant?: string; }>`
  padding: 0 20px;
  color: ${props => props.theme.affixColor || '#4a5568'};
  background-color: ${props => props.theme.secondaryColor || '#edf2f7'};
  min-height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  ${props => props.isDisabled && css`
    background-color: ${props.theme.disabledBackgroundColor || 'transparent'};
    cursor: not-allowed;
  `}

  ${props => props.variant === "filled" && css`
    background-color: ${props.theme.filledInputBackgroundColor || '#EDE9FE'};
    &:focus {
      background-color: ${props.theme.filledInputFocusBackgroundColor || '#F5F3FF'};
    }
  `} 
`;

const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  padding: 0px 5px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.clearButtonColor || '#a0aec0'};
`;

const EyeIcon = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  padding: 0px 5px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.iconColor || '#4a5568'};
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

const HelpText = styled.p<{ isLoading?: boolean }>`
  margin-top: 5px;
  font-size: 12px;
  color: ${props => props.theme.helpTextColor || '#718096'};
  display: flex;
  align-items: center;
`;

const ValidationMessage = styled.p<{ state: string }>`
  margin-top: 5px;
  font-size: 12px;
  color: ${props =>
    props.state === 'error' ? props.theme.errorColor || '#f94449' :
      props.state === 'success' ? props.theme.successColor || '#00e500' :
        props.state === 'warning' ? props.theme.warningColor || '#F59E0B' :
          props.theme.validationMessageColor || '#4a5568'
  };
`;

const CharacterCount = styled.p`
  width: fit-content;
  margin-top: 3px;
  font-size: 12px;
  text-align: right;
  color: ${props => props.theme.characterCountColor || '#718096'};
`;

const BottomContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
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

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (!characterLimit || newValue.length <= characterLimit) {
        setInputValue(newValue);
        if (props.onChange) {
          props.onChange(e);
        }
      }
    };

    const handleClear = () => {
      setInputValue('');
      if (props.onChange) {
        const event = { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>;
        props.onChange(event);
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


    return (
      <InputWrapper style={style} >
        {label && (
          <Label
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
          {icon && <IconWrapper>{icon}</IconWrapper>}
          {prefix && <Affix variant={variant} isDisabled={isDisabled || isLoading} style={{ height: `${style?.height}` }}>{prefix}</Affix>}
          <InputTextContainer suffix={suffix} prefix={prefix}>
            <StyledInput
              variant={variant}
              type={type === "password" ? (showPassword ? "text" : "password") : type}
              style={{
                ...inputStyle,
                height: style?.height
              }}
              isDisabled={isDisabled || isLoading}
              disabled={isDisabled || isLoading}
              readOnly={isReadOnly}
              id={inputId}
              ref={ref}
              {...props}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={(e) => {
                setIsFocused(true);
                if (props.onFocus) props.onFocus(e);
              }}
              onBlur={(e) => {
                setIsFocused(false);
                if (props.onBlur) props.onBlur(e);
              }}
              placeholder={isFocused || !label ? props.placeholder : ''}
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
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </EyeIcon>
            )}
            {clearable && inputValue && !isLoading && !isReadOnly && (
              <ClearButton type="button" onClick={handleClear}> ✕ </ClearButton>
            )}
          </InputTextContainer>
          {suffix && <Affix variant={variant} isDisabled={isDisabled || isLoading} style={{ height: `${style?.height}` }}>{suffix}</Affix>}
        </InputContainer>
        <BottomContent>
          {(helpText || isLoading) && (
            <HelpText id={`${inputId}-helpText`} isLoading={isLoading}>
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
              state={isError ? 'error' : isWarning ? 'warning' : isSuccess ? 'success' : 'default'}
            >
              {validationMessage}
            </ValidationMessage>
          )}
          {characterLimit && !isLoading && (
            <CharacterCount>
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