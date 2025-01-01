import styled, { css } from "styled-components";
import React, { useState, ChangeEvent } from "react";

// 글자 수 초과 여부
interface CommonProps {
  exceeded?: boolean;
}
interface BaseProps {
  maxLength?: number;
  showCount?: boolean;
}
interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseProps {}
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseProps {}

// Input, Textarea style
export const commonStyle = css<CommonProps>`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  border: 2px solid
    ${({ exceeded }) => (exceeded ? "var(--error-02)" : "var(--text-02)")};
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  color: #000;
  ::placeholder {
    color: ${({ exceeded }) =>
      exceeded ? "var(--error-02)" : "var(--text-02)"};
  }

  &:focus {
    border-color: ${({ exceeded }) =>
      exceeded ? "var(--error-02)" : "var(--text-02)"};
  }
`;
const StyledInput = styled.input<CommonProps>`
  ${commonStyle}
`;

const CountIndicator = styled.span<{ exceeded: boolean }>`
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 12px;
  color: ${(exceeded) => (exceeded ? "var(--error-02)" : "var(--text-02)")};
`;

const Wrapper = styled.div`
  position: relative;
`;

export const Input1: React.FC<InputProps> = ({ maxLength, ...props }) => {
  const [value, setValue] = useState(props.value?.toString() || "");
  const exceeded = maxLength ? value.length > maxLength : false;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange?.(event);
  };

  return (
    <Wrapper>
      <StyledInput
        {...props}
        value={value}
        onChange={handleChange}
        exceeded={exceeded}
        placeholder={exceeded ? "글자 수 초과!" : props.placeholder}
      />
      {maxLength && (
        <CountIndicator exceeded={exceeded}>
          {value.length}/{maxLength}
        </CountIndicator>
      )}
    </Wrapper>
  );
};

const StyledTextarea = styled.textarea<CommonProps>`
  ${commonStyle}
  resize:none;
  min-height: 100px;
`;
export const Textarea1: React.FC<TextareaProps> = ({ maxLength, ...props }) => {
  const [value, setValue] = useState(props.value?.toString() || "");
  const exceeded = maxLength ? value.length > maxLength : false;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    props.onChange?.(event);
  };

  return (
    <Wrapper>
      <StyledTextarea
        {...props}
        value={value}
        onChange={handleChange}
        exceeded={exceeded}
        placeholder={exceeded ? "글자 수 초과!" : props.placeholder}
      />
      {maxLength && (
        <CountIndicator exceeded={exceeded}>
          {value.length}/{maxLength}
        </CountIndicator>
      )}
    </Wrapper>
  );
};
