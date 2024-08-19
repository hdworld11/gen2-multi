import { defineStorage } from '@aws-amplify/backend';

export const firstbucket = defineStorage({
  name: 'mybucket1',
  access: (allow) => ({
    'photos/*': [
      allow.guest.to(['read','write']),
    ],
  })
});