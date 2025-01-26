// import client from '@sanity/client';

// export default client({
//     projectId: "e0b9wtw7",
//     dataset: "production",
//     useCdn: true,
//     apiVersion: "2025-01-26",
// });

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "e0b9wtw7",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-26",
});

export default client;