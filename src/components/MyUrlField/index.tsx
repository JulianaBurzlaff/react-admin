import React from "react";
import { useRecordContext } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  icon: {
    width: "0.5em",
    height: "0.5em",
    paddingLeft: 2,
  },
});

type Props = {
  source: string;
};

const MyUrlField = ({ source }: Props) => {
  const record = useRecordContext();
  const classes = useStyles();
  return record ? (
    <a href={record[source]} className={classes.link}>
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  ) : null;
};

export default MyUrlField;
