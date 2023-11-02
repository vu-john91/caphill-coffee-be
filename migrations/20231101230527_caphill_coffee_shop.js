/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("caphill_coffee_shops", function (table) {
    table.increments("id").primary();
    table.string("name");
    table.string("img");
    table.string("address");
    table.jsonb("hours");
    table.string("phoneNumber");
    table.string("website");
    table.boolean("foodProvided");
    table.boolean("dineIn");
    table.boolean("takeOut");
    table.boolean("wheelchairAccessible");
    table.boolean("contactlessPay");
    table.jsonb("rating");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("caphill_coffee_shops");
};
