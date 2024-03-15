import './SearchContent.css';

function SearchContent(props) {
  const { title } = props;
  return (
    <td>
      <input type='text' placeholder={title + '를 입력해주세요'} />
    </td>
  );
}

export default SearchContent;