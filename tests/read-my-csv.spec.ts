import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { test } from '@playwright/test';

const records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {
  columns: true,
  skip_empty_lines: true
});

test('Test Case:', async ({ page }) => {
  for (const record of records) {
    // test(`Test Case: ${record.test_case}`, async ({ page }) => {
      console.log(record.test_case, record.some_value, record.some_other_value);
    // });
  }
})

