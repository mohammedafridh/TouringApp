import React from 'react'
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldError } from '@/components/Helper/FieldError'

type Props = {
    closeSignInCard: () => void
}

const SearchSchema = zod
    .object({
        email: zod.string().min(1, 'Email is required!')
            .email('Enter a valid email address'),
        password: zod.string().min(1, 'Password is required!')
    })

type SearchFormValues = zod.infer<typeof SearchSchema>

const SignInCard = ({ closeSignInCard }: Props) => {

    const initialValues = {
        email: '',
        password: ''
    }

    const methods = useForm<SearchFormValues>({
        defaultValues: initialValues,
        resolver: zodResolver(SearchSchema),
    });

    const { handleSubmit, reset, setValue, getValues, watch, register, formState: { errors } } = methods;

    const onSubmit = async (data: SearchFormValues) => {
        console.log('vals', getValues())
    }

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 items-center justify-center w-[90%] md:w-[80%] mx-auto h-full'>
            {/* Text Area */}
            <div className='hidden md:flex flex-col gap-4 w-full px-8'>
                <h3 className='uppercase mt-4 md:mt-2 text-lg md:text-2xl font-semibold font-black text-white [word-spacing:5px]'>Travel every corner in sri lanka</h3>

                <p className='text-white text-sm sm:text-lg'>Sign in to unlock booking, track your reservations, and get
                    everything ready for your trip to Sri Lanka.</p>
            </div>
            {/* Login Card */}

            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='px-2 md:px-8 flex items-center justify-center'>
                        <div className='bg-white/20 backdrop-blur-md border border-white/30 shadow-xl w-full md:w-[90%] lg:w-[80%] xl:w-[70%] p-8 flex flex-col items-center justify-center rounded-lg'>
                            <h1 className='text-4xl font-bold text-white mb-12'>SIGN IN</h1>

                            <div className='flex flex-col space-y-4 w-full items-center'>
                                <div className='w-full'>
                                    <FieldError message={errors.email?.message as string} />
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder='Email *'
                                        className='text-sm border-none outline-none w-full bg-white p-2 rounded-sm' />
                                </div>
                                <div className='w-full'>
                                    <FieldError message={errors.password?.message as string} />
                                    <input
                                        {...register("password")}
                                        type="password"
                                        placeholder='Password *'
                                        className='text-sm border-none outline-none w-full bg-white p-2 rounded-sm' />
                                </div>

                                <button className='m-4 uppercase w-fit transition-all duration-300 text-xl font-semibold hover:bg-blue-800 bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer'>Sign In</button>

                                <p className='text-sm md:text-base text-gray-300'>Dont have an account?
                                    <span className='font-semibold cursor-pointer text-white' onClick={closeSignInCard}> SIGN UP</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div >
    )
}

export default SignInCard