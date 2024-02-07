// If you're placing this in a separate file, don't forget to export it
export interface IRow {
    id: number;
    lastName: string;
    firstName: string;
    age: number | null; // Assuming age can be null based on your rows
    // Add any additional fields that are present in your data
  }
  