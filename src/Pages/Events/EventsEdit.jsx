import React from "react";
import { Flex } from "../../components/Utlis";
import styled from "styled-components";
import HeadEdit from "../../components/events/edit/HeadEdit";
import EventEdit from "../../components/events/edit/EventEd";
const Div = styled(Flex)`
  width: 100%;
  flex-direction: column;
`;
const EventsEdit = () => {
  return (
    <Div>
      <HeadEdit />
      <EventEdit />
    </Div>
  );
};

export default EventsEdit;
