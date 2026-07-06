import { forwardRef } from "react";
import "./Select.css";

const Select = forwardRef(
  (
    {
      label,
      options = [],
      placeholder = "Select an option",
      error,
      helperText,
      leftIcon,
      className = "",
      fullWidth = true,
      required = false,
      disabled = false,
      id,
      ...props
    },
    ref
  ) => {
    const selectId =
      id || `select-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div
        className={`select-group ${
          fullWidth ? "select-full" : ""
        } ${className}`}
      >
        {label && (
          <label htmlFor={selectId} className="select-label">
            {label}
            {required && (
              <span className="select-required">*</span>
            )}
          </label>
        )}

        <div
          className={`select-wrapper ${
            error ? "select-error" : ""
          } ${disabled ? "select-disabled" : ""}`}
        >
          {leftIcon && (
            <span className="select-icon left">
              {leftIcon}
            </span>
          )}

          <select
            ref={ref}
            id={selectId}
            className="select"
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            defaultValue=""
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>

            {options.map((option) => {
              const item =
                typeof option === "string"
                  ? { label: option, value: option }
                  : option;

              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>

        {error ? (
          <p className="select-message error">
            {error}
          </p>
        ) : (
          helperText && (
            <p className="select-message">
              {helperText}
            </p>
          )
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;