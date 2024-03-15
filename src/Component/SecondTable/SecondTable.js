import './SecondTable.css';
import '../ArrowContent';
import ArrowContent from '../ArrowContent';
import SearchContent from '../SearchContent';
import PrintContent from '../PrintContent';

function SecondTable(props) {
  const { g1, g2, g3, g4, g5, g6 } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>{g1}</th>
          <ArrowContent />
          <th>{g2}</th>
          <SearchContent title={g2} />
        </tr>
        <tr>
          <th>{g3}</th>
          <ArrowContent />
          <th>{g4}</th>
          <SearchContent title={g4} />
        </tr>
        <tr>
          <th>{g5}</th>
          <SearchContent title={g5} />
          <th>{g6}</th>
          <PrintContent />
        </tr>
      </tbody>
    </table>
  );
}

export default SecondTable;