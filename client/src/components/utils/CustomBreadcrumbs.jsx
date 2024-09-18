"use client";

import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function CustomBreadcrumbs({ items }) {
  const breadcrumbs = items.map((item, index) => {
    if (item.href) {
      return (
        <Link underline="hover" key={index} color="inherit" href={item.href}>
          {item.label}
        </Link>
      );
    }
    return (
      <Typography key={index} sx={{ color: "text.primary" }}>
        {item.label}
      </Typography>
    );
  });

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
