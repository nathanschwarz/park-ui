import { tv } from 'tailwind-variants'

export const checkboxStyles = tv({
  base: 'checkbox',
  defaultVariants: {
    size: 'md',
  },
  slots: {
    root: 'checkbox__root',
    label: 'checkbox__label',
    control: 'checkbox__control',
  },
  variants: {
    size: {
      sm: {
        root: 'checkbox__root--size_sm',
        label: 'checkbox__label--size_sm',
        control: 'checkbox__control--size_sm',
      },
      md: {
        root: 'checkbox__root--size_md',
        label: 'checkbox__label--size_md',
        control: 'checkbox__control--size_md',
      },
      lg: {
        root: 'checkbox__root--size_lg',
        label: 'checkbox__label--size_lg',
        control: 'checkbox__control--size_lg',
      },
    },
  },
})