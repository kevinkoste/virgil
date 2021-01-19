import handler from "../libs/handler-lib"

/**
 * function to handle hello
 */
export const main = handler(async (event, context) => {
  return { message: "Welcome to the Virgil API" }
})