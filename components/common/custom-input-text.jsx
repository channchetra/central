import { Controller } from 'react-hook-form';

export default function CustomInputText ({ 
  name, 
  type = 'text',
  rules = {}, 
  control, 
  placeholder, 
  style = {}, 
  className = '',
  autoComplete,
  id
}) {
  return (
    <Controller 
      name={name}
      control={control}
      rules={rules}
      render={ ({ field: { value, onChange, onBlur }, fieldState: {error} }) => 
        <>
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
          {
            error &&
            <div style={style.error}>{error.message || 'Error'}</div>
          }
                  
        </>
      }
    />
  )
}
