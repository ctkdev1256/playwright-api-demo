import { test, expect } from "@playwright/test";

// test("API Test - Get Method", async ({ request }) => {
//   const resp = await request.get("/api/users?page=2");
//   console.log(await resp.json());

//   //Assertion status code to be 200
//   expect(resp.status()).toBe(200);

//   expect(await resp.json()).toMatchObject({
//     page: 2,
//     per_page: 6,
//     total: 12,
//     total_pages: 2,
//     data: [
//       {
//         id: 7,
//         email: "michael.lawson@reqres.in",
//         first_name: "Michael",
//         last_name: "Lawson",
//         avatar: "https://reqres.in/img/faces/7-image.jpg",
//       },
//       {
//         id: 8,
//         email: "lindsay.ferguson@reqres.in",
//         first_name: "Lindsay",
//         last_name: "Ferguson",
//         avatar: "https://reqres.in/img/faces/8-image.jpg",
//       },
//       {
//         id: 9,
//         email: "tobias.funke@reqres.in",
//         first_name: "Tobias",
//         last_name: "Funke",
//         avatar: "https://reqres.in/img/faces/9-image.jpg",
//       },
//       {
//         id: 10,
//         email: "byron.fields@reqres.in",
//         first_name: "Byron",
//         last_name: "Fields",
//         avatar: "https://reqres.in/img/faces/10-image.jpg",
//       },
//       {
//         id: 11,
//         email: "george.edwards@reqres.in",
//         first_name: "George",
//         last_name: "Edwards",
//         avatar: "https://reqres.in/img/faces/11-image.jpg",
//       },
//       {
//         id: 12,
//         email: "rachel.howell@reqres.in",
//         first_name: "Rachel",
//         last_name: "Howell",
//         avatar: "https://reqres.in/img/faces/12-image.jpg",
//       },
//     ],
//     support: {
//       url: "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
//       text: "Tired of writing endless social media content? Let Content Caddy generate it for you.",
//     },
//   });
// });
