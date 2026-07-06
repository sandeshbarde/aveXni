import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className = "",
      type = "text",
      fullWidth = true,
      required = false,
      disabled = false,
      id,
      ...props
    },
    ref
  ) => {
    const inputId =
      id ||
      `input-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div
        className={`input-group ${
          fullWidth ? "input-full" : ""
        } ${className}`}
      >
        {label && (
          <label
            htmlFor={inputId}
            className="input-label"
          >
            {label}
            {required && (
              <span className="input-required">*</span>
            )}
          </label>
        )}

        <div
          className={`input-wrapper ${
            error ? "input-error" : ""
          } ${disabled ? "input-disabled" : ""}`}
        >
          {leftIcon && (
            <span className="input-icon left">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            type={type}
            className="input"
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            {...props}
          />

          {rightIcon && (
            <span className="input-icon right">
              {rightIcon}
            </span>
          )}
        </div>

        {error ? (
          <p className="input-message error">
            {error}
          </p>
        ) : (
          helperText && (
            <p className="input-message">
              {helperText}
            </p>
          )
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;