import { defineStorage } from '@aws-amplify/backend';

export const secondbucket = defineStorage(
  {
    name: "mybucket2",
    isDefault: true,
  }
);