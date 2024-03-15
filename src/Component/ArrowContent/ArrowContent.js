import { MdKeyboardArrowDown } from 'react-icons/md';
import './ArrowContent.css';

function ArrowContent() {
  return (
    <td className="arrow">
      <div className='arrow-body'>
        <span className='arrow-text'></span>
        <MdKeyboardArrowDown />
      </div>
    </td>
  )
}

export default ArrowContent;