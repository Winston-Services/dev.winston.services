import { createApiInstance } from './createApiInstance';

const extendedApi = createApiInstance.injectEndpoints({
  endpoints: (build) => ({
    getLeads: build.query({
      query: () => '/users/lead',
    }),
  }),
  overrideExisting: false,
});

export const { useGetLeadsQuery } = extendedApi;
