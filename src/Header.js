import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>
      Click on the icons on the left side to manage your sales, clients and
      payment methods
    </CardContent>
  </Card>
);
