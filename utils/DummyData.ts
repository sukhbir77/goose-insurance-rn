import { ImageSourcePropType } from 'react-native/types';
import { LOGO_ONE, LOGO_TWO, LOGO_THREE, LOGO_FOUR, LOGO_FIVE } from './images';

// Data to reterive the images attached to the different products.
let imageData: { [id: number]: ImageSourcePropType } = {
    0: LOGO_ONE,
    1: LOGO_TWO,
    2: LOGO_THREE,
    3: LOGO_FOUR,
    4: LOGO_FIVE,
};

export default imageData;