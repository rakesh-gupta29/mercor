import React, { useState } from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PrimaryBtn } from 'atoms/buttons'

type FormProps = {
  formTitle?: string
}

const formSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required.')
    .max(30, 'Name can not be more than 30 characters.'),
  email: z
    .string()
    .email('Invalid email address.')
    .min(1, 'Email is required.'),
  phone: z.string().length(10, 'Phone number should be of 10 digits.'),
  message: z.string(),
})

export type FormFieldSchema = z.infer<typeof formSchema>

export default function Form({ formTitle = '' }: FormProps) {
  const [isLoading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFieldSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormFieldSchema> = async (data) => {
    setLoading(true)
    // replace with a valid call.
    const res = await fetch('')
    if (res.ok) {
      console.log('form has been submitted')
    } else {
      console.error('Form error')
    }
    reset()
    setLoading(false)
  }

  return (
    <section className="blade-bottom-padding-sm">
      <section className="blade-top-padding blade-bottom-padding-lg">
        <div>
          {formTitle && (
            <div className="">
              <h2
                className="font-bold mx-auto text-center leading-normal blade-bottom-padding-sm lg:block hidden"
                dangerouslySetInnerHTML={{ __html: formTitle }}
              />
              <h3
                className="font-bold mx-auto text-center leading-normal blade-bottom-padding-sm lg:hidden block max-w-sm w-11/12 capitalize"
                dangerouslySetInnerHTML={{ __html: formTitle }}
              />
            </div>
          )}
          <div>
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-screen-sm mx-auto px-3 md:w-11/12 grid  gap-4 md:gap-7"
            >
              <div>
                <label
                  htmlFor="name"
                  className="grid gap-1 text-base md:text-lg"
                >
                  Name
                  <input
                    className=""
                    id="name"
                    placeholder="Hey there! Let's break the ice, shall we?"
                    {...register('name')}
                  />
                  {errors.email && (
                    <span className="">{errors.name?.message}</span>
                  )}
                </label>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="grid gap-1 text-base md:text-lg"
                >
                  Email Address
                  <input
                    className=""
                    id="email"
                    type="email"
                    inputMode="email"
                    placeholder="Make sure it's the one you check often."
                    {...register('email')}
                  />
                  {errors.email && (
                    <span className="">{errors.email?.message}</span>
                  )}
                </label>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="grid gap-1 text-base md:text-lg"
                >
                  Contact No.
                  <input
                    className=""
                    type="number"
                    id="phone"
                    inputMode="numeric"
                    placeholder="Your digits are safe with us. We're too cool for cold calls anyway."
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <span className="">{errors.phone?.message}</span>
                  )}
                </label>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="grid gap-1 text-sm md:text-lg"
                >
                  Message
                  <textarea
                    rows={7}
                    cols={5}
                    id="message"
                    className=""
                    placeholder="Got something to say? We're all ears!"
                    {...register('message')}
                  />
                </label>
              </div>
              <div className="grid place-content-start">
                <PrimaryBtn
                  type="submit"
                  text={isLoading ? 'Loading...' : 'Join Now'}
                  isDisabled={isLoading}
                  size="large"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  )
}
