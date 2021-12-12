import { defineName } from "../utils/name";
import { FC, ReactNode, useContext } from "react";
import { FlowContext } from "./flow-context";
import Icon from "f6-icons";
import classNames from "classnames";

export interface FlowItemProps {
  index: number;
  title: ReactNode;
  description: ReactNode;
}

const [prefix] = defineName("flow-item");

const FlowItem: FC<FlowItemProps> = ({ title, index, description }) => {
  const context = useContext(FlowContext);
  const activeIndex = context!.current;
  const direction = context!.direction;
  const isFinish = index < activeIndex;
  const isProcess = index === activeIndex;
  const isWaiting = index > activeIndex;

  const status = (() => {
    if (isFinish) {
      return 'finish';
    } else if (isProcess) {
      return 'process';
    } else {
      return 'waiting';
    }
  })();

  const icon = (() => {
    if (isFinish) {
      if (context!.finishIcon) {
        return context!.finishIcon;
      } else {
        return <Icon name="checkmark-circle" />
      }
    } else if (isProcess) {
      if (context!.processIcon) {
        return context!.processIcon;
      } else {
        return <Icon name="checkmark-circle" />
      }
    } else {
      if (context!.waitingIcon) {
        return context!.waitingIcon;
      } else {
        return <Icon name="checkmark-circle" />
      }
    }
  })();

  const mCls = classNames({
    [prefix]: true,
    [`${prefix}--${status}`]: true,
    [`${prefix}--${direction}`]: true,
  })

  return (
    <div className={mCls}>
      <div className={`${prefix}__head`}>
        <div className={`${prefix}__icon`}>
          {icon}
        </div>
        <div className={`${prefix}__line`}></div>
      </div>
      <div className={`${prefix}__main`}>
        <div className={`${prefix}__title`}>{title}</div>
        <div className={`${prefix}__description`}>{description}</div>
      </div>
    </div>
  );
};

// const FlowItem: FC<FlowItemProps> = ({ title, description }) => {
//   return (
//     <div className={prefix}>
//       <div className={`${prefix}__indicator`}>
//         <div className={`${prefix}__icon`}>

//         </div>
//         <div className={`${prefix}__line`}>
          
//         </div>
//       </div>
//       <div className={`${prefix}__content`}>
//         <div className={`${prefix}__title`}>{title}</div>
//         <div className={`${prefix}__description`}>{description}</div>
//       </div>
//     </div>
//   );
// };

export default FlowItem;
