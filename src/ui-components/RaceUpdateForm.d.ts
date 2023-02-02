/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Race } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RaceUpdateFormInputValues = {
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
export declare type RaceUpdateFormValidationValues = {
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
export declare type RaceUpdateFormOverridesProps = {
    RaceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    finishHour?: PrimitiveOverrideProps<TextFieldProps>;
    finishMinute?: PrimitiveOverrideProps<TextFieldProps>;
    finishSecond?: PrimitiveOverrideProps<TextFieldProps>;
    raceName?: PrimitiveOverrideProps<TextFieldProps>;
    raceDate?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    middleName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RaceUpdateFormProps = React.PropsWithChildren<{
    overrides?: RaceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    race?: Race;
    onSubmit?: (fields: RaceUpdateFormInputValues) => RaceUpdateFormInputValues;
    onSuccess?: (fields: RaceUpdateFormInputValues) => void;
    onError?: (fields: RaceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RaceUpdateFormInputValues) => RaceUpdateFormInputValues;
    onValidate?: RaceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RaceUpdateForm(props: RaceUpdateFormProps): React.ReactElement;
