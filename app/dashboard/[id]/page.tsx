import React from "react";

export default function DashboardDetailPage({ params, searchParams }: any) {
  return (
    <main>
      Dashboard Detail Page {params.id} code={searchParams.code}
    </main>
  );
}
