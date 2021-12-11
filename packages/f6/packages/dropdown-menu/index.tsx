import DropdownMenu from './dropdown-menu';
import DropdownMenuItem from './dropdown-menu-item';
import './index.less';

export type { DropdownMenuProps } from './dropdown-menu';
export type { DropdownMenuItemProps } from './dropdown-menu-item';

(DropdownMenu as any).Item = DropdownMenuItem;

export default DropdownMenu