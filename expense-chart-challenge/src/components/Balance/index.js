import Card from '../Card';
import './Balance.css';
import { ReactComponent as ReactLogo } from '../../assets/images/circle.svg';

const Balance = () => {
  return (
    <Card className="balance">
      <div className="balance__text">
        <h3>My Balance</h3>
        <p>$921.48</p>
      </div>
      <ReactLogo />
    </Card>
  );
};

export default Balance;
