import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";
import { CiBoxList } from "react-icons/ci";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 10px 0;
  background: ${(props) => (props.active ? "orange" : "none")} !important;
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>
        <CiBoxList color="red" size="40" />
        {heading}
      </h1>
      {items.length === 0 && <p>No items found</p>}
      <List
        className={[
          styles.listGroup,
          styles.cont,
          " listGroup list-group",
        ].join(" ")}
      >
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              // alert("you clicked " + item);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
