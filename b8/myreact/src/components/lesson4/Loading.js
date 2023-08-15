import React, { memo, useContext, useState } from "react";
import "./Loading.css";

import { useTicketsContext } from '../../TicketsContext';
const Loading = () => {
  const { loading } = useTicketsContext()
  if (!loading) {
    return null;
  }

  return (
    <div class="loading">Loading&#8230;</div>
  );
};

export default memo(Loading);
