import { ThreekitProvider, Player } from '@threekit-tools/treble';
import '../styles/ProductPage.scss';
import FlatForm from '../components/FlatForm';

const ThreeKitComponent = () => {
  return (
    <div className="threekit">
      <ThreekitProvider>
        <div className="tk-treble-player">
          <Player />
        </div>
        <span>
          <FlatForm />
        </span>
      </ThreekitProvider>
    </div>
  );
};
export default ThreeKitComponent;
