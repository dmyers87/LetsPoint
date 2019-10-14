import React from 'react';
import cx from 'classnames';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd-cjs'

interface DragItem {
  index: number;
  id: string;
  type: string;
}
type MyProps = {
  index: number;
  tid: string;
  focus: string | null;
  canDrag: boolean;
  children: React.ReactNode;
  moveTicket: (dragIndex: number, hoverIndex: number) => void;
};
const TicketWrapper: React.FunctionComponent<MyProps> = ({
  index,
  tid,
  focus,
  canDrag,
  children,
  moveTicket,
}) => {
  const ref = React.useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'TICKET', tid, index },
    canDrag: () => canDrag,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      canDrag: !!monitor.canDrag(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'TICKET',
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      // @ts-ignore
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset ? clientOffset.y - hoverBoundingRect.top : 0;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveTicket(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const classes = cx({
    'opacity-50': isDragging,
    'relative py-3': true,
    'px-3 md:px-6 lg:px-8': true, // match layout
    'border-b': true,
    'border-t': !index,
    'bg-violet-0': tid === focus,
    'cursor-move': canDrag,
  });

  drag(drop(ref))
  return (
    <li ref={ref} className={classes}>
      {/* Focus Bar */}
      {focus === tid && (
        <div className="w-1 bg-violet-5 absolute pin-t pin-l pin-b" />
      )}
      {children}
    </li>
  )
}

export default TicketWrapper;