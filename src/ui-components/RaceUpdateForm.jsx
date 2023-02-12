/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Race } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RaceUpdateForm(props) {
  const {
    id: idProp,
    race,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    raceName: "",
    raceDate: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: undefined,
    dateOfBirth: "",
    email: "",
    finishTime: "",
  };
  const [raceName, setRaceName] = React.useState(initialValues.raceName);
  const [raceDate, setRaceDate] = React.useState(initialValues.raceDate);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [middleName, setMiddleName] = React.useState(initialValues.middleName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialValues.dateOfBirth
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [finishTime, setFinishTime] = React.useState(initialValues.finishTime);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = raceRecord
      ? { ...initialValues, ...raceRecord }
      : initialValues;
    setRaceName(cleanValues.raceName);
    setRaceDate(cleanValues.raceDate);
    setFirstName(cleanValues.firstName);
    setMiddleName(cleanValues.middleName);
    setLastName(cleanValues.lastName);
    setGender(cleanValues.gender);
    setDateOfBirth(cleanValues.dateOfBirth);
    setEmail(cleanValues.email);
    setFinishTime(cleanValues.finishTime);
    setErrors({});
  };
  const [raceRecord, setRaceRecord] = React.useState(race);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Race, idProp) : race;
      setRaceRecord(record);
    };
    queryData();
  }, [idProp, race]);
  React.useEffect(resetStateValues, [raceRecord]);
  const validations = {
    raceName: [{ type: "Required" }],
    raceDate: [{ type: "Required" }],
    firstName: [{ type: "Required" }],
    middleName: [],
    lastName: [{ type: "Required" }],
    gender: [{ type: "Required" }],
    dateOfBirth: [{ type: "Required" }],
    email: [{ type: "Email" }],
    finishTime: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          raceName,
          raceDate,
          firstName,
          middleName,
          lastName,
          gender,
          dateOfBirth,
          email,
          finishTime,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Race.copyOf(raceRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RaceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Race name"
        isRequired={true}
        isReadOnly={false}
        value={raceName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName: value,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender,
              dateOfBirth,
              email,
              finishTime,
            };
            const result = onChange(modelFields);
            value = result?.raceName ?? value;
          }
          if (errors.raceName?.hasError) {
            runValidationTasks("raceName", value);
          }
          setRaceName(value);
        }}
        onBlur={() => runValidationTasks("raceName", raceName)}
        errorMessage={errors.raceName?.errorMessage}
        hasError={errors.raceName?.hasError}
        {...getOverrideProps(overrides, "raceName")}
      ></TextField>
      <TextField
        label="Race date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={raceDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName,
              raceDate: value,
              firstName,
              middleName,
              lastName,
              gender,
              dateOfBirth,
              email,
              finishTime,
            };
            const result = onChange(modelFields);
            value = result?.raceDate ?? value;
          }
          if (errors.raceDate?.hasError) {
            runValidationTasks("raceDate", value);
          }
          setRaceDate(value);
        }}
        onBlur={() => runValidationTasks("raceDate", raceDate)}
        errorMessage={errors.raceDate?.errorMessage}
        hasError={errors.raceDate?.hasError}
        {...getOverrideProps(overrides, "raceDate")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName,
              raceDate,
              firstName: value,
              middleName,
              lastName,
              gender,
              dateOfBirth,
              email,
              finishTime,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Middle name"
        isRequired={false}
        isReadOnly={false}
        value={middleName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName,
              raceDate,
              firstName,
              middleName: value,
              lastName,
              gender,
              dateOfBirth,
              email,
              finishTime,
            };
            const result = onChange(modelFields);
            value = result?.middleName ?? value;
          }
          if (errors.middleName?.hasError) {
            runValidationTasks("middleName", value);
          }
          setMiddleName(value);
        }}
        onBlur={() => runValidationTasks("middleName", middleName)}
        errorMessage={errors.middleName?.errorMessage}
        hasError={errors.middleName?.hasError}
        {...getOverrideProps(overrides, "middleName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName: value,
              gender,
              dateOfBirth,
              email,
              finishTime,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <SelectField
        label="Gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender: value,
              dateOfBirth,
              email,
              finishTime,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      >
        <option
          children="M"
          value="M"
          {...getOverrideProps(overrides, "genderoption0")}
        ></option>
        <option
          children="F"
          value="F"
          {...getOverrideProps(overrides, "genderoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Date of birth"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender,
              dateOfBirth: value,
              email,
              finishTime,
            };
            const result = onChange(modelFields);
            value = result?.dateOfBirth ?? value;
          }
          if (errors.dateOfBirth?.hasError) {
            runValidationTasks("dateOfBirth", value);
          }
          setDateOfBirth(value);
        }}
        onBlur={() => runValidationTasks("dateOfBirth", dateOfBirth)}
        errorMessage={errors.dateOfBirth?.errorMessage}
        hasError={errors.dateOfBirth?.hasError}
        {...getOverrideProps(overrides, "dateOfBirth")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender,
              dateOfBirth,
              email: value,
              finishTime,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Finish time"
        isRequired={true}
        isReadOnly={false}
        value={finishTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender,
              dateOfBirth,
              email,
              finishTime: value,
            };
            const result = onChange(modelFields);
            value = result?.finishTime ?? value;
          }
          if (errors.finishTime?.hasError) {
            runValidationTasks("finishTime", value);
          }
          setFinishTime(value);
        }}
        onBlur={() => runValidationTasks("finishTime", finishTime)}
        errorMessage={errors.finishTime?.errorMessage}
        hasError={errors.finishTime?.hasError}
        {...getOverrideProps(overrides, "finishTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || race)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || race) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
