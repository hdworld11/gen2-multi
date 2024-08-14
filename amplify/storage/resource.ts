import { defineStorage } from '@aws-amplify/backend';

export const firstbucket = defineStorage({
  name: 'mybucket1',
  isDefault: true,
  access: (allow) => ({
    'photos/*': [
      allow.guest.to(['read','write']),
    ],
  })
});

export const secondbucket = defineStorage(
  {
    name: "mybucket2"
  }
);