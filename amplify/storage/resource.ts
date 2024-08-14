import { defineStorage } from '@aws-amplify/backend';

export const firstbucket = defineStorage({
  name: 'mybucket1'
});

export const secondbucket = defineStorage(
  {
    name: "mybucket2"
  }
)