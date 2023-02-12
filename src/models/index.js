// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GenderType = {
  "M": "M",
  "F": "F"
};

const { Race } = initSchema(schema);

export {
  Race,
  GenderType
};