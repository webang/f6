import React from "react";
import { defineName } from "../utils/name";
import './index.less';
import { IOnColumnChange, IOnDestroyed, IOnMounted, IPickerColumn, OptionRender } from "./interface";

const itemHeight = 36;
const maxY = itemHeight * 2;
const longTouch = 300;
const DURATION = 300;

const [prefix] = defineName('picker-column')
class PickerColumn extends React.Component<{
  index: number;
  columns: IPickerColumn;
  onChange?: IOnColumnChange;
  onMounted: IOnMounted;
  onDestroyed: IOnDestroyed;
  defaultIndex?: number;
  optionRender?: OptionRender;
}, {
  currentIndex: number;
  offset: number;
  columns: IPickerColumn
}> {
  state = {
    currentIndex: this.props.defaultIndex || 0,
    offset: -((this.props.defaultIndex || 0) - 2) * itemHeight,
    columns: [] as IPickerColumn
  }

  ref = React.createRef<HTMLDivElement>();
  startY: number | undefined = undefined;    // 鼠标按下时 屏幕所在位置
  startTime: number | undefined = undefined; // 鼠标按下时 时间戳
  currentY: number | undefined = undefined;  // 鼠标按下时 state.offset 的快照值
  duration: number = 0;                      // 动画持续时间
  diffY: number = 0;                         // touchstart - touchend 之间移动距离

  private getTouch(e: React.TouchEvent<Element>|React.MouseEvent<Element>) {
    const mouseEvents = ["mousedown", 'mouseup', 'mousemove'];
    const touchEvents = ['touchstart', 'touchmove', 'touchend'];
    if (mouseEvents.includes(e.type)) {
      return (e as React.MouseEvent<Element>).clientY;
    }
    if (touchEvents.includes(e.type)) {
      return (e as React.TouchEvent<Element>).changedTouches[0].clientY;
    }
    return 0;
  }

  private formatDistance = (offset: number, divider = false) => {
    const minY = (108 - this.state.columns.length * itemHeight);
    if (offset > maxY) offset = maxY;
    if (offset < minY) offset = minY;

    // TODO 这里需要判断方向
    if (divider) return offset - offset % itemHeight
    return offset;
  }

  private onTouchStart = (e: React.TouchEvent<Element>|React.MouseEvent<Element>) => {
    this.startY = this.getTouch(e);
    this.startTime = Date.now();
    this.currentY = this.state.offset; // 记录快照
    this.duration = 0;                 // 按下时而上一次的动画未处理完成, 会瞬间跳到新的位置，这个交互后续优化
  }

  private onTouchMove = (e: React.TouchEvent<Element>|React.MouseEvent<Element>) => {
    if (this.startY === undefined) return;
    if (this.currentY === undefined) return;

    const clientY = this.getTouch(e);
    const startY = this.startY as number;
    this.diffY = clientY - startY;
    this.setState({ offset: this.formatDistance((this.currentY) + this.diffY) })
    e.preventDefault();
  }

  private onTouchEnd = () => {
    const diffTime = Date.now() - (this.startTime as number);
    const velocity = this.diffY / diffTime;

    if (diffTime < longTouch && this.diffY !== 0) {
      const direction = velocity / Math.abs(velocity);
      const dist = this.formatDistance(this.state.offset + direction * 30 * Math.pow(8, Math.abs(velocity)), true)
      this.scrollTo(dist, true);
    } else {
      if (this.state.offset % itemHeight !== 0) {
        this.scrollTo(this.formatDistance(this.state.offset, true), true)
      } else {
        this.changeIndex();
      }
    }

    this.startY = undefined;
    this.startTime = undefined;
    this.currentY = undefined;
    this.diffY = 0;
  }

  private scrollTo(dest: number, animation = true) {
    if (animation) {
      this.duration = DURATION;
    } else {
      this.duration = 0;
    }
    this.setState({ offset: dest });
    const onFinish = () => {
      this.duration = 0;
      this.changeIndex();
    }
    setTimeout(onFinish, this.duration)
  }

  changeIndex = (shouldTriggerOnChange = true) => {
    const index = 2 - this.state.offset / itemHeight;
    if (this.state.currentIndex !== index) {
      this.setState({ currentIndex: index })
      if (shouldTriggerOnChange && this.props.onChange) {
        this.props.onChange(this.props.index, index, this.state.columns, this);
      }
    }
  }

  public slideTo = (index: number, animation = true) => {
    this.scrollTo(-(index - 2) * itemHeight, animation);
  }

  setOptions = (options: IPickerColumn) => {
    this.setState({ columns: options });
  }

  getOptions = () => {
    return this.state.columns;
  }

  getIndex = () => {
    return this.state.currentIndex;
  }

  getValue = () => {
    return this.state.columns[this.state.currentIndex]
  }

  componentDidMount() {
    const { onTouchStart, onTouchMove, onTouchEnd } = this;
    this.setState({ columns: this.props.columns });
    this.props.onMounted(this, this.props.index);
    const options = { passive: false }

    if (this.ref.current) {
      const wrapper= this.ref.current;
      if ('ontouchstart' in document.documentElement) {
        wrapper.addEventListener('touchstart', onTouchStart as any, options)
        wrapper.addEventListener('touchmove', onTouchMove as any, options)
        wrapper.addEventListener('touchend', onTouchEnd, options)
      } else {
        wrapper.addEventListener('mousedown', onTouchStart as any, options)
        wrapper.addEventListener('mousemove', onTouchMove as any, options)
        wrapper.addEventListener('mouseup', onTouchEnd, options)
        wrapper.addEventListener('mouseleave', onTouchEnd, options)
      }
    }
  }

  componentWillUnmount () {
    this.props.onDestroyed(this, this.props.index);
  }

  render() {
    const { offset, columns } = this.state;
    const style: React.CSSProperties = {
      transform: `translate3d(${0}, ${offset}px, 0)`,
      transitionDuration: `${this.duration}ms`,
      transitionProperty: 'transform',
      transitionTimingFunction: 'ease-out'
    }

    const renderList = () => {
      const { optionRender } = this.props;
      return columns.map((it, index) => {
        return (
          <div
            key={index}
            onClick={() => this.slideTo(index)}
            className="wax-picker-option"
          >
            {optionRender ? optionRender({
              option: it,
              selected: this.state.currentIndex === index
            }) : (
              <span className="wax-picker-option--selected">{it.label}</span>
            )}
          </div>
        )
      })
    };

    return (
      <div
        ref={this.ref}
        className={prefix}
      >
        <div className={`${prefix}__mask`}></div>
        <div className={`${prefix}__line`}></div>
        <div style={style} className={`${prefix}__scroll`}>
          {renderList()}
        </div>
      </div>
    )
  }
}

export default PickerColumn;