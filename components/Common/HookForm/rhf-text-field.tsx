import { Controller, useFormContext } from 'react-hook-form';

import TextField, { TextFieldProps } from '@mui/material/TextField';

type RHFTextFieldProps = TextFieldProps & {
  name: string;
  label: string;
  hideOutline?: boolean;
};

export function RHFTextField({ name, helperText, type, hideOutline = false, sx, ...other }: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          value={type === 'number' && field.value === 0 ? '' : field.value}
          onChange={(event) => {
            if (type === 'number') {
              field.onChange(Number(event.target.value));
            } else {
              field.onChange(event.target.value);
            }
          }}
          error={!!error}
          helperText={error?.message ?? helperText}
          slotProps={{
            htmlInput: {
              autoComplete: 'off',
            },
          }}

          sx={[
            hideOutline && {
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}

          {...other}
        />
      )}
    />
  );
}
