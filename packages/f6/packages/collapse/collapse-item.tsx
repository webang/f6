import classNames from "classnames";
import Cell from "../cell";
import {
  CSSProperties,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { defineName } from "../utils/name";
import { CollapseContext } from "./collapse-context";
import Icon from "f6-icons";

export interface CollapseItemProps {
  className?: string;
  name: string;
  title: React.ReactNode;
}

const [prefix] = defineName("collapse-item");

const CollapseItem: FC<CollapseItemProps> = (p) => {
  const { name, title, className, children } = p;
  const mCls = classNames([className, prefix]);
  const context = useContext(CollapseContext);
  const contentRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ height: 0 });
  const isOpen = context?.openKeys.includes(name);

  const handleClick = () => {
    if (isOpen) {
      context?.uncheck(name);
    } else {
      context?.check(name);
    }
  };

  const bodyStyle: CSSProperties = {
    height: isOpen ? state.height : 0,
    overflow: "hidden",
    transition: "all 300ms",
  };

  const iconStyle: CSSProperties = {
    display: "inline-block",
    transform: `rotate(${isOpen ? 180 : 0}deg)`,
    transition: "all 300ms",
  };

  useEffect(() => {
    setState({
      height: contentRef.current?.offsetHeight || 0,
    });
  }, []);

  return (
    <div className={mCls}>
      <div className={`${prefix}__head`} onClick={handleClick}>
        <Cell
          title={title}
          value={<Icon className={`${prefix}__icon`} name="arrow-down" style={iconStyle} />}
        />
      </div>
      <div className={`${prefix}__body`} style={bodyStyle}>
        <div className={`${prefix}__content`} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapseItem;