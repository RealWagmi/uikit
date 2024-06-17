import { ChainId } from '@real-wagmi/sdk';
import getChainLogo from '../getChainLogo';
import { expect, it, describe } from 'vitest';
import { EthereumChain } from '../../components/Svg/Networks';
import { EthereumCircleChain } from '../../components/Svg/NetworksCircle';

describe('getChainLogo', () => {
    it('shoild retunr logo', () => {
        const logo = getChainLogo(ChainId.ETHEREUM);
        expect(logo).toBe(EthereumChain);
    });

    it('shoild retunr logo circle', () => {
        const logo = getChainLogo(ChainId.ETHEREUM, true);
        expect(logo).toBe(EthereumCircleChain);
    });
});
