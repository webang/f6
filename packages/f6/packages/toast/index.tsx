import classNames from "classnames";
import React, {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import ReactDOM from "react-dom";
import { defineName } from "../utils/name";
import { CSSTransition } from "react-transition-group";
import "./index.less";
import Icon from "f6-icons";
import Spinner, { SpinnerType } from "../spinner";

export interface ToastProps {
  message: string;
  duration: number;
  position?: "top" | "bottom" | "middle";
  type?: "text" | "loading" | "success" | "fail" | "warning";
  spinner?: SpinnerType
}

interface IToastRef {
  close: (force?: boolean) => void;
  setContent: (message: string) => void;
}

const [prefix] = defineName("toast");

let instances = [] as IToastRef[];
let defaultAnimationTime = 300;
let single = true;

/**
 * @description
 */
let AnimateWrapper: ForwardRefRenderFunction<
  IToastRef,
  Required<ToastProps>
> = ({
  position,
  message = '',
  ...restProps
}, ref) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(message);

  useEffect(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      close: () => {
        setVisible(false);
      },
      setContent(message: string) {
        setContent(message);
      },
    }),
    []
  );

  return (
    <CSSTransition
      in={visible}
      timeout={defaultAnimationTime}
      classNames={`slide-${position}`}
      unmountOnExit
    >
      <Toast position={position} message={content} {...restProps} />
    </CSSTransition>
  );
};

const AnimateWrapperRefed = React.forwardRef(AnimateWrapper);

class Toast extends React.Component<ToastProps> {
  static formatParams(params: ToastProps | string) {
    const getField = (
      params: ToastProps|string,
      key: keyof ToastProps,
      _default: any
    ) => {
      if (typeof params === 'string') return _default;
      return typeof params[key] !== "undefined" ? params[key] : _default;
    };

    let type = getField(params, 'type', 'text');
    let message = getField(params, 'message', '');
    let duration = getField(params, 'duration', 1000);
    let position = getField(params, 'position', 'middle');
    let spinner = getField(params, 'spinner', undefined);
    return { duration, position, message, type, spinner };
  }

  /**
   * @description 创建 toast
   */
  static show(params: ToastProps | string) {
    const { type, duration, position, message, spinner } = Toast.formatParams(params);
    const ref = React.createRef<IToastRef>();

    const result = {
      mountNode: Toast.createSlot() as HTMLDivElement | null,
      close(force?: boolean) {
        if (force) {
          if (result.mountNode) {
            document.body.removeChild(result.mountNode);
          }
          result.mountNode = null;
        } else {
          ref.current?.close();
          setTimeout(() => {
            if (result.mountNode) {
              document.body.removeChild(result.mountNode);
            }
            result.mountNode = null;
          }, defaultAnimationTime);
        }
      },
      setContent(content: string) {
        ref.current?.setContent(content);
      },
    };

    if (single) {
      Toast.forceClear();
    }
    instances.push(result);

    ReactDOM.render(
      <AnimateWrapperRefed
        spinner={spinner}
        type={type}
        position={position}
        duration={duration as number}
        message={message}
        ref={ref}
      />,
      result.mountNode
    );

    if (duration) {
      setTimeout(result.close, duration);
    }

    return result;
  }

  private static forceClear() {
    while (instances.length) {
      const it = instances.pop();
      it?.close(true);
    }
  }

  static clear() {
    while (instances.length) {
      const it = instances.pop();
      it?.close();
    }
  }

  static hide() {
    Toast.clear();
  }

  static createSlot() {
    const mountNode = document.createElement("div");
    mountNode.setAttribute("class", `${prefix}-wrapper`);
    document.body.appendChild(mountNode);
    return mountNode;
  }

  renderIcon () {
    if (this.props.type === 'success') {
      return <Icon className={`${prefix}__icon`} name="success3" />
    }
    if (this.props.type === 'fail') {
      return <Icon className={`${prefix}__icon`} name="close-circle-o" />
    }
    if (this.props.type === 'warning') {
      return <Icon className={`${prefix}__icon`} name="warn" />
    }
    if (this.props.type === 'loading') {
      return <Spinner type={this.props.spinner || "oval"} />
    }
  }

  render() {
    const { position, type } = this.props;
    return (
      <div
        style={{ transitionDuration: `${defaultAnimationTime}ms` }}
        className={classNames([
          prefix,
          `${prefix}--${type}`,
          `${prefix}--${position}`
        ])}
      >
        {this.renderIcon()}
        <div className={`${prefix}__content`}>{this.props.message}</div>
      </div>
    );
  }
}

export default Toast;
