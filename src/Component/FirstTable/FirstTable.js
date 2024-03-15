import './FirstTable.css';
import '../ArrowContent';
import ArrowContent from '../ArrowContent';
import SearchContent from '../SearchContent';

function FirstTable(props) {
  const { g1, g3, g5, g6 } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>{g1}</th>
          <ArrowContent />
        </tr>
        <tr>
          <th>{g3}</th>
          <ArrowContent />
        </tr>
        <tr>
          <th>{g5}</th>
          <SearchContent title={g5} />
          <th>{g6}</th>
          <SearchContent title={g5} />
        </tr>
      </tbody>
    </table>
  );
}

export default FirstTable;