const { createClient } = require("@sanity/client");

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-05-23',
  useCdn: true
});

async function main() {
  // Uncomment to debug warnings
  // process.on('warning', (info) => {
  //   console.trace(info);
  // });

  for(let i = 0; i < 10000; i++) {
    console.log(i);
    await sanityClient.fetch(`1`);
    await new Promise((res) => setTimeout(res, 1000));
  }
}

main();
