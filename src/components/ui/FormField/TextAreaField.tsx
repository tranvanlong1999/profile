import type { ReactNode } from 'react';
import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form';
import type { TextAreaProps } from '../textarea';
import { TextArea } from '../textarea';
import { Show, VStack } from '../Utilities';

interface Props<T extends FieldValues = FieldValues> extends TextAreaProps {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: ReactNode;
  required?: boolean;
  labelClassName?: string;
}

const TextAreaField = <T extends FieldValues>({
  defaultValue,
  labelClassName,
  control,
  label,
  required,
  className,
  ...props
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={props.name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem className="w-full">
          <VStack spacing={0}>
            <Show when={!!label}>
              <FormLabel className={labelClassName}>
                {label} {required && <span className="text-error-light">*</span>}
              </FormLabel>
            </Show>
            <FormControl>
              <TextArea {...field} {...props} className={className} />
            </FormControl>
            <FormMessage className="mt-1 text-xs ml-[30px]" />
          </VStack>
        </FormItem>
      )}
    />
  );
};

export { TextAreaField };
