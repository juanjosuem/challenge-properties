import React from "react";

export default function TableHeader({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header, idx) => (
          <th key={idx} scope="col">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
