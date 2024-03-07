import { RowBetween } from '../../../../Box';
import { Container, Title, TooltipWrapper } from './styles';
import { CustomToolTipProps } from './types'
import { formatNumber } from './utils/formatNumber';

function CustomToolTip({ chartProps, token0, token1, currentPrice }: CustomToolTipProps) {
    const price0 = chartProps?.payload?.[0]?.payload.price0;
    const price1 = chartProps?.payload?.[0]?.payload.price1;
    const tvlToken0 = chartProps?.payload?.[0]?.payload.tvlToken0;
    const tvlToken1 = chartProps?.payload?.[0]?.payload.tvlToken1;

    return (
        <TooltipWrapper>
            <Container>
                <Title>Tick stats</Title>
                <RowBetween style={{ fontSize: 14, fontWeight: 300, letterSpacing: '0.25px', color: '#AFB6C9' }}>
                    <div>{token0?.symbol} Price: </div>
                    <div>
                        {price0
                            ? Number(price0).toLocaleString(undefined, {
                                  minimumSignificantDigits: 1,
                              })
                            : ''}{' '}
                        {token1?.symbol}
                    </div>
                </RowBetween>
                <RowBetween style={{ fontSize: 14, fontWeight: 300, letterSpacing: '0.25px', color: '#AFB6C9' }}>
                    <div>{token1?.symbol} Price: </div>
                    <div>
                        {price1
                            ? Number(price1).toLocaleString(undefined, {
                                  minimumSignificantDigits: 1,
                              })
                            : ''}{' '}
                        {token0?.symbol}
                    </div>
                </RowBetween>
                {currentPrice && price0 && currentPrice > price1 ? (
                    <RowBetween style={{ fontSize: 14, fontWeight: 300, letterSpacing: '0.25px', color: '#AFB6C9' }}>
                        <div>{token0?.symbol} Locked: </div>
                        <div>
                            {tvlToken0 ? formatNumber(tvlToken0) : ''} {token0?.symbol}
                        </div>
                    </RowBetween>
                ) : (
                    <RowBetween style={{ fontSize: 14, fontWeight: 300, letterSpacing: '0.25px', color: '#AFB6C9' }}>
                        <div>{token1?.symbol} Locked: </div>
                        <div>
                            {tvlToken1 ? formatNumber(tvlToken1) : ''} {token1?.symbol}
                        </div>
                    </RowBetween>
                )}
            </Container>
        </TooltipWrapper>
    );
}

export default CustomToolTip;
