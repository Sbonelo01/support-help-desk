import React, { useState, useEffect } from "react";

export default function TestComponent() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });
  return <div>{data}</div>;
}
