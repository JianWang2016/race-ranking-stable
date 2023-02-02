/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RaceCreateFormInputValues = {
    finishHour?: number;
    finishMinute?: number;
    finishSecond?: number;
    raceName?: string;
    raceDate?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    gender?: string;
    dateOfBirth?: string;
    email?: string;
};
export declare type RaceCreateFormValidationValues = {
    finishHour?: ValidationFunction<number>;
    finishMinute?: ValidationFunction<number>;
    finishSecond?: ValidationFunction<number>;
    raceName?: ValidationFunction<string>;
    raceDate?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    middleName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    dateOfBirth?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RaceCreateFormOverridesProps = {
    RaceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement2?: PrimitiveOverrideProps<DividerProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    finishHour?: PrimitiveOverrideProps<TextFieldProps>;
    finishMinute?: PrimitiveOverrideProps<TextFieldProps>;
    finishSecond?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid3?: PrimitiveOverrideProps<GridProps>;
    raceName?: PrimitiveOverrideProps<TextFieldProps>;
    raceDate?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<DividerProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    middleName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid6?: PrimitiveOverrideProps<GridProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RaceCreateFormProps = React.PropsWithChildren<{
    overrides?: RaceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RaceCreateFormInputValues) => RaceCreateFormInputValues;
    onSuccess?: (fields: RaceCreateFormInputValues) => void;
    onError?: (fields: RaceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RaceCreateFormInputValues) => RaceCreateFormInputValues;
    onValidate?: RaceCreateFormValidationValues;
} & React.CSSProperties>;
export default function RaceCreateForm(props: RaceCreateFormProps): React.ReactElement;
