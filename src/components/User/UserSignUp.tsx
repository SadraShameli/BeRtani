/* eslint-disable @typescript-eslint/no-misused-promises */

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';

import Card from '~/components/Card';
import { InputField, InputInfoText } from '~/components/InputField';

import AppleIcon from '~/components/Icons/Apple';
import GoogleIcon from '~/components/Icons/Google';
import TwitchIcon from '~/components/Icons/Twitch';
import AccountInfoIcon from '~/components/Icons/AccountInfo';

import { UserSignUpSchema, type UserSignUpForm } from './UserTypes';
import { api } from '~/utils/api';
import Routes from '~/utils/routes';

export default function UserSignUp() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState('');
    const createUserMutation = api.user.createUser.useMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSignUpForm>({ resolver: zodResolver(UserSignUpSchema), defaultValues: { terms: true } });

    const onSubmit: SubmitHandler<UserSignUpForm> = async (data) => {
        const result = await createUserMutation.mutateAsync(data);

        if (result?.error) {
            setErrorMessage(result.error);
        } else {
            await signIn('credentials', {
                username: data.email,
                password: data.password,
                callbackUrl: '/',
                redirect: false,
            });

            await router.push('/');
            setErrorMessage('');
        }
    };

    return (
        <form className='relative mx-auto max-w-lg' onSubmit={handleSubmit(onSubmit)}>
            <Card>
                <h2 className='flex items-center justify-between'>
                    Create your account
                    <AccountInfoIcon />
                </h2>

                <div className='grid gap-5'>
                    <button className='btn-outline btn gap-2' type='button' onClick={() => signIn('google', { callbackUrl: '/' })}>
                        <GoogleIcon className='h-6 w-6' />
                        Sign up with Google
                    </button>

                    <div className='grid gap-5 sm:grid-cols-2 '>
                        <button className='btn-outline btn gap-2' type='button' onClick={() => signIn('apple', { callbackUrl: '/' })}>
                            <AppleIcon className='h-6 w-6' />
                            Sign up with Apple
                        </button>

                        <button className='btn-outline btn gap-2' type='button' onClick={() => signIn('twitch', { callbackUrl: '/' })}>
                            <TwitchIcon className='h-6 w-6' />
                            Sign up with Twitch
                        </button>
                    </div>

                    <div className='divider'>or</div>

                    <div className='grid grid-cols-2 gap-5'>
                        <InputField autoComplete='given-name' title='First name' {...register('firstName')}>
                            {errors.firstName && <InputInfoText>{errors.firstName?.message}</InputInfoText>}
                        </InputField>

                        <InputField autoComplete='family-name' title='Last name' {...register('lastName')}>
                            {errors.lastName && <InputInfoText>{errors.lastName?.message}</InputInfoText>}
                        </InputField>
                    </div>

                    <InputField autoComplete='email' placeholder='you@domain.com' title='Email address' type='email' {...register('email')}>
                        {errors.email && <InputInfoText>{errors.email?.message}</InputInfoText>}
                        {errorMessage && <InputInfoText>{errorMessage}</InputInfoText>}
                    </InputField>

                    <InputField autoComplete='new-password' title='Password' type='password' {...register('password')}>
                        {errors.password && <InputInfoText>{errors.password?.message}</InputInfoText>}
                    </InputField>

                    <InputField autoComplete='new-password' title='Confirm password' type='password' {...register('confirmPassword')}>
                        {errors.confirmPassword && <InputInfoText>{errors.confirmPassword?.message}</InputInfoText>}
                    </InputField>

                    <label>
                        <input type='checkbox' {...register('terms')} />
                        <span>
                            I accept the
                            <Link className='link-primary pl-1 hover:link' type='button' href={Routes.termsAndConditions}>
                                Terms and Conditions
                            </Link>
                        </span>
                    </label>

                    {errors.terms && <InputInfoText>{errors.terms?.message}</InputInfoText>}

                    <button className='btn-primary btn' type='submit'>
                        Create an account
                    </button>

                    <div className='flex gap-2'>
                        <span>Already have an account?</span>
                        <Link className='link-primary link' type='button' href={Routes.signIn}>
                            Sign in here
                        </Link>
                    </div>
                </div>
            </Card>
        </form>
    );
}
