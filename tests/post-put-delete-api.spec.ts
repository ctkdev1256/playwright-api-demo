import { test, expect } from "@playwright/test";

var userId;

test("Create API Test - Post Method", async ({ request }) => {
  var user = {
    name: "morpheus",
    job: "leader"
  };

  const response = await request.post("api/users", {
    data: user,
    headers: { ACCEPT: "application/JSON" }
  });
  var responseJson = await response.json();

  //Assertion status code to be 200
  expect(response.status()).toBe(201);
  expect(responseJson.name).toBe(`${user.name}`);
  expect(responseJson.job).toBe(`${user.job}`);
  userId = responseJson.id;
});

test("Update API Test - PUT Method", async ({ request }) => {
  var userId;
  var user = {
    name: "neo",
    job: "leader"
  };

  const response = await request.put("api/users/" + userId, {
    data: user,
    headers: { ACCEPT: "application/JSON" }
  });
  var responseJson = await response.json();

  //Assertion status code to be 200
  expect(response.status()).toBe(200);
  expect(responseJson.name).toBe(`${user.name}`);
  expect(responseJson.job).toBe(`${user.job}`);
  userId = responseJson.id;
});

test("Delete API Test - DELETE Method", async ({ request }) => {
  var userId;
  const response = await request.delete("api/users/" + userId);
  //Assertion status code to be 204
  expect(response.status()).toBe(204);

  const response1 = await request.get("api/users/" + userId);
  //Assertion status code to be 200
  console.log(await response1.json());
});

// need to change in playwright.config.ts fullyParallel to false/run sequentially
