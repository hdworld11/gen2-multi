import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { firstbucket } from './storage/resource';

defineBackend({
  auth,
  data,
  firstbucket
});
