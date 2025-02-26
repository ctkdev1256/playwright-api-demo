import { test, expect } from "@playwright/test";

test("API Test - Get Method", async ({ request }) => {
  var userId;

  var user = {
    name: "morpheus",
    job: "leader"
  };

  const response = await request.post("api/users", {
    data: user
  });
  var responseJson = await response.json();

  //Assertion status code to be 200
  expect(response.status()).toBe(201);
  expect(responseJson.name).toBe(`${user.name}`);
  expect(responseJson.job).toBe(`${user.job}`);
  userId = responseJson.id;
});
