import { Controller } from 'react-hook-form';

export default function CustomInputText({
  name,
  type = 'text',
  rules = {},
  control,
  placeholder,
  style = {},
  className = '',
  autoComplete,
  id,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <div className="flex flex-col w-full">
          <input
            id={id}
            className={className}
            type={type}
            value={value}
            style={style.input}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete={autoComplete}
          />
          {error && (
            <div className="text-rose-800 mt-3" style={style.error}>
              {error.message || 'Error'}
            </div>
          )}
        </div>
      )}
    />
  );
}
