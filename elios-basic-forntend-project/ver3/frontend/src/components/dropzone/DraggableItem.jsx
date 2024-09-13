import { useDrag } from "react-dnd";
const ItemTypes = {
  FEATURE: 'feature'
};
const DraggableItem = ({ type, children }) => {
  const [, ref] = useDrag({
    type: ItemTypes.FEATURE,
    item: {type},
  });

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default DraggableItem