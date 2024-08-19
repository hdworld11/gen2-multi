import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { firstbucket } from './storage/resource';
import { secondbucket } from './storage/resource-new';

defineBackend({
  auth,
  data,
  firstbucket,
  secondbucket
});
