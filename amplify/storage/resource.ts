import { defineStorage } from '@aws-amplify/backend';

export const firstbucket = defineStorage({
  name: 'mybucket1',
  isDefault: true
});

export const secondbucket = defineStorage(
  {
    name: "mybucket2"
  }
);