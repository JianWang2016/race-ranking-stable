// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GenderType = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const { Race } = initSchema(schema);

export {
  Race,
  GenderType
};