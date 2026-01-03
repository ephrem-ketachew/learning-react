import { useState } from "react";
import Logo from "./componenets/Logo";
import { Form } from "./componenets/Form";
import { PackingList } from "./componenets/PackingList";
import { Stats } from "./componenets/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [item, ...items]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => id !== item.id));
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to clear your items list?"
    );

    if (confirmed) setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
