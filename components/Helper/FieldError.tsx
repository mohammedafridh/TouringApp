export const FieldError = ({ message }: { message?: string }) =>
    message ? <p className='text-red-700 text-sm mt-1'>{message}</p> : null