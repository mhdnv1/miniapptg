import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SocialMedia, initialData } from '../data/data';


export const socialMediaApi = createApi({
  reducerPath: 'socialMediaApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), 
  endpoints: (builder) => ({
    getSocialMedia: builder.query<SocialMedia[], void>({
      query: () => 'social-media',
      transformResponse: () => initialData,
    }),
  }),
});

export const { useGetSocialMediaQuery } = socialMediaApi;
