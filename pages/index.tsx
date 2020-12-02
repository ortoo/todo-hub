import React from "react";
import Head from "next/head";

import { makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return {};
});

const Index = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>TodoHub</title>
      </Head>
    </>
  );
};

export default Index;
